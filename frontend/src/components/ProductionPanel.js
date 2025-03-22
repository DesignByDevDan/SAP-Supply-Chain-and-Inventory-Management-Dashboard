// src/components/ProductionPanel.js
import React, { useState, useEffect } from "react";
import {
  Panel,
  Table,
  TableRow,
  TableCell,
  Title,
} from "@ui5/webcomponents-react";

export default function ProductionPanel() {
  const [productionData, setProductionData] = useState([]);

  useEffect(() => {
    // Simulate an API call with a timeout
    setTimeout(() => {
      const mockProductionData = [
        { id: 1, product: "Vaccine A", quantity: 500, status: "On Schedule" },
        { id: 2, product: "Drug B", quantity: 120, status: "Delayed" },
        { id: 3, product: "Drug C", quantity: 300, status: "On Schedule" },
        { id: 4, product: "Supplement D", quantity: 80, status: "On Hold" },
        { id: 5, product: "Device E", quantity: 60, status: "On Schedule" },
      ];
      setProductionData(mockProductionData);
    }, 1000);
  }, []);

  const columns = [
    { header: "Product" },
    { header: "Quantity" },
    { header: "Status" },
  ];

  return (
    <Panel headerText="Production Status" style={{ width: "100%" }}>
      <Table columns={columns}>
        {productionData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Title level="H6">{item.product}</Title>
            </TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </Table>
    </Panel>
  );
}
