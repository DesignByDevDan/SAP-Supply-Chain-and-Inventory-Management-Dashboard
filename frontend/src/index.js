// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import "@ui5/webcomponents/dist/Assets"; // Loads UI5 assets like icons and fonts
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
