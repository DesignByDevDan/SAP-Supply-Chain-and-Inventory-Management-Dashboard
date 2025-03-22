// src/components/Dashboard.js
import React, { useState } from "react";
import {
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react";

import FilterBarPanel from "./FilterBarPanel";
import KpiCard from "./KpiCard";
import InventoryPanel from "./InventoryPanel";
import AlertsPanel from "./AlertsPanel";
import SupplierPanel from "./SupplierPanel";
import ProductionPanel from "./ProductionPanel";
import OrderStatusPanel from "./OrderStatusPanel";
import TrendsPanel from "./TrendsPanel";

export default function Dashboard() {
  const [inventorySearchTerm, setInventorySearchTerm] = useState("");

  const handleSearchInventory = (term) => {
    setInventorySearchTerm(term);
  };

  return (
    <FlexBox
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      style={{ gap: "1rem", padding: "1rem" }}
    >
      {/* Filter Bar */}
      <FilterBarPanel onSearchInventory={handleSearchInventory} />

      {/* KPI Cards */}
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

      {/* Row 1: Inventory & Alerts */}
      <FlexBox
        direction={FlexBoxDirection.Row}
        style={{ gap: "1rem", alignItems: "stretch" }}
      >
        <div style={{ flex: 1 }}>
          <InventoryPanel searchTerm={inventorySearchTerm} />
        </div>
        <div style={{ flex: 1 }}>
          <AlertsPanel />
        </div>
      </FlexBox>

      {/* Row 2: Suppliers & Production */}
      <FlexBox
        direction={FlexBoxDirection.Row}
        style={{ gap: "1rem", alignItems: "stretch" }}
      >
        <div style={{ flex: 1 }}>
          <SupplierPanel />
        </div>
        <div style={{ flex: 1 }}>
          <ProductionPanel />
        </div>
      </FlexBox>

      {/* Row 3: Order Status & Trends */}
      <FlexBox
        direction={FlexBoxDirection.Row}
        style={{ gap: "1rem", alignItems: "stretch" }}
      >
        <div style={{ flex: 1 }}>
          <OrderStatusPanel />
        </div>
        <div style={{ flex: 1 }}>
          <TrendsPanel />
        </div>
      </FlexBox>
    </FlexBox>
  );
}
