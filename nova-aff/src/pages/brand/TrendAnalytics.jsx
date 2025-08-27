import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BrandHeader from "../../components/brand/BrandHeader";
import BrandSidebar from "../../components/brand/BrandSidebar";
import CreatorNavigation from "../../components/brand/CreatorNavigation";
import brandApi from "../../utils/brandApi";
import "./TrendAnalytics.css";
import "../brand/CreatorDetail.css"; // Reuse styling

const TrendAnalytics = () => {
  const { creatorId } = useParams();
  const navigate = useNavigate();
  const [creatorData, setCreatorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("trends");

  useEffect(() => {
    fetchData();
  }, [creatorId]);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Unified mock data
      const mockCreatorData = {
        id: 1,
        username: "quynhanh_23291702",
        display_name: "Nguyễn Quỳnh Anh",
        tiktok_url: "www.tiktok.com/@auroracastle2",
        avatar: "/default-avatar.svg",
        followers_count: 762400,
        categories: ["beauty", "lifestyle"],
        category_display: ["Chăm sóc sắc đẹp", "Lối sống"],
        latest_analytics: {
          brands_collaborated: 62,
          total_products: 367,
        },
      };

      // Use mock data (in real app, try API first)
      setCreatorData(mockCreatorData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num?.toString() || "0";
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount || 0);
  };

  const formatPercentage = (value) => {
    return `${(value || 0).toFixed(1)}%`;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="creator-detail">
        <BrandHeader onLogout={handleLogout} />
        <div className="creator-layout">
          <BrandSidebar />
          <div className="creator-content">
            <div className="loading">Đang tải dữ liệu...</div>
          </div>
        </div>
      </div>
    );
  }

  // Sample trend data for visualization - always ensure it's an array
  const sampleTrendData = [
    {
      date: "01/11",
      gmv: 1250000,
      products_sold: 45,
      followers_gained: 1200,
      video_views: 890000,
      engagement_rate: 8.5,
    },
    {
      date: "02/11",
      gmv: 1480000,
      products_sold: 52,
      followers_gained: 1450,
      video_views: 920000,
      engagement_rate: 9.2,
    },
    {
      date: "03/11",
      gmv: 1680000,
      products_sold: 61,
      followers_gained: 1680,
      video_views: 1100000,
      engagement_rate: 10.1,
    },
    {
      date: "04/11",
      gmv: 1320000,
      products_sold: 48,
      followers_gained: 1320,
      video_views: 980000,
      engagement_rate: 8.8,
    },
    {
      date: "05/11",
      gmv: 1950000,
      products_sold: 68,
      followers_gained: 1950,
      video_views: 1250000,
      engagement_rate: 11.5,
    },
    {
      date: "06/11",
      gmv: 1750000,
      products_sold: 59,
      followers_gained: 1750,
      video_views: 1150000,
      engagement_rate: 10.3,
    },
    {
      date: "07/11",
      gmv: 2100000,
      products_sold: 74,
      followers_gained: 2100,
      video_views: 1350000,
      engagement_rate: 12.1,
    },
  ];

  const maxGMV = Math.max(...sampleTrendData.map((d) => d.gmv));
  const maxViews = Math.max(...sampleTrendData.map((d) => d.video_views));

  return (
    <div className="creator-detail">
      <BrandHeader onLogout={handleLogout} />

      <div className="creator-layout">
        <BrandSidebar />

        <main className="creator-content">
          <CreatorNavigation
            creator={{
              ...creatorData,
              category_display: creatorData?.category_display || [
                "Chưa phân loại",
              ],
              avatar: creatorData?.avatar || "/default-avatar.svg",
            }}
            activeTab={activeTab}
          />

          {/* Trend Analytics Content */}
          <div className="tab-content">
            <div className="content-header">
              <h3>Phân tích xu hướng</h3>
              <p className="date-range">7 ngày qua</p>
            </div>

            <div className="analytics-grid">
              {/* Trend Charts */}
              <div className="trend-charts">
                {/* GMV Trend */}
                <div className="chart-container">
                  <h4>Xu hướng GMV</h4>
                  <div className="line-chart">
                    <div className="chart-wrapper">
                      <svg width="100%" height="300" viewBox="0 0 700 300">
                        {/* Grid */}
                        <defs>
                          <pattern
                            id="grid"
                            width="100"
                            height="60"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 100 0 L 0 0 0 60"
                              fill="none"
                              stroke="#E0E0E0"
                              strokeWidth="1"
                            />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* GMV Line */}
                        {sampleTrendData.map((point, index) => {
                          const x = 50 + index * 100;
                          const y = 250 - (point.gmv / maxGMV) * 200;
                          const nextPoint = sampleTrendData[index + 1];
                          if (nextPoint) {
                            const nextX = 50 + (index + 1) * 100;
                            const nextY = 250 - (nextPoint.gmv / maxGMV) * 200;
                            return (
                              <line
                                key={index}
                                x1={x}
                                y1={y}
                                x2={nextX}
                                y2={nextY}
                                stroke="#009995"
                                strokeWidth="3"
                              />
                            );
                          }
                          return null;
                        })}

                        {/* Data Points */}
                        {sampleTrendData.map((point, index) => {
                          const x = 50 + index * 100;
                          const y = 250 - (point.gmv / maxGMV) * 200;
                          return (
                            <circle
                              key={index}
                              cx={x}
                              cy={y}
                              r="5"
                              fill="#009995"
                              className="chart-point"
                            />
                          );
                        })}

                        {/* Labels */}
                        {sampleTrendData.map((point, index) => {
                          const x = 50 + index * 100;
                          return (
                            <text
                              key={index}
                              x={x}
                              y="285"
                              textAnchor="middle"
                              fontSize="12"
                              fill="#666"
                            >
                              {point.date}
                            </text>
                          );
                        })}
                      </svg>
                    </div>
                    <div className="chart-stats">
                      <div className="stat-item">
                        <span className="stat-label">Cao nhất:</span>
                        <span className="stat-value">
                          {formatCurrency(
                            Math.max(...sampleTrendData.map((d) => d.gmv))
                          )}
                        </span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Thấp nhất:</span>
                        <span className="stat-value">
                          {formatCurrency(
                            Math.min(...sampleTrendData.map((d) => d.gmv))
                          )}
                        </span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Trung bình:</span>
                        <span className="stat-value">
                          {formatCurrency(
                            sampleTrendData.reduce((sum, d) => sum + d.gmv, 0) /
                              sampleTrendData.length
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Views Trend */}
                <div className="chart-container">
                  <h4>Xu hướng lượt xem video</h4>
                  <div className="line-chart">
                    <div className="chart-wrapper">
                      <svg width="100%" height="300" viewBox="0 0 700 300">
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Video Views Line */}
                        {sampleTrendData.map((point, index) => {
                          const x = 50 + index * 100;
                          const y = 250 - (point.video_views / maxViews) * 200;
                          const nextPoint = sampleTrendData[index + 1];
                          if (nextPoint) {
                            const nextX = 50 + (index + 1) * 100;
                            const nextY =
                              250 - (nextPoint.video_views / maxViews) * 200;
                            return (
                              <line
                                key={index}
                                x1={x}
                                y1={y}
                                x2={nextX}
                                y2={nextY}
                                stroke="#E74C3C"
                                strokeWidth="3"
                              />
                            );
                          }
                          return null;
                        })}

                        {/* Data Points */}
                        {sampleTrendData.map((point, index) => {
                          const x = 50 + index * 100;
                          const y = 250 - (point.video_views / maxViews) * 200;
                          return (
                            <circle
                              key={index}
                              cx={x}
                              cy={y}
                              r="5"
                              fill="#E74C3C"
                              className="chart-point"
                            />
                          );
                        })}

                        {/* Labels */}
                        {sampleTrendData.map((point, index) => {
                          const x = 50 + index * 100;
                          return (
                            <text
                              key={index}
                              x={x}
                              y="285"
                              textAnchor="middle"
                              fontSize="12"
                              fill="#666"
                            >
                              {point.date}
                            </text>
                          );
                        })}
                      </svg>
                    </div>
                    <div className="chart-stats">
                      <div className="stat-item">
                        <span className="stat-label">Cao nhất:</span>
                        <span className="stat-value">
                          {formatNumber(
                            Math.max(
                              ...sampleTrendData.map((d) => d.video_views)
                            )
                          )}
                        </span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Thấp nhất:</span>
                        <span className="stat-value">
                          {formatNumber(
                            Math.min(
                              ...sampleTrendData.map((d) => d.video_views)
                            )
                          )}
                        </span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Trung bình:</span>
                        <span className="stat-value">
                          {formatNumber(
                            sampleTrendData.reduce(
                              (sum, d) => sum + d.video_views,
                              0
                            ) / sampleTrendData.length
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Metrics */}
              <div className="growth-section">
                <h4>Tăng trưởng trong 7 ngày qua</h4>
                <div className="growth-grid">
                  <div className="growth-card">
                    <div className="growth-icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                          fill="#009995"
                        />
                      </svg>
                    </div>
                    <div className="growth-content">
                      <div className="growth-value">+68%</div>
                      <div className="growth-label">Tăng trưởng GMV</div>
                      <div className="growth-comparison">
                        So với 7 ngày trước
                      </div>
                    </div>
                  </div>

                  <div className="growth-card">
                    <div className="growth-icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
                          fill="#0063BE"
                        />
                      </svg>
                    </div>
                    <div className="growth-content">
                      <div className="growth-value">+52%</div>
                      <div className="growth-label">Tăng lượt xem</div>
                      <div className="growth-comparison">
                        So với 7 ngày trước
                      </div>
                    </div>
                  </div>

                  <div className="growth-card">
                    <div className="growth-icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0 0 17.15 7H16c-.8 0-1.54.37-2.01 1l-2.76 3.68A2 2 0 0 0 13 14h2v8h5zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2.5 16h5v-8h2c.8 0 1.53-.32 2.06-.88l2.76-3.68A2.996 2.996 0 0 0 17.15 7H16l-2.01 1-2.76 3.68A2 2 0 0 0 13 14v8H8z"
                          fill="#FEC24C"
                        />
                      </svg>
                    </div>
                    <div className="growth-content">
                      <div className="growth-value">+11,750</div>
                      <div className="growth-label">Follower mới</div>
                      <div className="growth-comparison">
                        So với 7 ngày trước
                      </div>
                    </div>
                  </div>

                  <div className="growth-card">
                    <div className="growth-icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          fill="#E74C3C"
                        />
                      </svg>
                    </div>
                    <div className="growth-content">
                      <div className="growth-value">+34%</div>
                      <div className="growth-label">Tỷ lệ tương tác</div>
                      <div className="growth-comparison">
                        So với 7 ngày trước
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Insights */}
              <div className="insights-section">
                <h4>Thông tin chi tiết hiệu suất</h4>
                <div className="insights-grid">
                  <div className="insight-card trend-up">
                    <div className="insight-header">
                      <div className="insight-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M7 14l5-5 5 5z" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="insight-status">Tăng mạnh</span>
                    </div>
                    <div className="insight-content">
                      <h5>Video content performance</h5>
                      <p>
                        Các video review sản phẩm có hiệu suất tăng 145% so với
                        tuần trước. Engagement rate đạt mức cao nhất 12.1%.
                      </p>
                    </div>
                  </div>

                  <div className="insight-card trend-up">
                    <div className="insight-header">
                      <div className="insight-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M7 14l5-5 5 5z" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="insight-status">Tăng</span>
                    </div>
                    <div className="insight-content">
                      <h5>Audience growth</h5>
                      <p>
                        Tăng trưởng follower ổn định với 1,679 follower mới
                        trung bình mỗi ngày. Chủ yếu từ nhóm 18-24 tuổi.
                      </p>
                    </div>
                  </div>

                  <div className="insight-card trend-stable">
                    <div className="insight-header">
                      <div className="insight-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="insight-status">Ổn định</span>
                    </div>
                    <div className="insight-content">
                      <h5>Conversion rate</h5>
                      <p>
                        Tỷ lệ chuyển đổi duy trì ở mức 3.2%, cho thấy chất lượng
                        audience tốt và nội dung phù hợp.
                      </p>
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

export default TrendAnalytics;
