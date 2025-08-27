import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CreatorNavigation.css";

const CreatorNavigation = ({ creator, activeTab = "sales" }) => {
  const navigate = useNavigate();
  const { creatorId } = useParams();

  const handleTabClick = (tabId) => {
    // Navigate to specific analytics pages
    switch (tabId) {
      case "sales":
        navigate(`/brand/creator/${creatorId}`);
        break;
      case "collaboration":
        navigate(`/brand/creator/${creatorId}/collaboration`);
        break;
      case "video":
        navigate(`/brand/creator/${creatorId}/video`);
        break;
      case "live":
        navigate(`/brand/creator/${creatorId}/live`);
        break;
      case "followers":
        navigate(`/brand/creator/${creatorId}/followers`);
        break;
      case "trends":
        navigate(`/brand/creator/${creatorId}/trends`);
        break;
      default:
        break;
    }
  };

  const tabs = [
    { id: "sales", label: "Doanh số", icon: "💰" },
    { id: "collaboration", label: "Số liệu cộng tác", icon: "🤝" },
    { id: "video", label: "Video", icon: "🎥" },
    { id: "live", label: "LIVE", icon: "📺" },
    { id: "followers", label: "Người theo dõi", icon: "👥" },
    { id: "trends", label: "Xu hướng", icon: "📈" },
    { id: "examples", label: "Video ví dụ", icon: "🎬" },
    { id: "similar", label: "Nhà sáng tạo tương tự", icon: "👨‍👩‍👧‍👦" },
  ];

  if (!creator) return null;

  return (
    <div className="creator-navigation-wrapper">
      {/* Creator Profile Header */}
      <div className="creator-header">
        <div className="creator-avatar">
          <img src={creator.avatar} alt="" />
          <div className="avatar-status"></div>
        </div>

        <div className="creator-info">
          <h1 className="creator-username">@{creator.username}</h1>
          <h2 className="creator-name">{creator.display_name}</h2>
          <div className="creator-stats">
            <div className="stat-item">
              <span className="stat-value">
                {creator.followers_count?.toLocaleString()}
              </span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-divider">•</div>
            <div className="stat-item">
              <span className="stat-value">
                {creator.latest_analytics?.brands_collaborated || 0}
              </span>
              <span className="stat-label">Brands</span>
            </div>
            <div className="stat-divider">•</div>
            <div className="stat-item">
              <span className="stat-value">
                {creator.latest_analytics?.total_products || 0}
              </span>
              <span className="stat-label">Products</span>
            </div>
          </div>
          <div className="creator-categories">
            {creator.category_display?.map((category, index) => (
              <span key={index} className="category-tag">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="creator-actions">
          <div className="creator-url">{creator.tiktok_url}</div>
          <div className="action-buttons">
            <button className="btn-icon" title="Thích">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button className="btn-icon" title="Chia sẻ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="18"
                  cy="5"
                  r="3"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                />
                <circle
                  cx="6"
                  cy="12"
                  r="3"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="19"
                  r="3"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                />
                <line
                  x1="8.59"
                  y1="13.51"
                  x2="15.42"
                  y2="17.49"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                />
                <line
                  x1="15.41"
                  y1="6.51"
                  x2="8.59"
                  y2="10.49"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button className="btn-icon" title="Bookmark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button className="btn-icon" title="Tùy chọn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="1"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                  fill="rgba(255, 255, 255, 0.9)"
                />
                <circle
                  cx="19"
                  cy="12"
                  r="1"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                  fill="rgba(255, 255, 255, 0.9)"
                />
                <circle
                  cx="5"
                  cy="12"
                  r="1"
                  stroke="rgba(255, 255, 255, 0.9)"
                  strokeWidth="2"
                  fill="rgba(255, 255, 255, 0.9)"
                />
              </svg>
            </button>
          </div>
          <button className="invite-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L15 22l-4-9-9-4 22-9z"
                stroke="#667eea"
                strokeWidth="2"
              />
            </svg>
            Mời hợp tác
          </button>
        </div>
      </div>

      {/* Enhanced Tabs Navigation */}
      <div className="tabs-navigation">
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
              {activeTab === tab.id && <div className="tab-indicator"></div>}
            </button>
          ))}
        </div>
        <div className="tabs-overlay"></div>
      </div>
    </div>
  );
};

export default CreatorNavigation;
