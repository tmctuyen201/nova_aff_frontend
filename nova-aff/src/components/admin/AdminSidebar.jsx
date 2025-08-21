import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = ({ activeItem = "kols-list", projectId = null }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "kols-list",
      label: "KOLs list",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="8"
            y="2"
            width="8"
            height="4"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8 12H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 16H13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="8" cy="8.5" r="0.5" fill="currentColor" />
          <circle cx="10" cy="8.5" r="0.5" fill="currentColor" />
          <circle cx="12" cy="8.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "tracking-number",
      label: "Tracking number",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 8C21 12.9706 16.9706 17 12 17C7.02944 17 3 12.9706 3 8C3 3.02944 7.02944 -1 12 -1C16.9706 -1 21 3.02944 21 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 12V8L14.5 6.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 19L12 17L18 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: "data-tracking",
      label: "Data tracking",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 3V21H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 12L10 9L14 13L20 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="7"
            cy="12"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
          />
          <circle
            cx="10"
            cy="9"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
          />
          <circle
            cx="14"
            cy="13"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
          />
          <circle
            cx="20"
            cy="7"
            r="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "mail",
      label: "Mail",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M22 6L12 13L2 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="18" cy="8" r="3" fill="#ff4444" />
          <text x="18" y="10" textAnchor="middle" fontSize="8" fill="white">
            3
          </text>
        </svg>
      ),
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
        </svg>
      ),
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMenuItemClick = (itemId) => {
    if (projectId) {
      // Navigation within project
      switch (itemId) {
        case "kols-list":
          navigate(`/admin/project/${projectId}/kols-list`);
          break;
        case "tracking-number":
          navigate(`/admin/project/${projectId}/tracking-number`);
          break;
        case "data-tracking":
          navigate(`/admin/project/${projectId}/data-tracking`);
          break;
        case "mail":
          // TODO: Implement mail page
          console.log("Navigate to mail");
          break;
        case "dashboard":
          navigate(`/admin/project/${projectId}/dashboard`);
          break;
        default:
          console.log("Unknown menu item:", itemId);
      }
    } else {
      // Navigation without project context
      switch (itemId) {
        case "kols-list":
        case "dashboard":
          navigate("/admin/dashboard");
          break;
        default:
          console.log("Unknown menu item:", itemId);
      }
    }
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-container">
        {/* Search Section */}
        <div className="sidebar-search">
          <div className="search-container">
            <div className="search-icon-wrapper">
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
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>
        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`nav-item ${activeItem === item.id ? "active" : ""}`}
              data-id={item.id}
              onClick={() => handleMenuItemClick(item.id)}
            >
              <div className="nav-icon">{item.icon}</div>
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
