import React from "react";
import { Layout, Icon } from "antd";

const { Footer, Content, Header } = Layout;

export default props => {
  const styles = {
    layout: {
      minHeight: "100vh",
      background: "#FFFFFF",
    },
    header: {
      background: "#4775DE",
      color: "white",
      textAlign: "center",
    },
    footer: {
      background: "#FFFFFF",
      textAlign: "center",
    },
  };

  const { layout, footer, header } = styles;

  return (
    <div>
      <Layout style={layout}>
        <Header style={header}>Decidata.tv</Header>
        <Content>{props.children}</Content>
        <Footer style={footer}>
          By&nbsp;
          <a href="https://medium.com/@luiacerv" target="__blank">
            Luis Acerv
          </a>
          &nbsp;
          <a href="https://github.com/LuisAcerv" target="__blank">
            <Icon type="github" />
          </a>
        </Footer>
      </Layout>
    </div>
  );
};
