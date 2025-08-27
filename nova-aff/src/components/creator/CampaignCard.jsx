import React, { useState } from "react";
import "./CampaignCard.css";
import { createFallbackImage } from "../../utils/createFallbackImage";
import { getOptimizedImageUrl } from "../../utils/imageLoader";

const CampaignCard = ({ campaign, type, onCampaignClick }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCardClick = () => {
    if (onCampaignClick) {
      onCampaignClick(campaign);
    }
  };

  const handleActionClick = (e) => {
    e.stopPropagation();
    if (onCampaignClick) {
      onCampaignClick(campaign);
    }
  };

  const getStatusText = () => {
    switch (campaign.status) {
      case "participated":
        return "Đã tham gia";
      case "pending":
        return "Chờ duyệt";
      case "available":
      default:
        return "Mới";
    }
  };

  const getActionText = () => {
    switch (campaign.status) {
      case "participated":
        return "Xem chi tiết";
      case "pending":
        return "Xem trạng thái";
      case "available":
      default:
        return "Tham gia ngay";
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      beauty: "💄",
      fashion: "👗",
      tech: "💻",
      health: "🏥",
      home: "🏠",
      electronics: "📱",
      toys: "🧸",
      education: "📚",
      food: "🍕",
      furniture: "🛋️",
      appliances: "⚡",
      "flash-sale": "⚡",
      seasonal: "🍂",
    };
    return icons[category] || "🏷️";
  };

  return (
    <div
      className="campaign-card"
      onClick={handleCardClick}
      data-status={campaign.status}
      style={{ "--campaign-color": campaign.color }}
    >
      <div className="campaign-header">
        {!imageLoaded && !imageError && (
          <div className="campaign-image-loading">
            <div className="loading-shimmer"></div>
          </div>
        )}
        <img
          src={getOptimizedImageUrl(campaign.image)}
          alt={campaign.title}
          className={`campaign-image ${!imageLoaded ? "loading" : ""}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            if (!imageError) {
              setImageError(true);
              e.target.src = createFallbackImage(
                campaign.title,
                campaign.color,
                campaign.category
              );
            }
          }}
          style={{ display: imageLoaded || imageError ? "block" : "none" }}
        />
        <div className="campaign-overlay">
          <div className={`campaign-status-badge ${campaign.status}`}>
            {getStatusText()}
          </div>
          <h4 className="campaign-brand">{campaign.brand || "Nova Aff"}</h4>
        </div>
      </div>

      <div className="campaign-content">
        <h3 className="campaign-title">{campaign.title}</h3>

        <div className="campaign-meta">
          <div className="campaign-location">
            <svg className="location-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            {campaign.location}
          </div>

          <div className="campaign-time">
            <svg className="time-icon" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="m12 6 0 6 4 2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {campaign.timeRange}
          </div>
        </div>

        {(campaign.commission ||
          campaign.budget ||
          campaign.engagement !== undefined) && (
          <div className="campaign-stats">
            {campaign.commission && (
              <div className="campaign-stat">
                <p className="stat-value">{campaign.commission}</p>
                <p className="stat-label">Hoa hồng</p>
              </div>
            )}
            {campaign.budget && (
              <div className="campaign-stat">
                <p className="stat-value">{campaign.budget}</p>
                <p className="stat-label">Ngân sách</p>
              </div>
            )}
            {campaign.engagement !== undefined && (
              <div className="campaign-stat">
                <p className="stat-value">
                  {campaign.engagement === "0" ? "0" : campaign.engagement}
                </p>
                <p className="stat-label">Tương tác</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="campaign-footer">
        <div className="campaign-category">
          <span className="category-dot"></span>
          {getCategoryIcon(campaign.category)} {campaign.category}
        </div>

        <button className="campaign-action" onClick={handleActionClick}>
          {getActionText()}
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;
