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

export default () => {
  return (
    <DetectionsContext.Consumer>
      {context => (
        <div style={container}>
          <p>
            <b>Number of detections per day</b>
          </p>
          <BarChart
            width={window.innerWidth - 100}
            height={200}
            data={context.chartData}
            margin={chart}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="detections" fill="#8884d8" />
          </BarChart>
        </div>
      )}
    </DetectionsContext.Consumer>
  );
};
