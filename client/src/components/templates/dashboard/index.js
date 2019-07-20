import React from "react";
import { Layout, Icon } from "antd";

const { Footer, Content } = Layout;

export default props => {
  const styles = {
    layout: {
      minHeight: "100vh",
      background: "#FFFFFF",
    },
    footer: {
      background: "#FFFFFF",
      textAlign: "center",
    },
  };

export default () => {
  return <div>
      <Layout>
  <Header>Header</Header>
  <Content>Content</Content>
  <Footer>Footer</Footer>
</Layout></div>;
};
