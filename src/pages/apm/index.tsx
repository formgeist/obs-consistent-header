import React from "react";
import MyComponent from "../../components/my_component";
import PageNavigation from "../../components/page_navigation";
import {
  EuiButton,
  EuiCode,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiText,
  EuiTitle
} from "@elastic/eui";

export default () => (
  <EuiPage panelPaddingSize="none">
    <EuiPageBody>
      <PageNavigation />
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Services</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
    </EuiPageBody>
  </EuiPage>
);
