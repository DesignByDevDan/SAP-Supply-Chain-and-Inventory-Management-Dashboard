// src/components/UserProfilePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Panel,
  Title,
  Text,
  Avatar,
  Input,
  Button,
  Form,
  FormItem,
} from "@ui5/webcomponents-react";
// If you aren't already importing all icons, ensure you have:
// import "@ui5/webcomponents-icons/dist/employee.js";

export default function UserProfilePage() {
  const navigate = useNavigate();

  // Example user data
  const [profile, setProfile] = useState({
    firstName: "Jane",
    lastName: "Doe",
    email: "j.Doe@example.com",
    phone: "+1 (555) 123-4567",
    department: "Supply Chain Management",
    // We'll ignore profilePicture since we're using an icon
    permissions: ["Admin", "Editor"],
    manager: "Jane Doe",
    projectCount: 5,
    performanceScore: 92,
    activityLogs: [
      "Logged in from IP 192.168.1.10",
      "Updated inventory data",
      "Viewed supplier details",
    ],
  });

  // Minimal editing example for the first panel (basic info)
  const [editing, setEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editableProfile);
    setEditing(false);
    alert("Profile updated!");
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "1rem" }}>
      <Title level="H2">User Profile Overview</Title>
      <Text style={{ marginBottom: "1rem" }}>
        A consolidated view of user information in a 3×3 grid.
      </Text>

      {/*
        Use a 12-column grid with defaultSpan="4" so each panel
        occupies 4 columns → 3 panels per row → 3 rows total (9 panels).
      */}
      <Grid defaultSpan="4" style={{ width: "100%" }}>
        {/* 1. Basic Info Panel */}
        <Panel headerText="Basic Info" style={{ minHeight: "250px" }}>
          {!editing ? (
            <>
              {/* Using the "employee" icon for a placeholder user avatar */}
              <Avatar
                icon="employee"
                size="M"
                style={{ marginBottom: "0.5rem" }}
              />
              <Text>
                <strong>Name:</strong> {profile.firstName} {profile.lastName}
              </Text>
              <Button
                design="Emphasized"
                style={{ marginTop: "0.5rem" }}
                onClick={() => {
                  setEditableProfile(profile);
                  setEditing(true);
                }}
              >
                Edit
              </Button>
            </>
          ) : (
            <Form style={{ maxWidth: "200px" }}>
              <FormItem label="First Name">
                <Input
                  value={editableProfile.firstName}
                  onInput={(e) =>
                    setEditableProfile({
                      ...editableProfile,
                      firstName: e.target.value,
                    })
                  }
                />
              </FormItem>
              <FormItem label="Last Name">
                <Input
                  value={editableProfile.lastName}
                  onInput={(e) =>
                    setEditableProfile({
                      ...editableProfile,
                      lastName: e.target.value,
                    })
                  }
                />
              </FormItem>
              <Button design="Emphasized" onClick={handleSave}>
                Save
              </Button>
              <Button
                onClick={() => setEditing(false)}
                style={{ marginLeft: "0.5rem" }}
              >
                Cancel
              </Button>
            </Form>
          )}
        </Panel>

        {/* 2. Contact Info Panel */}
        <Panel headerText="Contact Info" style={{ minHeight: "250px" }}>
          <Text>
            <strong>Email:</strong> {profile.email}
          </Text>
          <Text>
            <strong>Phone:</strong> {profile.phone}
          </Text>
        </Panel>

        {/* 3. Department Panel */}
        <Panel headerText="Department" style={{ minHeight: "250px" }}>
          <Text>
            <strong>Department:</strong> {profile.department}
          </Text>
          <Text>
            <strong>Manager:</strong> {profile.manager}
          </Text>
        </Panel>

        {/* 4. Permissions Panel */}
        <Panel headerText="Permissions" style={{ minHeight: "250px" }}>
          {profile.permissions.map((perm, index) => (
            <Text key={index}>• {perm}</Text>
          ))}
          <Button
            style={{ marginTop: "0.5rem" }}
            onClick={() => navigate("/profile/permissions")}
          >
            Manage
          </Button>
        </Panel>

        {/* 5. Projects Panel */}
        <Panel headerText="Projects" style={{ minHeight: "250px" }}>
          <Text>
            <strong>Project Count:</strong> {profile.projectCount}
          </Text>
          <Button
            style={{ marginTop: "0.5rem" }}
            onClick={() => navigate("/profile/projects")}
          >
            View Projects
          </Button>
        </Panel>

        {/* 6. Performance Panel */}
        <Panel headerText="Performance" style={{ minHeight: "250px" }}>
          <Text>
            <strong>Performance Score:</strong> {profile.performanceScore}%
          </Text>
          <Button
            style={{ marginTop: "0.5rem" }}
            onClick={() => navigate("/profile/performance")}
          >
            View Details
          </Button>
        </Panel>

        {/* 7. Activity Logs Panel */}
        <Panel headerText="Activity Logs" style={{ minHeight: "250px" }}>
          {profile.activityLogs.map((log, i) => (
            <Text key={i}>• {log}</Text>
          ))}
          <Button
            style={{ marginTop: "0.5rem" }}
            onClick={() => alert("View Full Logs")}
          >
            View Full Logs
          </Button>
        </Panel>

        {/* 8. Additional Panel (Placeholder) */}
        <Panel
          headerText="Teams / Collaboration"
          style={{ minHeight: "250px" }}
        >
          <Text>Placeholder for team/collaboration info.</Text>
        </Panel>

        {/* 9. Another Panel (Placeholder) */}
        <Panel headerText="Miscellaneous" style={{ minHeight: "250px" }}>
          <Text>Placeholder for any extra profile-related data.</Text>
        </Panel>
      </Grid>
    </div>
  );
}
