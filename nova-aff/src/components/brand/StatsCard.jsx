import React from "react";
import "./StatsCard.css";

const StatsCard = ({
  title,
  value,
  icon,
  variant = "default",
  isLarge = false,
}) => {
  return (
    <div className={`stats-card ${variant} ${isLarge ? "large" : ""}`}>
      <div className="stats-card-content">
        <div className="stats-text">
          <div className="stats-value">{value}</div>
          <div className="stats-title">{title}</div>
        </div>

        {icon && <div className="stats-icon">{icon}</div>}
      </div>

      <div className="stats-progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
};

export default StatsCard;
