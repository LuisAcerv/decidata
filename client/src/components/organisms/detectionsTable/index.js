import React from "react";
import { Table } from "antd";
import moment from "moment";

const dataSource = [
  {
    key: "1",
    date: moment().format("DD/MM/YYYY"),
    channel: "Fox",
    brand: "Coca cola",
    commercial: "Coca cola zero",
  },
];

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Channel",
    dataIndex: "channel",
    key: "channel",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Commercial",
    dataIndex: "commercial",
    key: "commercial",
  },
];

const styles = {
  table: { margin: "0 auto", width: `${window.innerWidth - 100}px` },
};

const { table } = styles;

export default props => {
  return (
    <div style={table}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};
