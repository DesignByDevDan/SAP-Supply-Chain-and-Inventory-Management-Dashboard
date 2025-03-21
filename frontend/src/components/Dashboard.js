// src/components/Dashboard.js
import React from "react";
import {
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react";
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
      <InventoryPanel />
      <FlexBox direction={FlexBoxDirection.Row} style={{ gap: "1rem" }}>
        <OrderStatusPanel />
        <TrendsPanel />
      </FlexBox>
    </FlexBox>
  );
}
