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

      // Map channels
      console.log(this.getChannelWithMoreDetections(resp.data));
      console.log(this.getBrandWithMoreDetections(resp.data));
      console.log(this.getCommercialWithMoreDetections(resp.data));
      console.log(this.getDatWithMoreDetections(resp.data));

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
    return counts;
  };

  getBrandWithMoreDetections = data => {
    const counts = {};
    if (data) {
      data.map(({ brand }) => {
        counts[brand] = (counts[brand] || 0) + 1;
      });
    }
    return counts;
  };

  getCommercialWithMoreDetections = data => {
    const counts = {};
    if (data) {
      data.map(({ commercial }) => {
        counts[commercial] = (counts[commercial] || 0) + 1;
      });
    }
    return counts;
  };

  getDatWithMoreDetections = data => {
    const counts = {};
    if (data) {
      data.map(({ date }) => {
        const d = date.split(" ")[0];
        counts[d] = (counts[d] || 0) + 1;
      });
    }
    return counts;
  };

  render() {
    return (
      <DetectionsContext.Provider
        value={{
          detections: this.state.detections,
          channelWithMoreViews: this.state.channelWithMoreViews,
        }}
      >
        {this.props.children}
      </DetectionsContext.Provider>
    );
  }
}
