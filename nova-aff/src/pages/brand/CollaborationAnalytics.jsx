import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BrandHeader from "../../components/brand/BrandHeader";
import BrandSidebar from "../../components/brand/BrandSidebar";
import CreatorNavigation from "../../components/brand/CreatorNavigation";
import "./CollaborationAnalytics.css";
import "../brand/CreatorDetail.css"; // Reuse styling

const CollaborationAnalytics = () => {
  const { creatorId } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [activeTab, setActiveTab] = useState("collaboration");
  const [loading, setLoading] = useState(true);

  // Unified mock data for collaboration analytics
  const mockData = {
    creator: {
      username: "quynhanh_23291702",
      display_name: "Nguyễn Quỳnh Anh",
      tiktok_url: "www.tiktok.com/@auroracastle2",
      avatar: "/default-avatar.svg",
      categories: ["beauty", "lifestyle"],
      category_display: ["Chăm sóc sắc đẹp", "Lối sống"],
      followers_count: 762400,
    },
    collaboration: {
      commission_rate: 1,
      total_products: 367,
      price_range: "82.0Kđ-5.0Mđ",
      brands_collaborated: 62,
      total_collaborations: 156,
      active_campaigns: 12,
      completed_campaigns: 144,
      total_revenue: 48500000,
      avg_campaign_value: 312000,
      success_rate: 92.3,
      monthly_growth: 15.8,
    },
    channelBreakdown: {
      live: { percentage: 96.17, color: "#009995" },
      video: { percentage: 0.23, color: "#0063BE" },
      product_card: { percentage: 3.6, color: "#FEC24C" },
    },
    categoryBreakdown: {
      beauty: { percentage: 85.19, color: "#009995" },
      baby: { percentage: 10.28, color: "#FEC24C" },
      health: { percentage: 4.51, color: "#0063BE" },
      other: { percentage: 0.02, color: "#DA251D" },
    },
  };

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setCreator(mockData);
      setLoading(false);
    }, 1000);
  }, [creatorId]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    // Navigate to specific analytics pages
    switch (tabId) {
      case "sales":
        navigate(`/brand/creator/${creatorId}`);
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
        // Stay on current page for collaboration
        break;
    }
  };

  const tabs = [
    { id: "sales", label: "Doanh số", active: false },
    { id: "collaboration", label: "Số liệu cộng tác", active: true },
    { id: "video", label: "Video", active: false },
    { id: "live", label: "LIVE", active: false },
    { id: "followers", label: "Người theo dõi", active: false },
    { id: "trends", label: "Xu hướng", active: false },
    { id: "examples", label: "Video ví dụ", active: false },
    { id: "similar", label: "Nhà sáng tạo tương tự", active: false },
  ];

  if (loading) {
    return (
      <div className="creator-detail">
        <BrandHeader onLogout={handleLogout} />
        <div className="creator-layout">
          <BrandSidebar />
          <div className="creator-content">
            <div className="loading">Đang tải...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="creator-detail">
      <BrandHeader onLogout={handleLogout} />

      <div className="creator-layout">
        <BrandSidebar />

        <main className="creator-content">
          <CreatorNavigation
            creator={{
              ...creator.creator,
              latest_analytics: creator.collaboration,
            }}
            activeTab={activeTab}
          />

          {/* Collaboration Analytics Content */}
          <div className="tab-content">
            <div className="content-header">
              <h3>Số liệu cộng tác</h3>
              <p className="date-range">
                Tháng 6 30, 2025 - tháng 7 30, 2025 (GMT+00:00)
              </p>
            </div>

            <div className="analytics-grid">
              {/* Collaboration Metrics */}
              <div className="sales-metrics">
                <div className="metric-card">
                  <div className="metric-value">
                    {creator.collaboration.commission_rate}%
                  </div>
                  <div className="metric-label">Tỉ lệ hoa hồng trung bình</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8.13 5L11.88 11H8.13L4.38 5H8.13Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <circle cx="9" cy="13" r="2" fill="white" />
                      <path
                        d="M0 0H20V20H0V0Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {creator.collaboration.total_products}
                  </div>
                  <div className="metric-label">Sản phẩm</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8.13 5L11.88 11H8.13L4.38 5H8.13Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <circle cx="9" cy="13" r="2" fill="white" />
                      <path
                        d="M0 0H20V20H0V0Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {creator.collaboration.price_range}
                  </div>
                  <div className="metric-label">Giá sản phẩm</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8.13 5L11.88 11H8.13L4.38 5H8.13Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <circle cx="9" cy="13" r="2" fill="white" />
                      <path
                        d="M0 0H20V20H0V0Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {creator.collaboration.brands_collaborated}
                  </div>
                  <div className="metric-label">Thương hiệu đã cộng tác</div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="charts-section">
                <div className="chart-container">
                  <h4>GMV từ mỗi kênh bán hàng</h4>
                  <div className="pie-chart">
                    <div className="chart-circle">
                      {/* Large pie chart placeholder */}
                      <div className="chart-segments">
                        <div
                          className="segment segment-live"
                          style={{
                            "--percentage":
                              creator.channelBreakdown.live.percentage,
                            backgroundColor:
                              creator.channelBreakdown.live.color,
                          }}
                        ></div>
                        <div
                          className="segment segment-video"
                          style={{
                            "--percentage":
                              creator.channelBreakdown.video.percentage,
                            backgroundColor:
                              creator.channelBreakdown.video.color,
                          }}
                        ></div>
                        <div
                          className="segment segment-product"
                          style={{
                            "--percentage":
                              creator.channelBreakdown.product_card.percentage,
                            backgroundColor:
                              creator.channelBreakdown.product_card.color,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="chart-legend">
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor:
                              creator.channelBreakdown.live.color,
                          }}
                        ></div>
                        <span className="legend-percentage">
                          {creator.channelBreakdown.live.percentage}%
                        </span>
                        <span className="legend-label">LIVE</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor:
                              creator.channelBreakdown.video.color,
                          }}
                        ></div>
                        <span className="legend-percentage">
                          {creator.channelBreakdown.video.percentage}%
                        </span>
                        <span className="legend-label">Video</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor:
                              creator.channelBreakdown.product_card.color,
                          }}
                        ></div>
                        <span className="legend-percentage">
                          {creator.channelBreakdown.product_card.percentage}%
                        </span>
                        <span className="legend-label">Thẻ sản phẩm</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chart-container">
                  <h4>GMV theo hạng mục sản phẩm</h4>
                  <div className="pie-chart">
                    <div className="chart-circle">
                      {/* Category pie chart placeholder */}
                    </div>

                    <div className="chart-legend">
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor:
                              creator.categoryBreakdown.beauty.color,
                          }}
                        ></div>
                        <span className="legend-percentage">
                          {creator.categoryBreakdown.beauty.percentage}%
                        </span>
                        <span className="legend-label">Chăm sóc sắc đẹp</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor:
                              creator.categoryBreakdown.baby.color,
                          }}
                        ></div>
                        <span className="legend-percentage">
                          {creator.categoryBreakdown.baby.percentage}%
                        </span>
                        <span className="legend-label">Trẻ sơ sinh</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor:
                              creator.categoryBreakdown.health.color,
                          }}
                        ></div>
                        <span className="legend-percentage">
                          {creator.categoryBreakdown.health.percentage}%
                        </span>
                        <span className="legend-label">Sức khỏe</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{
                            backgroundColor:
                              creator.categoryBreakdown.other.color,
                          }}
                        ></div>
                        <span className="legend-percentage">
                          {creator.categoryBreakdown.other.percentage}%
                        </span>
                        <span className="legend-label">Khác</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CollaborationAnalytics;
