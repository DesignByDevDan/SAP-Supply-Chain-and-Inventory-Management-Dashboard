// src/components/OrderStatusPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Panel, List, ListItemStandard } from "@ui5/webcomponents-react";

export default function OrderStatusPanel() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/orders")
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  return (
    <Panel headerText="Recent Orders" style={{ width: "100%" }}>
      <List>
        {orders.map((order) => (
          <ListItemStandard key={order.id}>
            Order #{order.id}: {order.product} - {order.status} on {order.date}
          </ListItemStandard>
        ))}
      </List>
    </Panel>
  );
}
