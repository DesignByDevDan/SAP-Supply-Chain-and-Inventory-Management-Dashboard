// src/components/AppShellBar.js
import React from "react";
import { ShellBar, Avatar } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";

export default function AppShellBar() {
  const navigate = useNavigate();

  return (
    <ShellBar
      primaryTitle="SAP Supply Chain Dashboard"
      showCoPilot
      showNotifications
      showProductSwitch
      // When clicking the profile area, navigate to the profile page
      profile={
        <div
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
          title="User Profile"
        >
          <Avatar icon="employee" size="XS" shape="Circle" />
        </div>
      }
    />
  );
}
