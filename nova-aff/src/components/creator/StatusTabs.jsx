import React from "react";
import "./StatusTabs.css";

const StatusTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="status-tabs">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusTabs;
