import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminAvatar from "../../assets/icons/admin-avatar.jpg";
import "./AdminHeader.css";

const AdminHeader = ({ projectTitle = "April project" }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleBackClick = () => {
    navigate("/admin/dashboard");
  };

  const handleShareClick = () => {
    console.log("Share project:", projectTitle);
    // Implement share functionality
  };

  const handleNotificationClick = () => {
    console.log("Notifications");
    // Implement notifications
  };

  const handleMoreOptionsClick = () => {
    console.log("More options");
    // Implement more options
  };

  const handleSearchClick = () => {
    console.log("Search");
    // Implement search functionality
  };

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    // Navigate to login page
    navigate("/login");

    // Close dropdown
    setShowDropdown(false);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest(".header-avatar")) {
      setShowDropdown(false);
    }
  };

  // Add event listener for clicking outside
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="admin-header">
      <div className="admin-header-container">
        {/* Left - Back Button */}
        <div className="header-left">
          <button
            className="back-button"
            onClick={handleBackClick}
            aria-label="Back to dashboard"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="9,22 9,12 15,12 15,22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Center - Share Button */}
        <div className="header-center"></div>

        {/* Right - Action Buttons */}
        <div className="header-right">
          {/* Dots Menu */}
          <button className="share-button" onClick={handleShareClick}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="2"
                y1="12"
                x2="22"
                y2="12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Share</span>
          </button>

          {/* Email */}
          <button
            className="action-btn"
            onClick={handleNotificationClick}
            aria-label="Notifications"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
          </button>
          {/* Search */}
          <button
            className="action-btn"
            onClick={handleSearchClick}
            aria-label="Search"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m21 21-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="action-btn"
            onClick={handleMoreOptionsClick}
            aria-label="More options"
          >
            <svg width="23" height="5" viewBox="0 0 23 5" fill="none">
              <circle cx="2.25" cy="2.25" r="2.25" fill="#080341" />
              <circle cx="11.25" cy="2.25" r="2.25" fill="#080341" />
              <circle cx="20.25" cy="2.25" r="2.25" fill="#080341" />
            </svg>
          </button>
          {/* Avatar */}
          <div className="header-avatar">
            <img
              src={AdminAvatar}
              alt="Admin Avatar"
              className="avatar-image"
              onClick={handleAvatarClick}
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
