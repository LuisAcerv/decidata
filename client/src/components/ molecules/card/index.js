import React from "react";
import { Card } from "antd";

const style = {
  borderRadius: "30px",
  boxShadow: "2px 2px 6px rgba(0,0,0,0.2)",
};

export default ({ title, content }) => (
  <Card title={title} style={style} bordered={true}>
    {content}
  </Card>
);
