// src/App.js
import React from "react";
import { ShellBar } from "@ui5/webcomponents-react";
import Dashboard from "./components/Dashboard";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

function App() {
  return (
    <>
      <ShellBar
        primaryTitle="SAP Type Supply Chain Dashboard"
        showCoPilot
        showNotifications
        showProductSwitch
      />
      <Dashboard />
    </>
  );
}

export default App;
