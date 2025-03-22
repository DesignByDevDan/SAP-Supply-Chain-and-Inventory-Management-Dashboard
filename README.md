# SAP Supply Chain Dashboard

An enterprise-level dashboard inspired by SAP ERP, built with React and UI5 Web Components for React. This project simulates key functionalities of a supply chain management system, including inventory monitoring, order tracking, security configuration, user profiles, and more.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Overview

The SAP Supply Chain Dashboard is a demonstration of an enterprise-grade application that combines modern UI design with simulated real-time data. The application includes:

- A comprehensive dashboard for monitoring inventory, orders, suppliers, production status, and security configurations.
- A user profile section with an in-depth overview, including basic information, contact details, permissions, projects, performance metrics, and activity logs.
- Fully functional pages for managing permissions, viewing projects, and analyzing performance trends.
- A side navigation bar with options for Dashboard, User Profile, Admin Access, and Logs.
- Dark mode support with dynamic theming using UI5 Web Components for React.

## Features

- **Dynamic Dashboard:**
  - Real-time inventory data simulation.
  - Alerts for low stock and production delays.
  - Detailed panels for suppliers and production status.
- **User Profile Management:**
  - Consolidated 3×3 grid layout for user information.
  - Editable basic info with Avatar placeholder.
  - Navigation to in-depth pages for managing permissions, projects, and performance details.
- **Admin and Security:**
  - In-depth security page with sections for encryption, API tokens, SSO settings, compliance, and intrusion detection.
  - Dedicated pages for managing roles/permissions and security settings.
- **Side Navigation & Routing:**
  - A side navigation bar for seamless routing between Dashboard, User Profile, Admin, and Logs.
  - Integration with React Router for page navigation.
- **Theming and Dark Mode:**
  - Built-in light/dark mode toggle using UI5 ThemeProvider.
  - Consistent SAP Fiori look and feel.

## Technologies Used

- **Frontend:**
  - React
  - UI5 Web Components for React
  - UI5 Web Components for React Charts
- **Routing:**
  - React Router v6
- **Backend (Simulated):**
  - Node.js / Express (for mock API endpoints)
- **Styling:**
  - SAP Fiori themes and CSS custom properties

## Project Structure

```
/sap-supply-chain-dashboard
├── backend/
│   └── server.js               # Node/Express mock API endpoints
├── src/
│   ├── components/
│   │   ├── AppShellBar.js      # Custom ShellBar with profile navigation
│   │   ├── Dashboard.js        # Main dashboard layout (2x2 or flex layout)
│   │   ├── SecurityOverview.js # Consolidated security settings page
│   │   ├── UserProfilePage.js  # User profile overview (3x3 grid)
│   │   ├── ManagePermissions.js
│   │   ├── ProjectsPage.js
│   │   ├── PerformanceDetails.js
│   │   ├── SideNavBar.js
│   │   └── ...                 # Other panels (Inventory, Alerts, Supplier, Production, etc.)
│   ├── hooks/
│   │   └── useInventory.js     # Custom hook to fetch inventory data
│   ├── App.js                  # Main app component with routing
│   ├── index.js                # Application entry point
│   └── index.css               # Global styles and theme overrides
└── README.md
```

## Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/YourUsername/SAP-Supply-Chain-Dashboard.git
   cd SAP-Supply-Chain-Dashboard
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Setup the Backend (if applicable):**  
   Navigate to the backend folder and install dependencies:

   ```bash
   cd backend
   npm install
   node server.js
   ```

   The backend will run on a specified port (e.g., 5001) to simulate API endpoints.

4. **Run the Frontend:**
   ```bash
   npm start
   ```
   The application will open in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

- **Dashboard:** View key supply chain metrics, including inventory levels, order statuses, and production trends.
- **User Profile:** Access a consolidated profile overview with editable sections.
- **Admin & Security:** Navigate to pages for managing permissions, security settings, and reviewing audit logs.
- **Side Navigation:** Use the side nav to jump between Dashboard, User Profile, Admin Access, and Logs.
- **Dark Mode:** Toggle between light and dark themes using the built-in switch.

## Screenshots

_Add screenshots here (if available) to show the dashboard, user profile, side nav, etc._

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Push your branch and submit a pull request.

Please follow the existing code style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).
