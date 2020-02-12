import React, { Component } from "react";

import { EuiTabs, EuiTab } from "@elastic/eui";

class MainTabs extends Component {
  constructor(props) {
    super(props);

    this.tabs = [
      {
        id: "services",
        name: "Services",
        disabled: false
      },
      {
        id: "traces",
        name: "Traces",
        disabled: false
      },
      {
        id: "settings",
        name: "Settings",
        disabled: true
      }
    ];

    this.state = {
      selectedTabId: "services"
    };
  }

  onSelectedTabChanged = id => {
    this.setState({
      selectedTabId: id
    });
  };

  renderTabs() {
    return this.tabs.map((tab, index) => (
      <EuiTab
        onClick={() => this.onSelectedTabChanged(tab.id)}
        isSelected={tab.id === this.state.selectedTabId}
        disabled={tab.disabled}
        key={index}
      >
        {tab.name}
      </EuiTab>
    ));
  }

  render() {
    return <EuiTabs display="condensed">{this.renderTabs()}</EuiTabs>;
  }
}

export default MainTabs;
