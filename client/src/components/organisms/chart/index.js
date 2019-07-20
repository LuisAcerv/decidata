import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import DetectionsContext from "../../../context/context";

const styles = {
  container: { margin: "0 auto", width: `${window.innerWidth - 100}px` },
  chart: {
    top: 5,
    right: 30,
    left: -20,
    bottom: 5,
  },
};
const { container, chart } = styles;

export default props => {
  return (
    <div style={container}>
      <BarChart
        width={window.innerWidth - 100}
        height={200}
        data={data}
        margin={chart}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
