// src/components/InventoryPanel.js
import React from "react";
import {
  Panel,
  Table,
  TableRow,
  TableCell,
  Title,
} from "@ui5/webcomponents-react";
import { useInventory } from "../hooks/useInventory";

export default function InventoryPanel({ searchTerm }) {
  const inventory = useInventory();

  const columns = [{ header: "Product" }, { header: "Stock Level" }];

  // Filter inventory by product name if searchTerm is not empty
  const filteredInventory = inventory.filter((item) =>
    item.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Panel headerText="Inventory Overview" style={{ width: "100%" }}>
      <Table columns={columns}>
        {filteredInventory.map((item) => {
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
        })}
      </Table>
    </Panel>
  );
}
