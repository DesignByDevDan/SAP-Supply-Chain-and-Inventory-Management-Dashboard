// src/components/OrderStatusPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Panel,
  List,
  ListItemStandard,
  Icon,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxJustifyContent,
} from "@ui5/webcomponents-react";

export default function OrderStatusPanel() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/orders")
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const getIconName = (status) => {
    switch (status) {
      case "Shipped":
      case "Delivered":
        return "accept"; // or 'shipping-status'
      case "Processing":
        return "pending";
      default:
        return "question-mark";
    }
  };

  return (
    <Panel headerText="Recent Orders" style={{ width: "100%" }}>
      <List>
        {orders.map((order) => (
          <ListItemStandard key={order.id}>
            <FlexBox
              alignItems={FlexBoxAlignItems.Center}
              justifyContent={FlexBoxJustifyContent.Start}
              style={{ gap: "0.5rem" }}
            >
              <Icon name={getIconName(order.status)} />
              <span>
                Order #{order.id}: {order.product} - {order.status} on{" "}
                {order.date}
              </span>
            </FlexBox>
          </ListItemStandard>
        ))}
      </List>
    </Panel>
  );
}
