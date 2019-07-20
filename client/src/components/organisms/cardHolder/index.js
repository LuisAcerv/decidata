import React from "react";
import { Col, Row, Statistic } from "antd";
import moment from "moment";
import { Card } from "../../ molecules";
import DetectionsContext from "../../../context/context";

export default () => {
  const styles = {
    container: {
      background: "#FFFFFF",
      padding: "50px",
    },
  };

  const { container } = styles;

  return (
    <DetectionsContext.Consumer>
      {context => (
        <div style={container}>
          <Row gutter={16}>
            <Col span={6}>
              <Card
                title="Channel with most detections"
                content={
                  <Statistic
                    title={context.channelWithMoreDetections.name}
                    value={context.channelWithMoreDetections.count}
                  />
                }
              />
            </Col>
            <Col span={6}>
              <Card
                title="Brand with most detections"
                content={
                  <Statistic
                    title={context.brandWithMoreDetections.name}
                    value={context.brandWithMoreDetections.count}
                  />
                }
              />
            </Col>
            <Col span={6}>
              <Card
                title="Commercial with most detections"
                content={
                  <Statistic
                    title={context.commercialWithMoreDetections.name}
                    value={context.commercialWithMoreDetections.count}
                  />
                }
              />
            </Col>
            <Col span={6}>
              <Card
                title="Day with most detections"
                content={
                  <Statistic
                    title={
                      moment(
                        context.dateWithMoreDetections.name,
                        "YYYY-MM-DD HH:mm:ss"
                      ).format("dddd") === "Invalid date"
                        ? ""
                        : moment(
                            context.dateWithMoreDetections.name,
                            "YYYY-MM-DD HH:mm:ss"
                          ).format("dddd")
                    }
                    value={context.dateWithMoreDetections.count}
                  />
                }
              />
            </Col>
          </Row>
        </div>
      )}
    </DetectionsContext.Consumer>
  );
};
