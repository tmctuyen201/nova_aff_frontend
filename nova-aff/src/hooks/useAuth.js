import { useState, useEffect } from "react";
import { tokenManager } from "../utils/api";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = tokenManager.getAccessToken();
      const userInfo = JSON.parse(localStorage.getItem("user_info") || "{}");

      setIsAuthenticated(!!token);
      setUser(userInfo.id ? userInfo : null);
      setLoading(false);
    };

    checkAuth();

    // Listen for storage changes (login/logout in other tabs)
    const handleStorageChange = (e) => {
      if (e.key === "access_token" || e.key === "user_info") {
        checkAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const getDashboardLink = () => {
    if (!isAuthenticated || !user) return "/login";

    switch (user.role) {
      case "admin":
        return "/admin/dashboard";
      case "brand":
        return "/brand/dashboard";
      case "creator":
        return "/creator/dashboard";
      default:
        return "/login";
    }
  };

  return {
    isAuthenticated,
    user,
    loading,
    getDashboardLink,
  };
};
