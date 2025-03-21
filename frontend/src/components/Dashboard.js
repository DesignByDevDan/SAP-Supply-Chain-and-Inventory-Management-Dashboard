// src/components/Dashboard.js
import React from "react";
import {
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react";

import FilterBarPanel from "./FilterBarPanel";
import KpiCard from "./KpiCard";
import InventoryPanel from "./InventoryPanel";
import OrderStatusPanel from "./OrderStatusPanel";
import TrendsPanel from "./TrendsPanel";

export default function Dashboard() {
  return (
    <FlexBox
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      style={{ gap: "1rem", padding: "1rem" }}
    >
      {/* 1. Filter Bar */}
      <FilterBarPanel />

      {/* 2. KPI Cards */}
      <FlexBox direction={FlexBoxDirection.Row} style={{ gap: "1rem" }}>
        <KpiCard
          title="Open Orders"
          value="128"
          unit="Orders"
          status="Success"
        />
        <KpiCard
          title="Overdue Shipments"
          value="14"
          unit="Shipments"
          status="Error"
        />
        <KpiCard
          title="In Production"
          value="73"
          unit="Batches"
          status="Information"
        />
      </FlexBox>

      {/* 3. Existing Panels */}
      <InventoryPanel />

      <FlexBox direction={FlexBoxDirection.Row} style={{ gap: "1rem" }}>
        <OrderStatusPanel />
        <TrendsPanel />
      </FlexBox>
    </FlexBox>
  );
}
