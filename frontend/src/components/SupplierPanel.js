// src/components/SupplierPanel.js
import React, { useState, useEffect } from "react";
import {
  Panel,
  Table,
  TableRow,
  TableCell,
  Title,
} from "@ui5/webcomponents-react";

export default function SupplierPanel() {
  const [suppliers, setSuppliers] = useState([]);

  console.log("SupplierPanel rendered. suppliers length:", suppliers.length);

  useEffect(() => {
    console.log("SupplierPanel useEffect triggered.");
    const mockSuppliers = [
      { id: 1, name: "Global Med Supply", rating: "A+", status: "Active" },
      { id: 2, name: "Pharma Supplies Inc.", rating: "B", status: "Active" },
      { id: 3, name: "HealthPro Distributors", rating: "A", status: "Active" },
      { id: 4, name: "MediQuick", rating: "C", status: "Inactive" },
      { id: 5, name: "Wellness Corp", rating: "A", status: "Active" },
    ];
    console.log("Setting suppliers to:", mockSuppliers);
    setSuppliers(mockSuppliers);
  }, []);

  const columns = [
    { header: "Supplier Name" },
    { header: "Rating" },
    { header: "Status" },
  ];

  return (
    <Panel headerText="Suppliers" style={{ width: "100%" }}>
      <Table columns={columns}>
        {suppliers.map((item) => {
          console.log("Rendering row for supplier:", item.name);
          return (
            <TableRow key={item.id}>
              <TableCell>
                <Title level="H6">{item.name}</Title>
              </TableCell>
              <TableCell>{item.rating}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          );
        })}
      </Table>
    </Panel>
  );
}
