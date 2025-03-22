// src/components/RolesPage.js
import React from "react";
import {
  Panel,
  Title,
  Text,
  List,
  ListItemStandard,
} from "@ui5/webcomponents-react";

export default function RolesPage() {
  // Simulated roles data
  const roles = [
    {
      id: 1,
      role: "Administrator",
      description: "Full access to all system functionalities.",
    },
    {
      id: 2,
      role: "Manager",
      description:
        "Can manage teams, user assignments, and view detailed reports.",
    },
    {
      id: 3,
      role: "Auditor",
      description:
        "Read-only access to logs, compliance data, and system audits.",
    },
  ];

  return (
    <Panel
      headerText="Roles Management"
      style={{ width: "100%", padding: "1rem" }}
    >
      <Title level="H4">Roles & Permissions</Title>
      <Text>
        Below is a list of roles along with a brief description of their
        permissions:
      </Text>
      <List>
        {roles.map((role) => (
          <ListItemStandard key={role.id}>
            <strong>{role.role}:</strong> {role.description}
          </ListItemStandard>
        ))}
      </List>
    </Panel>
  );
}
