// src/components/ProjectsPage.js
import React, { useState } from "react";
import {
  Panel,
  Title,
  Table,
  TableRow,
  TableCell,
  Button,
  FlexBox,
  FlexBoxDirection,
  Input,
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
  const navigate = useNavigate();

  // Mock projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Supply Chain Optimization",
      status: "In Progress",
      deadline: "2025-04-15",
    },
    {
      id: 2,
      name: "Inventory Migration",
      status: "Completed",
      deadline: "2025-01-30",
    },
  ]);

  // Example new project form
  const [newProject, setNewProject] = useState({
    name: "",
    status: "Not Started",
    deadline: "",
  });

  const handleAddProject = () => {
    if (!newProject.name) {
      alert("Please enter a project name.");
      return;
    }
    const nextId = projects.length
      ? Math.max(...projects.map((p) => p.id)) + 1
      : 1;
    setProjects([...projects, { ...newProject, id: nextId }]);
    setNewProject({ name: "", status: "Not Started", deadline: "" });
  };

  return (
    <Panel
      headerText="User Projects"
      style={{ maxWidth: "1000px", margin: "2rem auto", padding: "1rem" }}
    >
      <Title level="H4">Projects List</Title>
      <Table
        columns={[
          { header: "Name" },
          { header: "Status" },
          { header: "Deadline" },
        ]}
      >
        {projects.map((proj) => (
          <TableRow key={proj.id}>
            <TableCell>{proj.name}</TableCell>
            <TableCell>{proj.status}</TableCell>
            <TableCell>{proj.deadline}</TableCell>
          </TableRow>
        ))}
      </Table>

      <Title level="H5" style={{ marginTop: "1rem" }}>
        Add New Project
      </Title>
      <FlexBox
        direction={FlexBoxDirection.Row}
        style={{ gap: "0.5rem", marginTop: "0.5rem" }}
      >
        <Input
          placeholder="Project Name"
          value={newProject.name}
          onInput={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
        />
        <Input
          placeholder="Status"
          value={newProject.status}
          onInput={(e) =>
            setNewProject({ ...newProject, status: e.target.value })
          }
        />
        <Input
          placeholder="Deadline (YYYY-MM-DD)"
          value={newProject.deadline}
          onInput={(e) =>
            setNewProject({ ...newProject, deadline: e.target.value })
          }
        />
        <Button design="Emphasized" onClick={handleAddProject}>
          Add
        </Button>
      </FlexBox>

      <FlexBox direction={FlexBoxDirection.Row} style={{ marginTop: "1rem" }}>
        <Button onClick={() => navigate("/profile")}>Back to Profile</Button>
      </FlexBox>
    </Panel>
  );
}
