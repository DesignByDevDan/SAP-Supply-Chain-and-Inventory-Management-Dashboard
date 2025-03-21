// src/App.js
import React, { useState } from "react";
import {
  ShellBar,
  ThemeProvider,
  Theme,
  FlexBox,
  FlexBoxDirection,
} from "@ui5/webcomponents-react";
import Dashboard from "./components/Dashboard";
import ThemeToggle from "./components/ThemeToggle"; // Ensure you create this component
import "@ui5/webcomponents-icons/dist/AllIcons.js";

function App() {
  const [theme, setTheme] = useState(Theme.sap_horizon); // Start with light theme

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.sap_horizon
        ? Theme.sap_horizon_dark
        : Theme.sap_horizon
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <FlexBox
        direction={FlexBoxDirection.Column}
        style={{ padding: "1rem", gap: "1rem" }}
      >
        <ThemeToggle onToggleTheme={toggleTheme} currentTheme={theme} />
        <ShellBar
          primaryTitle="SAP Type Supply Chain Dashboard"
          showCoPilot
          showNotifications
          showProductSwitch
        />
        <Dashboard />
      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
