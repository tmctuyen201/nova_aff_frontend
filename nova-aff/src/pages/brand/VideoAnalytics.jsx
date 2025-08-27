import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BrandHeader from "../../components/brand/BrandHeader";
import BrandSidebar from "../../components/brand/BrandSidebar";
import CreatorNavigation from "../../components/brand/CreatorNavigation";
import brandApi from "../../utils/brandApi";
import "./VideoAnalytics.css";
import "../brand/CreatorDetail.css"; // Reuse styling

const VideoAnalytics = () => {
  const { creatorId } = useParams();
  const navigate = useNavigate();
  const [creatorData, setCreatorData] = useState(null);
  const [videoAnalytics, setVideoAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("video");

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

      const mockVideoAnalytics = {
        total_videos: 423,
        total_views: 15600000,
        average_views: 36872,
        total_likes: 1200000,
        total_shares: 89000,
        total_comments: 245000,
        average_engagement_rate: 8.2,
        gpm_video: 52000,
        start_date: "2024-01-01",
        end_date: "2024-01-31",
        most_viewed_video: {
          title: "Skincare routine buổi sáng",
          views: 850000,
          likes: 65000,
        },
      };

      // Use mock data (in real app, try API first)
      setCreatorData(mockCreatorData);
      setVideoAnalytics(mockVideoAnalytics);
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

          {/* Video Analytics Content */}
          <div className="tab-content">
            <div className="content-header">
              <h3>Video Analytics</h3>
              <p className="date-range">
                {videoAnalytics?.start_date} - {videoAnalytics?.end_date}
              </p>
            </div>

            <div className="analytics-grid">
              {/* Video Metrics */}
              <div className="video-metrics">
                <div className="metric-card">
                  <div className="metric-value">
                    {videoAnalytics?.total_videos || 0}
                  </div>
                  <div className="metric-label">Tổng số video</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {formatNumber(videoAnalytics?.average_views)}
                  </div>
                  <div className="metric-label">Lượt xem trung bình</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {formatPercentage(videoAnalytics?.average_engagement_rate)}
                  </div>
                  <div className="metric-label">Tỷ lệ tương tác TB</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {formatCurrency(videoAnalytics?.gpm_video)}
                  </div>
                  <div className="metric-label">GPM từ Video</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Video Performance Chart */}
              <div className="chart-section">
                <div className="chart-container">
                  <h4>Hiệu suất Video theo thời gian</h4>
                  <div className="line-chart">
                    <div className="chart-placeholder">
                      <svg width="100%" height="300" viewBox="0 0 800 300">
                        {/* Chart Grid */}
                        <defs>
                          <pattern
                            id="grid"
                            width="80"
                            height="60"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 80 0 L 0 0 0 60"
                              fill="none"
                              stroke="#E0E0E0"
                              strokeWidth="1"
                            />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Sample Chart Line */}
                        <polyline
                          fill="none"
                          stroke="#009995"
                          strokeWidth="3"
                          points="50,250 150,200 250,180 350,160 450,140 550,120 650,100 750,80"
                        />

                        {/* Data Points */}
                        {[50, 150, 250, 350, 450, 550, 650, 750].map(
                          (x, index) => {
                            const y = 250 - index * 20;
                            return (
                              <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r="4"
                                fill="#009995"
                                className="chart-point"
                              />
                            );
                          }
                        )}
                      </svg>
                    </div>
                    <div className="chart-legend">
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#009995" }}
                        ></div>
                        <span className="legend-label">Lượt xem</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Categories Performance */}
                <div className="chart-container">
                  <h4>Hiệu suất theo loại video</h4>
                  <div className="bar-chart">
                    <div className="chart-placeholder">
                      <svg width="100%" height="300" viewBox="0 0 400 300">
                        {/* Sample Bar Chart */}
                        <rect
                          x="50"
                          y="200"
                          width="60"
                          height="80"
                          fill="#009995"
                        />
                        <rect
                          x="130"
                          y="150"
                          width="60"
                          height="130"
                          fill="#0063BE"
                        />
                        <rect
                          x="210"
                          y="180"
                          width="60"
                          height="100"
                          fill="#FEC24C"
                        />
                        <rect
                          x="290"
                          y="120"
                          width="60"
                          height="160"
                          fill="#E74C3C"
                        />

                        {/* Labels */}
                        <text
                          x="80"
                          y="295"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          Review
                        </text>
                        <text
                          x="160"
                          y="295"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          Tutorial
                        </text>
                        <text
                          x="240"
                          y="295"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          Unboxing
                        </text>
                        <text
                          x="320"
                          y="295"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          Lifestyle
                        </text>
                      </svg>
                    </div>
                    <div className="chart-legend">
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#009995" }}
                        ></div>
                        <span className="legend-label">Review sản phẩm</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#0063BE" }}
                        ></div>
                        <span className="legend-label">Hướng dẫn sử dụng</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#FEC24C" }}
                        ></div>
                        <span className="legend-label">Unboxing</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#E74C3C" }}
                        ></div>
                        <span className="legend-label">Lifestyle</span>
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

export default VideoAnalytics;
