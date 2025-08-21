import React, { useState } from "react";
import SearchIcon from "../../assets/icons/search-icon.svg";
import NotificationIcon from "../../assets/icons/notification-icon.svg";
import AdminAvatar from "../../assets/icons/admin-avatar.jpg";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Implement search logic here
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-container">
        {/* Left side - Avatar */}
        <div className="admin-avatar-section">
          <img src={AdminAvatar} alt="Admin Avatar" className="admin-avatar" />
        </div>

        {/* Center - Search Bar */}
        <div className="admin-search-section">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <div className="search-container">
              <img src={SearchIcon} alt="Search" className="search-icon" />
              <input
                type="text"
                placeholder="Search project here"
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
          </form>
        </div>

        {/* Right side - User Info & Notification */}
        <div className="admin-user-section">
          <div className="user-info">
            <div className="notification-wrapper">
              <img
                src={NotificationIcon}
                alt="Notification"
                className="notification-icon"
              />
            </div>
            <div className="user-greeting">
              <span className="greeting-text">Hello, Admin</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
