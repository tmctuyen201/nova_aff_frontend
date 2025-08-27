import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BrandSidebar.css";

const BrandSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      path: "/brand/dashboard",
      label: "Trang chủ",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0V11a1 1 0 011-1h2a1 1 0 011 1v10m-3 0h3m-3 0h-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/brand/reports",
      label: "Báo cáo",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.5h-15V5h15v14.5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/brand/tools",
      label: "Công cụ",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      path: "/brand/offers",
      label: "Ưu đãi thương hiệu",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polyline
            points="7.5,10.5 12,15 16.5,10.5"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      path: "/brand/payments",
      label: "Thanh toán",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect
            x="1"
            y="4"
            width="22"
            height="16"
            rx="2"
            ry="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="1"
            y1="10"
            x2="23"
            y2="10"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      path: "/brand/creator/1",
      label: "Đối tác",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M23 21v-2a4 4 0 0 0-3-3.87"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      path: "/brand/faq",
      label: "Câu hỏi thường gặp\nvà quy định chung",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="17"
            x2="12.01"
            y2="17"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="brand-sidebar">
      <div className="sidebar-content">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              className={`sidebar-item ${isActive(item.path) ? "active" : ""}`}
              onClick={() => navigate(item.path)}
            >
              <div className="sidebar-icon">{item.icon}</div>
              <span className="sidebar-label">{item.label}</span>
            </div>
            {index === 1 && <div className="sidebar-divider" />}
          </div>
        ))}

        <div className="sidebar-divider" />

        <div className="sidebar-support">
          <div className="support-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <span className="support-label">Hỗ trợ</span>
        </div>

        <div className="contact-info">
          <p className="contact-item">Group Facebook</p>
          <p className="contact-item">abc@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default BrandSidebar;
