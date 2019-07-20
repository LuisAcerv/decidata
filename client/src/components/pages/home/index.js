import React from "react";
import { CardHolder, Chart, DetectionsTable } from "../../organisms";
import { Dashboard } from "../../templates";

export default () => (
  <Dashboard>
    <CardHolder />
    <Chart />
    <DetectionsTable />
  </Dashboard>
);
