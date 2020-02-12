import React from "react";
import { EuiIcon, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import MainTabs from "../components/main-tabs";

const divStyle = {
  background: "white",
  display: "inline-block",
  padding: "24px 0"
};

export default () => (
  <div style={divStyle}>
    <EuiFlexGroup alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiIcon type="apmApp" size="xl" />
      </EuiFlexItem>
      <EuiFlexItem>
        <MainTabs />
      </EuiFlexItem>
    </EuiFlexGroup>
  </div>
);
