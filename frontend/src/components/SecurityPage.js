// src/components/SecurityPage.js
import React, { useState } from "react";
import {
  Title,
  Text,
  Panel,
  List,
  ListItemStandard,
  Switch,
  Input,
  Button,
  TabContainer,
  Tab,
  Form,
  FormItem,
} from "@ui5/webcomponents-react";

export default function SecurityOverview() {
  // Example states for a few settings; expand these as needed
  const [encryptionEnabled, setEncryptionEnabled] = useState(true);
  const [encryptionKey, setEncryptionKey] = useState("Key-1234");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [apiTokens] = useState([
    { id: 1, name: "IntegrationTokenA", lastUsed: "2025-03-12" },
    { id: 2, name: "PartnerTokenB", lastUsed: "2025-03-10" },
  ]);

  // Example function to simulate updating settings
  const handleUpdateEncryption = () => {
    alert(
      `Encryption updated. Key: ${encryptionKey}, Enabled: ${encryptionEnabled}`
    );
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "2rem auto", padding: "1rem" }}>
      <Title level="H3">Security Overview</Title>
      <Text style={{ marginBottom: "1rem" }}>
        Manage all security configurations in one place. Expand each panel for
        details.
      </Text>

      {/* 1. Encryption & Key Management */}
      <Panel
        headerText="Encryption & Key Management"
        expandable
        style={{ marginBottom: "1rem" }}
      >
        <Text>
          Control encryption for data at rest and in transit. Manage or rotate
          keys here.
        </Text>
        <div style={{ marginTop: "1rem" }}>
          <Switch
            text={encryptionEnabled ? "Encryption On" : "Encryption Off"}
            checked={encryptionEnabled}
            onChange={(e) => setEncryptionEnabled(e.detail.checked)}
          />
          <br />
          <br />
          <Input
            value={encryptionKey}
            onInput={(e) => setEncryptionKey(e.target.value)}
            placeholder="Enter new encryption key"
          />
          <br />
          <br />
          <Button design="Emphasized" onClick={handleUpdateEncryption}>
            Update Encryption
          </Button>
        </div>
      </Panel>

      {/* 2. API & Token Management */}
      <Panel
        headerText="API & Token Management"
        expandable
        style={{ marginBottom: "1rem" }}
      >
        <Text>
          View or revoke API tokens for external integrations. Generate new
          tokens as needed.
        </Text>
        <List style={{ marginTop: "1rem" }}>
          {apiTokens.map((token) => (
            <ListItemStandard key={token.id}>
              <strong>{token.name}</strong> - Last used on {token.lastUsed}
            </ListItemStandard>
          ))}
        </List>
        <Button
          style={{ marginTop: "1rem" }}
          onClick={() => alert("Generate Token clicked")}
        >
          Generate New Token
        </Button>
      </Panel>

      {/* 3. SSO & Identity Provider (IdP) Settings */}
      <Panel
        headerText="SSO & Identity Provider (IdP) Settings"
        expandable
        style={{ marginBottom: "1rem" }}
      >
        <Text>
          Configure single sign-on (SSO) for your enterprise. Manage IdP
          certificates and policies.
        </Text>
        <div style={{ marginTop: "1rem" }}>
          <Switch
            checked={twoFactorEnabled}
            onChange={(e) => setTwoFactorEnabled(e.detail.checked)}
            text={`Two-Factor Authentication: ${
              twoFactorEnabled ? "Enabled" : "Disabled"
            }`}
          />
        </div>
        <Button
          style={{ marginTop: "1rem" }}
          onClick={() => alert("SSO Updated!")}
        >
          Update SSO Settings
        </Button>
      </Panel>

      {/* 4. Compliance & Audit */}
      <Panel
        headerText="Compliance & Audit"
        expandable
        style={{ marginBottom: "1rem" }}
      >
        <Text>
          Track regulatory compliance (e.g., HIPAA, GDPR) and audit logs.
          Generate reports for legal or security reviews.
        </Text>
        <Button
          style={{ marginTop: "1rem" }}
          onClick={() => alert("Generate Compliance Report")}
        >
          Generate Compliance Report
        </Button>
      </Panel>

      {/* 5. Active Sessions & User Management */}
      <Panel
        headerText="Active Sessions & User Management"
        expandable
        style={{ marginBottom: "1rem" }}
      >
        <Text>
          Monitor current user sessions and manage user accounts from a security
          perspective.
        </Text>
        <List style={{ marginTop: "1rem" }}>
          <ListItemStandard>
            <strong>User A</strong> - Logged in from IP 192.168.1.10
          </ListItemStandard>
          <ListItemStandard>
            <strong>User B</strong> - Logged in from IP 192.168.1.20
          </ListItemStandard>
        </List>
        <Button
          style={{ marginTop: "1rem" }}
          onClick={() => alert("Terminate Session clicked")}
        >
          Terminate Selected Session
        </Button>
      </Panel>

      {/* 6. Intrusion Detection & Anomaly Monitoring */}
      <Panel
        headerText="Intrusion Detection & Anomaly Monitoring"
        expandable
        style={{ marginBottom: "1rem" }}
      >
        <Text>
          Monitor suspicious activities, repeated failed logins, and unusual IP
          addresses. Use anomaly detection for proactive alerts.
        </Text>
        <List style={{ marginTop: "1rem" }}>
          <ListItemStandard>
            <strong>Alert:</strong> Multiple failed logins from IP 10.0.0.5
          </ListItemStandard>
          <ListItemStandard>
            <strong>Alert:</strong> Unusual data export by User C
          </ListItemStandard>
        </List>
      </Panel>

      {/* 7. Network & Firewall Settings */}
      <Panel
        headerText="Network & Firewall Settings"
        expandable
        style={{ marginBottom: "1rem" }}
      >
        <Text>
          Manage firewall rules, VPN configurations, and network traffic
          restrictions.
        </Text>
        <List style={{ marginTop: "1rem" }}>
          <ListItemStandard>
            <strong>Firewall Rule 1</strong> - Allow inbound on port 443
          </ListItemStandard>
          <ListItemStandard>
            <strong>Firewall Rule 2</strong> - Block all traffic from
            203.0.113.0/24
          </ListItemStandard>
        </List>
        <Button
          style={{ marginTop: "1rem" }}
          onClick={() => alert("Firewall Rule Updated")}
        >
          Add/Update Firewall Rule
        </Button>
      </Panel>
    </div>
  );
}
