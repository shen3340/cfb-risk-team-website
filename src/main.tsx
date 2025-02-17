import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import UserDashboard from "./components/UserDashboard";
import ConfirmationPage from "./components/ConfirmationPage";

const router = createBrowserRouter([
  {
    path: "/cfb-risk-team-website",
    element: <App />, // Main app with header, footer, and form
  },
  {
    path: "/cfb-risk-team-website/dashboard",
    element: <UserDashboard />, // New page to navigate to
  },
  {
    path: "/cfb-risk-team-website/confirmation",
    element: <ConfirmationPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
