// src/components/AdminAccess.js
import React from "react";
import { Panel, Title, Text } from "@ui5/webcomponents-react";

export default function AdminAccess() {
  return (
    <Panel headerText="Admin Access" style={{ width: "100%", padding: "1rem" }}>
      <Title level="H4">Admin Panel</Title>
      <Text>
        This is the admin panel. Manage roles, security settings, and other
        administrative tasks here.
      </Text>
    </Panel>
  );
}
