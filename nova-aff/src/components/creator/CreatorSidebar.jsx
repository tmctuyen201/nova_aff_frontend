import React from "react";
import "./CreatorSidebar.css";

const CreatorSidebar = ({ currentPage, onPageChange }) => {
  const dashboardIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
        fill="currentColor"
      />
    </svg>
  );

  const campaignIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L13.09 8.26L19 8L14 12L16 18L12 15L8 18L10 12L5 8L10.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  );

  const historyIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="currentColor"
      />
      <path
        d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
        fill="currentColor"
      />
    </svg>
  );

  const analyticsIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
        fill="currentColor"
      />
    </svg>
  );

  const settingsIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.72 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12C4.5 12.33 4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
        fill="currentColor"
      />
    </svg>
  );

  const profileIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  );

  const menuItems = [
    {
      id: "dashboard",
      label: "Tổng quan",
      icon: dashboardIcon,
      active: currentPage === "campaigns",
      onClick: () => onPageChange("campaigns"),
    },
    {
      id: "campaigns",
      label: "Chiến dịch",
      icon: campaignIcon,
      submenu: [
        {
          id: "find-campaigns",
          label: "Tìm chiến dịch",
          active: currentPage === "campaigns",
          onClick: () => onPageChange("campaigns"),
        },
        {
          id: "my-campaigns",
          label: "Chiến dịch của tôi",
          active: currentPage === "history",
          onClick: () => onPageChange("history"),
        },
      ],
    },
    {
      id: "analytics",
      label: "Thống kê",
      icon: analyticsIcon,
      onClick: () => console.log("Analytics clicked"),
    },
    {
      id: "profile",
      label: "Hồ sơ",
      icon: profileIcon,
      onClick: () => console.log("Profile clicked"),
    },
    {
      id: "settings",
      label: "Cài đặt",
      icon: settingsIcon,
      onClick: () => console.log("Settings clicked"),
    },
  ];

  return (
    <aside className="creator-sidebar">
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-section">
              <div
                className={`menu-item ${item.active ? "active" : ""}`}
                onClick={item.onClick}
              >
                <div className="menu-icon">{item.icon}</div>
                <span className="menu-label">{item.label}</span>
                {item.submenu && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="expand-icon"
                  >
                    <path
                      d="M6 10L8 12L10 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {item.submenu && (
                <div className="submenu">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      className={`submenu-item ${
                        subItem.active ? "active" : ""
                      }`}
                      onClick={subItem.onClick}
                    >
                      <div className="submenu-indicator"></div>
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="upgrade-card">
            <div className="upgrade-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L13.09 8.26L19 8L14 12L16 18L12 15L8 18L10 12L5 8L10.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h4>Nâng cấp Pro</h4>
            <p>Mở khóa tất cả tính năng premium</p>
            <button className="upgrade-btn">Nâng cấp ngay</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CreatorSidebar;
