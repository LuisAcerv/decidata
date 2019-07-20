import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import DetectionsContext from "./context";

export default class DetectionsProvider extends Component {
  state = {
    detections: {
      columns: [],
      dataSource: [],
    },
  };

  componentDidMount() {
    this.getAllDetections();
  }

  // Get all detections and process for table
  getAllDetections = () => {
    axios.get(process.env.API_ENDPOINT).then(resp => {
      // Create columns object
      const columnsKeys = resp.data[0];
      const columns = [];
      const dataSource = [];
      Object.keys(columnsKeys).map(item => {
        if (item !== "id") {
          columns.push({
            title: item,
            dataIndex: item,
            key: item,
            sorter: (a, b) => a[item].length - b[item].length,
            sortDirections: ["descend"],
          });
        }
      });

      // Remove first item containing keys
      delete resp.data[0];

      // Map data in order to add the key index to the object
      resp["data"].map(({ brand, channel, commercial, date }, index) => {
        dataSource.push({ brand, channel, commercial, date, key: index });
      });

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

  render() {
    return (
      <DetectionsContext.Provider
        value={{
          detections: this.state.detections,
        }}
      >
        {this.props.children}
      </DetectionsContext.Provider>
    );
  }
}
