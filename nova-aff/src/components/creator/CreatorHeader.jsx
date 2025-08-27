import React from "react";
import "./CreatorHeader.css";

const CreatorHeader = ({ onLogout }) => {
  const notificationIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13114C12.5979 2.19348 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19348 6.46447 3.13114C5.52678 4.06881 5 5.34058 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42106 18.2537 9.16809 18.1079C8.91513 17.9622 8.70482 17.7526 8.55835 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const helpIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle
        cx="10"
        cy="10"
        r="8.33333"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7.57495 7.5C7.77087 6.94288 8.15758 6.47285 8.6698 6.17103C9.18203 5.86921 9.78848 5.75843 10.3801 5.859C10.9718 5.95956 11.5138 6.26692 11.9167 6.72742C12.3197 7.18792 12.5581 7.77362 12.5916 8.38688C12.6251 9.00013 12.4517 9.60656 12.0999 10.1084C11.7482 10.6103 11.2377 10.9792 10.6458 11.1542"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.1667H10.0083"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const settingsIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1667 12.5C16.0758 12.7513 16.0508 13.0208 16.0943 13.2832C16.1378 13.5456 16.2485 13.7928 16.4167 14C16.7167 14.4833 17.0833 14.9 17.5 15.25C17.6326 15.3712 17.7384 15.5195 17.8108 15.6854C17.8833 15.8513 17.9208 16.0312 17.9208 16.2133C17.9208 16.3955 17.8833 16.5754 17.8108 16.7413C17.7384 16.9072 17.6326 17.0555 17.5 17.1767"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const logoutIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 14.1667L17.5 10L13.3333 5.83333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 10H7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const brandIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="12" fill="url(#gradient1)" />
      <path
        d="M20 8L24 16L32 17L26 23L28 31L20 27L12 31L14 23L8 17L16 16L20 8Z"
        fill="white"
      />
      <defs>
        <linearGradient id="gradient1" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#FF0050" />
          <stop offset="50%" stopColor="#FF3366" />
          <stop offset="100%" stopColor="#FF6B9D" />
        </linearGradient>
      </defs>
    </svg>
  );

  const userAvatar = (
    <div className="user-avatar">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="url(#avatarGradient)" />
        <path
          d="M16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16Z"
          fill="white"
        />
        <path
          d="M24 24C24 20.6863 20.4183 18 16 18C11.5817 18 8 20.6863 8 24"
          fill="white"
        />
        <defs>
          <linearGradient id="avatarGradient" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  return (
    <header className="creator-header">
      <div className="header-left">
        <div className="brand-section">
          {brandIcon}
          <div className="brand-text">
            <span className="brand-name">Nova Aff</span>
            <span className="brand-subtitle">Creator Portal</span>
          </div>
        </div>
      </div>

      <div className="header-center">
        <h1 className="page-title">Dashboard</h1>
      </div>

      <div className="header-right">
        <div className="header-actions">
          <button className="header-btn notification-btn" title="Thông báo">
            {notificationIcon}
            <span className="notification-badge">3</span>
          </button>

          <button className="header-btn help-btn" title="Trợ giúp">
            {helpIcon}
          </button>

          <button className="header-btn settings-btn" title="Cài đặt">
            {settingsIcon}
          </button>

          <div className="header-divider"></div>

          <div className="user-section">
            {userAvatar}
            <div className="user-info">
              <span className="user-name">Creator Name</span>
              <span className="user-role">Content Creator</span>
            </div>
            <button className="logout-btn" onClick={onLogout} title="Đăng xuất">
              {logoutIcon}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CreatorHeader;
