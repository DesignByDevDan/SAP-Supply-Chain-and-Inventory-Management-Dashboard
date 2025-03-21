// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import "@ui5/webcomponents/dist/Assets"; // Loads UI5 assets (fonts, icons, etc.)
import { ThemeProvider, Theme } from "@ui5/webcomponents-react";
import App from "./App";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider theme={Theme.sap_horizon}>
    <App />
  </ThemeProvider>
);
