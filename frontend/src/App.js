// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  Theme,
  FlexBox,
  FlexBoxDirection,
} from "@ui5/webcomponents-react";
import SideNavBar from "./components/SideNavBar";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import AdminAccess from "./components/AdminAccess";
import AppShellBar from "./components/AppShellBar";
import ThemeToggle from "./components/ThemeToggle";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import RolesPage from "./components/RolesPage";
import SecurityPage from "./components/SecurityPage";
import ManagePermissions from "./components/ManagePermissions";
import ProjectsPage from "./components/ProjectsPage";
import PerformanceDetails from "./components/PerformanceDetails";

export default function App() {
  const [theme, setTheme] = useState(Theme.sap_horizon);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.sap_horizon
        ? Theme.sap_horizon_dark
        : Theme.sap_horizon
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <FlexBox direction={FlexBoxDirection.Row} style={{ height: "100vh" }}>
          {/* Side Navigation on the left */}
          <SideNavBar />
          {/* Main content on the right */}
          <FlexBox direction={FlexBoxDirection.Column} style={{ flex: 1 }}>
            {/* Top row: Theme toggle and ShellBar */}
            <FlexBox
              direction={FlexBoxDirection.Row}
              style={{ alignItems: "center", padding: "0.5rem" }}
            >
              <ThemeToggle onToggleTheme={toggleTheme} currentTheme={theme} />
              <AppShellBar />
            </FlexBox>
            {/* Main routed content */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/admin" element={<AdminAccess />} />
              <Route path="/admin/roles" element={<RolesPage />} />
              <Route path="/admin/security" element={<SecurityPage />} />
              <Route
                path="/profile/permissions"
                element={<ManagePermissions />}
              />
              <Route path="/profile/projects" element={<ProjectsPage />} />
              <Route
                path="/profile/performance"
                element={<PerformanceDetails />}
              />
              {/* Add additional routes as needed */}
            </Routes>
          </FlexBox>
        </FlexBox>
      </Router>
    </ThemeProvider>
  );
}
