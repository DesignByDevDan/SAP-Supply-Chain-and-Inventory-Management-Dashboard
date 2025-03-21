// src/components/TrendsPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Panel } from "@ui5/webcomponents-react";
import { LineChart } from "@ui5/webcomponents-react-charts";
import { ThemingParameters } from "@ui5/webcomponents-react-base";

function TrendsPanel() {
  const [trendData, setTrendData] = useState({ labels: [], values: [] });

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/trends")
      .then((response) => setTrendData(response.data))
      .catch((error) => console.error("Error fetching trend data:", error));
  }, []);

  const chartData = trendData.labels.map((label, index) => ({
    month: label,
    value: trendData.values[index],
  }));

  const chartConfig = {
    dimensions: [{ accessor: "month", title: "Month" }],
    measures: [{ accessor: "value", title: "Stock Level" }],
  };

  // Use a theming parameter for the line color so it updates with the theme.
  const lineColor = ThemingParameters.sapHighlightColor || "#0a6ed1";

  return (
    <Panel headerText="Supply Chain Trends" style={{ width: "100%" }}>
      <LineChart
        dataset={chartData}
        dimensions={chartConfig.dimensions}
        measures={chartConfig.measures}
        chartConfig={{
          color: [lineColor],
          yAxisVisible: true,
          xAxisVisible: true,
        }}
        noLegend={false}
      />
    </Panel>
  );
}

// Optionally, memoize the component to avoid unnecessary re-renders
export default React.memo(TrendsPanel);
