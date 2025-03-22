// src/components/PerformanceDetails.js
import React, { useState } from "react";
import {
  Panel,
  Title,
  FlexBox,
  FlexBoxDirection,
  Button,
} from "@ui5/webcomponents-react";
import { LineChart } from "@ui5/webcomponents-react-charts";
import { useNavigate } from "react-router-dom";

export default function PerformanceDetails() {
  const navigate = useNavigate();

  // Example monthly performance data
  const [performanceData] = useState([
    { month: "Jan", score: 88 },
    { month: "Feb", score: 90 },
    { month: "Mar", score: 85 },
    { month: "Apr", score: 92 },
    { month: "May", score: 95 },
  ]);

  const chartConfig = {
    dimensions: [{ accessor: "month", label: "Month" }],
    measures: [{ accessor: "score", label: "Performance Score" }],
  };

  return (
    <Panel
      headerText="Performance Details"
      // Wider panel to reduce empty space
      style={{
        width: "80%",
        maxWidth: "1400px",
        margin: "2rem auto",
        padding: "2rem",
      }}
    >
      <Title level="H4">Monthly Performance Trend</Title>
      <LineChart
        style={{ width: "100%", height: "400px", marginTop: "1rem" }}
        dataset={performanceData}
        dimensions={chartConfig.dimensions}
        measures={chartConfig.measures}
        chartConfig={{
          yAxisVisible: true,
          xAxisVisible: true,
          gridHorizontal: true,
        }}
      />
      <FlexBox direction={FlexBoxDirection.Row} style={{ marginTop: "1rem" }}>
        <Button onClick={() => navigate("/profile")}>Back to Profile</Button>
      </FlexBox>
    </Panel>
  );
}
