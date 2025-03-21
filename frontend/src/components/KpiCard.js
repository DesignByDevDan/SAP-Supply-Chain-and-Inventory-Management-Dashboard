// src/components/KpiCard.js
import React from "react";
import { Card, CardHeader, Title, Text } from "@ui5/webcomponents-react";

export default function KpiCard({ title, value, unit, status }) {
  return (
    <Card
      style={{ width: "300px" }}
      header={
        <CardHeader
          titleText={title}
          status={status} // E.g., "Success", "Error", "Warning", "Information"
        />
      }
    >
      <div style={{ padding: "1rem" }}>
        <Title level="H4">{value}</Title>
        <Text>{unit}</Text>
      </div>
    </Card>
  );
}
