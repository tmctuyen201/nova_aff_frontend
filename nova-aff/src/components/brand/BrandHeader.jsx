import React, { useState } from "react";
import "./BrandHeader.css";

const BrandHeader = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setShowDropdown(false);
    onLogout();
  };

  return (
    <header className="brand-header">
      <div className="brand-header-left">
        <div className="brand-logo">
          <img
            src="/creator-overview-hero.jpg"
            alt="Nova AFF Logo"
            className="logo-image"
          />
          <span className="logo-text">Nova AFF</span>
        </div>
        <div className="brand-hamburger">
          <div className="hamburger-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="hide-show-text">Hide/show</span>
        </div>
      </div>

      <div className="brand-header-center">
        <nav className="brand-nav">
          <a href="/brand" className="nav-link active">
            Affiliate
          </a>
          <a href="/about" className="nav-link">
            Giới thiệu
          </a>
          <a href="/academy" className="nav-link">
            Academy
          </a>
        </nav>

        <button className="home-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0V11a1 1 0 011-1h2a1 1 0 011 1v10m-3 0h3m-3 0h-3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Quay về trang chủ
        </button>
      </div>

      <div className="brand-header-right">
        <div className="notification-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.73 21a2 2 0 0 1-3.46 0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="notification-badge">3</span>
        </div>

        <div className="user-profile" onClick={handleAvatarClick}>
          <img
            src="/default-avatar.svg"
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-info">
            <span className="username">{user?.username || "brand"}</span>
            <span className="user-role">Brand Manager</span>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="dropdown-arrow"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {showDropdown && (
            <div className="user-dropdown">
              <div className="dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Hồ sơ cá nhân
              </div>
              <div className="dropdown-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 1v6m0 10v6m11-7h-6m-10 0H1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Cài đặt
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item logout" onClick={handleLogout}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="16,17 21,12 16,7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="21"
                    y1="12"
                    x2="9"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                Đăng xuất
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default BrandHeader;
