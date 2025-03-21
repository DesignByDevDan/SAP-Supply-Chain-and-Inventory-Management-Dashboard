// src/components/InventoryPanel.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Panel,
  Table,
  TableRow,
  TableCell,
  Title,
} from "@ui5/webcomponents-react";

export default function InventoryPanel() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/inventory")
      .then((response) => {
        console.log("Inventory data:", response.data);
        setInventory(response.data);
      })
      .catch((error) => console.error("Error fetching inventory:", error));
  }, []);

  const columns = [{ header: "Product" }, { header: "Stock Level" }];

  return (
    <Panel headerText="Inventory Overview" style={{ width: "100%" }}>
      <Table
        columns={columns}
        items={inventory}
        renderRow={(item) => {
          const isLowStock = item.stock < 50;
          const rowStyle = {
            backgroundColor: isLowStock ? "#ffe6e6" : "inherit",
          };

          return (
            <TableRow key={item.id} style={rowStyle}>
              <TableCell>
                <Title level="H5">{item.product}</Title>
              </TableCell>
              <TableCell>
                {isLowStock ? (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    {item.stock}
                  </span>
                ) : (
                  <span>{item.stock}</span>
                )}
              </TableCell>
            </TableRow>
          );
        }}
      />
    </Panel>
  );
}
