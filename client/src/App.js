import React from "react";
import { Home } from "./components/pages";
import DetectionsProvider from "./context/provider";
export default () => {
  return (
    <DetectionsProvider>
      <Home />
    </DetectionsProvider>
  );
};
