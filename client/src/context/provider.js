import React, { Component } from "react";
import axios from "axios";
import DetectionsContext from "./context";

export default class DetectionsProvider extends Component {
  state = {
    detections: {
      columns: [],
      dataSource: [],
    },
    channelWithMoreDetections: "",
    brandWithMoreDetections: "",
    commercialWithMoreDetections: "",
    dateWithMoreDetections: "",
    chartData: [],
  };

  componentDidMount() {
    this.getAllDetections();
  }

  // Get all detections and process for table
  getAllDetections = () => {
    axios.get(process.env.API_ENDPOINT).then(resp => {
      const columnsKeys = resp.data[0];

      const columns = this.mapColumns(columnsKeys);

      // Remove first item containing keys
      delete resp.data[0];

      // Map data in order to add the key index to the object
      const dataSource = this.mapDataSource(resp.data);

      const channelWithMoreDetections = this.getChannelWithMoreDetections(
        resp.data
      );
      const brandWithMoreDetections = this.getBrandWithMoreDetections(
        resp.data
      );
      const commercialWithMoreDetections = this.getCommercialWithMoreDetections(
        resp.data
      );
      const dateWithMoreDetections = this.getDateWithMoreDetections(resp.data);

      const chartData = this.getChartData(resp.data);

      // Save processed data to the state
      this.setState(data => ({
        ...data,
        detections: {
          columns,
          dataSource: dataSource.sort(function(a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
          }),
        },
        channelWithMoreDetections,
        brandWithMoreDetections,
        commercialWithMoreDetections,
        dateWithMoreDetections,
        chartData,
      }));
    });
  };

  mapColumns = columnsKeys => {
    const columns = [];
    Object.keys(columnsKeys).map(item => {
      if (item !== "id") {
        columns.push({
          title: this.uppercaseFirst(item),
          dataIndex: item,
          key: item,
          sorter: (a, b) => a[item].length - b[item].length,
          sortDirections: ["descend"],
        });
      }
    });

    return columns;
  };

  mapDataSource = data => {
    const dataSource = [];

    data.map(({ brand, channel, commercial, date }, index) => {
      dataSource.push({ brand, channel, commercial, date, key: index });
    });

    return dataSource;
  };

  uppercaseFirst = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  getChannelWithMoreDetections = data => {
    const counts = {};
    if (data) {
      data.map(({ channel }) => {
        counts[channel] = (counts[channel] || 0) + 1;
      });
    }

    const arr = Object.keys(counts).map(key => {
      return { name: key, count: counts[key] };
    });

    const max = arr.reduce((l, e) => (e.count > l.count ? e : l));
    return max;
  };

  getBrandWithMoreDetections = data => {
    const counts = {};
    if (data) {
      data.map(({ brand }) => {
        counts[brand] = (counts[brand] || 0) + 1;
      });
    }

    const arr = Object.keys(counts).map(key => {
      return { name: key, count: counts[key] };
    });

    const max = arr.reduce((l, e) => (e.count > l.count ? e : l));
    return max;
  };

  getCommercialWithMoreDetections = data => {
    const counts = {};
    if (data) {
      data.map(({ commercial }) => {
        counts[commercial] = (counts[commercial] || 0) + 1;
      });
    }

    const arr = Object.keys(counts).map(key => {
      return { name: key, count: counts[key] };
    });

    const max = arr.reduce((l, e) => (e.count > l.count ? e : l));
    return max;
  };

  getDateWithMoreDetections = data => {
    const counts = {};
    if (data) {
      data.map(({ date }) => {
        const d = date.split(" ")[0];
        counts[d] = (counts[d] || 0) + 1;
      });
    }

    const arr = Object.keys(counts).map(key => {
      return { name: key, count: counts[key] };
    });

    const max = arr.reduce((l, e) => (e.count > l.count ? e : l));
    return max;
  };

  getChartData = data => {
    const counts = {};
    if (data) {
      data.map(({ date }) => {
        const d = date.split(" ")[0];
        counts[d] = (counts[d] || 0) + 1;
      });
    }

    const arr = Object.keys(counts).map(key => {
      return { name: key, detections: parseInt(counts[key]) };
    });

    return arr;
  };

  render() {
    return (
      <DetectionsContext.Provider
        value={{
          detections: this.state.detections,
          channelWithMoreDetections: this.state.channelWithMoreDetections,
          brandWithMoreDetections: this.state.brandWithMoreDetections,
          commercialWithMoreDetections: this.state.commercialWithMoreDetections,
          dateWithMoreDetections: this.state.dateWithMoreDetections,
          chartData: this.state.chartData,
        }}
      >
        {this.props.children}
      </DetectionsContext.Provider>
    );
  }
}
