// src/components/AccentCard.js
import React from "react";
import { Card, CardHeader, Title, Text } from "@ui5/webcomponents-react";
import { ThemingParameters } from "@ui5/webcomponents-react-base";

export default function AccentCard() {
  const cardStyle = {
    backgroundColor: ThemingParameters.sapTile_Background,
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    padding: "1rem",
  };

  // Example accent color from theming parameters or custom CSS var
  const highlightStyle = {
    color: ThemingParameters.sapHighlightColor,
    fontWeight: "bold",
  };

  // Example of a "danger" or "error" style
  const lowStockStyle = {
    color: ThemingParameters.sapNegativeTextColor,
    fontWeight: "bold",
  };

  return (
    <Card
      style={cardStyle}
      header={
        <CardHeader titleText="Accent Card" subtitleText="KPI Overview" />
      }
    >
      <Title level="H5" style={{ marginBottom: "0.5rem" }}>
        Inventory KPI
      </Title>
      <Text>
        Total Products: <span style={highlightStyle}>45</span>
      </Text>
      <br />
      <Text>
        Low Stock Items: <span style={lowStockStyle}>3</span>
      </Text>
    </Card>
  );
}
