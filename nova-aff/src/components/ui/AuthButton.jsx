import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LoginModal from "./LoginModal";

const AuthButton = ({
  className = "",
  children,
  variant = "dashboard", // 'dashboard' | 'login' | 'custom'
  customPath = "",
  showModal = false, // If true, show login modal instead of navigating to /login
}) => {
  const { isAuthenticated, loading, getDashboardLink } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  if (loading) {
    return (
      <button className={className} disabled>
        <span className="loading-dots">...</span>
      </button>
    );
  }

  const handleClick = () => {
    if (!isAuthenticated && showModal) {
      setShowLoginModal(true);
    }
  };

  const getButtonContent = () => {
    if (isAuthenticated) {
      if (variant === "dashboard") {
        return children || "Đi tới Dashboard";
      }
      return children || "Tiếp tục";
    }
    return children || "Đăng nhập để tiếp tục";
  };

  const getPath = () => {
    if (isAuthenticated) {
      if (variant === "dashboard") {
        return getDashboardLink();
      }
      return customPath || getDashboardLink();
    }
    return "/login";
  };

  if (!isAuthenticated && showModal) {
    return (
      <>
        <button className={className} onClick={handleClick}>
          {getButtonContent()}
        </button>
        {showLoginModal && (
          <LoginModal onClose={() => setShowLoginModal(false)} />
        )}
      </>
    );
  }

  return (
    <Link to={getPath()} className={className}>
      {getButtonContent()}
    </Link>
  );
};

export default AuthButton;
