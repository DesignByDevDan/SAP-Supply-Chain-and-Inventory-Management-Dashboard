// src/components/ManagePermissions.js
import React, { useState } from "react";
import {
  Panel,
  Title,
  List,
  ListItemStandard,
  CheckBox,
  Button,
  FlexBox,
  FlexBoxDirection,
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";

export default function ManagePermissions() {
  const navigate = useNavigate();

  // Mock full set of roles/permissions
  const allPermissions = ["Admin", "Editor", "Viewer", "Analyst"];
  // Example user’s current permissions
  const [userPermissions, setUserPermissions] = useState(["Admin", "Editor"]);

  const handleTogglePermission = (perm) => {
    if (userPermissions.includes(perm)) {
      // remove
      setUserPermissions(userPermissions.filter((p) => p !== perm));
    } else {
      // add
      setUserPermissions([...userPermissions, perm]);
    }
  };

  const handleSave = () => {
    alert(`Permissions updated to: ${userPermissions.join(", ")}`);
    // Here you could call an API to save the updated permissions
    navigate("/profile"); // Go back to the user profile or stay on this page
  };

  return (
    <Panel
      headerText="Manage Permissions"
      // Wider panel to reduce empty space
      style={{
        width: "80%",
        maxWidth: "1400px",
        margin: "2rem auto",
        padding: "2rem",
      }}
    >
      <Title level="H4">User Permissions</Title>
      <List style={{ marginTop: "1rem" }}>
        {allPermissions.map((perm) => (
          <ListItemStandard key={perm}>
            <CheckBox
              checked={userPermissions.includes(perm)}
              onChange={() => handleTogglePermission(perm)}
            />
            <span style={{ marginLeft: "0.5rem" }}>{perm}</span>
          </ListItemStandard>
        ))}
      </List>

      <FlexBox
        direction={FlexBoxDirection.Row}
        style={{ marginTop: "1rem", gap: "0.5rem" }}
      >
        <Button design="Emphasized" onClick={handleSave}>
          Save
        </Button>
        <Button onClick={() => navigate("/profile")}>Cancel</Button>
      </FlexBox>
    </Panel>
  );
}
