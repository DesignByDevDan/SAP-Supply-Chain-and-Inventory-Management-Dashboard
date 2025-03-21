// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// Simulated data
const inventoryData = [
  { id: 1, product: "Drug A", stock: 120 },
  { id: 2, product: "Drug B", stock: 45 },
  { id: 3, product: "Drug C", stock: 80 },
];

const ordersData = [
  { id: 101, product: "Drug A", status: "Shipped", date: "2025-03-15" },
  { id: 102, product: "Drug B", status: "Processing", date: "2025-03-16" },
  { id: 103, product: "Drug C", status: "Delivered", date: "2025-03-14" },
];

const trendsData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  values: [100, 120, 90, 140, 110],
};

app.get("/api/inventory", (req, res) => {
  res.json(inventoryData);
});

app.get("/api/orders", (req, res) => {
  res.json(ordersData);
});

app.get("/api/trends", (req, res) => {
  res.json(trendsData);
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
