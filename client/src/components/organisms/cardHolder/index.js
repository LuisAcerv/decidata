import React from "react";
import { Col, Row } from "antd";
import { Card } from "../../ molecules";

export default props => {
  const styles = {
    container: {
      background: "#FFFFFF",
      padding: "50px",
    },
  };

  const { container } = styles;

  return (
    <div style={container}>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Channel with most detections" content={"Card content"} />
        </Col>
        <Col span={6}>
          <Card title="Brand with most detections" content={"Card content"} />
        </Col>
        <Col span={6}>
          <Card
            title="Commercial with most detections"
            content={"Card content"}
          />
        </Col>
        <Col span={6}>
          <Card title="Day with most detections" content={"Card content"} />
        </Col>
      </Row>
    </div>
  );
};
