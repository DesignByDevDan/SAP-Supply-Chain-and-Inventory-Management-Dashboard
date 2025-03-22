// src/components/SideNavBar.js
import React from "react";
import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@ui5/webcomponents-react";

export default function SideNavBar() {
  const navigate = useNavigate();

  return (
    <SideNavigation
      profile={
        <Avatar
          size="M"
          shape="Circle"
          initials="DL"
          // Alternatively, provide an image URL via the `image` prop
        />
      }
      footerItems={[
        <SideNavigationItem
          key="settings"
          text="Settings"
          icon="action-settings"
          onClick={() => navigate("/profile")}
        />,
      ]}
    >
      <SideNavigationItem
        icon="home"
        text="Dashboard"
        onClick={() => navigate("/")}
      />
      <SideNavigationItem
        icon="employee"
        text="User Profile"
        onClick={() => navigate("/profile")}
      />
      <SideNavigationItem icon="settings" text="Admin Access">
        <SideNavigationSubItem
          icon="key"
          text="Roles"
          onClick={() => navigate("/admin/roles")}
        />
        <SideNavigationSubItem
          icon="shield"
          text="Security"
          onClick={() => navigate("/admin/security")}
        />
      </SideNavigationItem>
      <SideNavigationItem
        icon="log"
        text="Logs"
        onClick={() => {
          // Example: navigate to a Logs page (create this page if desired)
          navigate("/logs");
        }}
      />
    </SideNavigation>
  );
}
