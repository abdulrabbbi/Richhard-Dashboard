import { createBrowserRouter, Outlet } from "react-router-dom";
import React from "react";
// Layouts
import DashboardLayout from "../layouts/SiteLayout";

// Pages
import DashboardContent from "../Pages/MainDashboard";
import UsersPage from "../Pages/UsersPage";
import AdsPage from "../Pages/AdsPage";
import AdsMangment from "../Pages/AdsMangment";
import PaymentsPage from "../Pages/PaymentPage";
import SettingsPage from "../Pages/Settings";
import LoginPage from "../Pages/Auth/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardContent />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "ads-Request",
        element: <AdsPage />,
      },
      {
        path: "ads",
        element: <AdsMangment />,
      },
      {
        path: "payments",
        element: <PaymentsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Outlet />,
    children: [
      {
        index: true,
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default Router;
