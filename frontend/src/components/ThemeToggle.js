// src/components/ThemeToggle.js
import React from "react";
import { Button, Title } from "@ui5/webcomponents-react";
import { Theme } from "@ui5/webcomponents-react";

export default function ThemeToggle({ onToggleTheme, currentTheme }) {
  const isDark = currentTheme === Theme.sap_horizon_dark;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Title level="H4">Color Scheme Demo</Title>
      <Button onClick={onToggleTheme} design="Emphasized">
        Switch to {isDark ? "Light" : "Dark"} Mode
      </Button>
    </div>
  );
}
