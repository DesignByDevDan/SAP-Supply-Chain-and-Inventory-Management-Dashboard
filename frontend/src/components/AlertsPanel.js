// src/components/AlertsPanel.js
import React from "react";
import {
  Panel,
  List,
  ListItemStandard,
  Icon,
  Title,
} from "@ui5/webcomponents-react";
import { useInventory } from "../hooks/useInventory";

export default function AlertsPanel() {
  const inventory = useInventory();
  // Filter inventory for items with stock below 50
  const alerts = inventory.filter((item) => item.stock < 50);

  if (alerts.length === 0) {
    return (
      <Panel headerText="Alerts" style={{ width: "100%" }}>
        <Title level="H5">All inventory levels are sufficient.</Title>
      </Panel>
    );
  }

  return (
    <Panel headerText="Alerts" style={{ width: "100%" }}>
      <List>
        {alerts.map((item) => (
          <ListItemStandard key={item.id}>
            <Icon
              name="alert"
              style={{ color: "red", marginRight: "0.5rem" }}
            />
            <span>
              Low stock alert for {item.product}: only {item.stock} left.
            </span>
          </ListItemStandard>
        ))}
      </List>
    </Panel>
  );
}
