// src/components/StyledPanel.js
import React from "react";
import { Panel, Title } from "@ui5/webcomponents-react";
import { ThemingParameters } from "@ui5/webcomponents-react-base";

export default function StyledPanel() {
  // Example: use theming parameters for background, text, etc.
  const panelStyle = {
    backgroundColor: ThemingParameters.sapTile_Background,
    borderRadius: "8px",
    padding: "1rem",
    color: ThemingParameters.sapTextColor, // ensures text color is consistent
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  };

  return (
    <Panel headerText="Styled Panel" style={panelStyle}>
      <Title level="H5">
        This panel uses theming parameters for background & text.
      </Title>
      <p style={{ marginTop: "0.5rem" }}>
        Notice how it adapts to dark mode automatically.
      </p>
    </Panel>
  );
}
