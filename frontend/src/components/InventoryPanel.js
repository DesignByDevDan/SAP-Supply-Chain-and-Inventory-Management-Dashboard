// src/components/InventoryPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Panel, Table, TableCell, TableRow } from "@ui5/webcomponents-react";

export default function InventoryPanel() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/inventory")
      .then((response) => setInventory(response.data))
      .catch((error) => console.error("Error fetching inventory:", error));
  }, []);

  // Define columns as objects
  const columns = [{ header: "Product" }, { header: "Stock Level" }];

  return (
    <Panel headerText="Inventory Overview" style={{ width: "100%" }}>
      <Table
        columns={columns}
        items={inventory}
        renderRow={(item) => (
          <TableRow key={item.id}>
            <TableCell>{item.product}</TableCell>
            <TableCell>{item.stock}</TableCell>
          </TableRow>
        )}
      />
    </Panel>
  );
}
