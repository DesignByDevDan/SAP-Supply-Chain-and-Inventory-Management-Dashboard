// src/components/TrendsPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Panel } from "@ui5/webcomponents-react";
import { LineChart } from "@ui5/webcomponents-react-charts";

export default function TrendsPanel() {
  const [trendData, setTrendData] = useState({ labels: [], values: [] });

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/trends")
      .then((response) => setTrendData(response.data))
      .catch((error) => console.error("Error fetching trend data:", error));
  }, []);

  // Transform data for the chart
  const chartData = trendData.labels.map((label, index) => ({
    month: label,
    value: trendData.values[index],
  }));

  const chartConfig = {
    dimensions: [{ accessor: "month", title: "Month" }],
    measures: [{ accessor: "value", title: "Stock Level" }],
  };

  return (
    <Panel headerText="Supply Chain Trends" style={{ width: "100%" }}>
      <LineChart
        dataset={chartData}
        dimensions={chartConfig.dimensions}
        measures={chartConfig.measures}
        chartConfig={{
          color: ["#0a6ed1"], // custom line color
          yAxisVisible: true,
          xAxisVisible: true,
        }}
        noLegend={false}
      />
    </Panel>
  );
}
