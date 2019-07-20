import React from "react";
import { Table } from "antd";
import DetectionsContext from "../../../context/context";
import moment from "moment";

const styles = {
  table: { margin: "0 auto", width: `${window.innerWidth - 100}px` },
};

const { table } = styles;

export default props => {
  return (
    <DetectionsContext.Consumer>
      {context => (
        <div data={context} style={table}>
          <p>Detections</p>
          <Table
            dataSource={context.detections.dataSource}
            columns={context.detections.columns}
          />
        </div>
      )}
    </DetectionsContext.Consumer>
  );
};
