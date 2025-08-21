import React from "react";
import AdminNavbar from "./AdminNavbar";
import ChatbotIcon from "../ui/ChatbotIcon";
import "./AdminLayout.css";

const AdminLayout = ({ children, title, className = "" }) => {
  return (
    <div className={`admin-layout ${className}`}>
      <AdminNavbar />

      <main className="admin-main-content">
        {title && (
          <div className="admin-page-header">
            <h1 className="admin-page-title">{title}</h1>
          </div>
        )}

        <div className="admin-content-container">{children}</div>
      </main>

      <ChatbotIcon />
    </div>
  );
};

export default AdminLayout;
