import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { tokenManager } from "../../utils/api";

const ProtectedRoute = ({
  children,
  allowedRoles = [],
  requireAdmin = false,
}) => {
  const location = useLocation();

  // Check if user is authenticated
  const isAuthenticated = tokenManager.getAccessToken() !== null;

  if (!isAuthenticated) {
    // Redirect to login page with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Get user info from localStorage
  const userInfo = JSON.parse(localStorage.getItem("user_info") || "{}");
  const userRole = userInfo.role || "";

  // Check admin role if required (backward compatibility)
  if (requireAdmin) {
    const isAdmin = userRole === "admin" || userInfo.is_staff;
    if (!isAdmin) {
      return <Navigate to="/" replace />;
    }
  }

  // Check allowed roles if specified
  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    // Redirect to appropriate dashboard based on user role
    if (userRole === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    } else if (userRole === "brand") {
      return <Navigate to="/brand/dashboard" replace />;
    } else if (userRole === "creator") {
      return <Navigate to="/creator/dashboard" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
