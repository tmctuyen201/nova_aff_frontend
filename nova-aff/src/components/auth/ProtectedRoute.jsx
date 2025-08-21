import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { tokenManager } from "../../utils/api";

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const location = useLocation();

  // Check if user is authenticated
  const isAuthenticated = tokenManager.getAccessToken() !== null;

  if (!isAuthenticated) {
    // Redirect to login page with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check admin role if required
  if (requireAdmin) {
    // Get user info from localStorage or token
    const userInfo = JSON.parse(localStorage.getItem("user_info") || "{}");
    const isAdmin =
      userInfo.is_staff ||
      userInfo.username === "admin" ||
      userInfo.role === "admin";

    if (!isAdmin) {
      // Redirect non-admin users to home page
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
