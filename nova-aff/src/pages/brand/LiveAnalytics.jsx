import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BrandHeader from "../../components/brand/BrandHeader";
import BrandSidebar from "../../components/brand/BrandSidebar";
import CreatorNavigation from "../../components/brand/CreatorNavigation";
import brandApi from "../../utils/brandApi";
import "./LiveAnalytics.css";
import "../brand/CreatorDetail.css"; // Reuse styling

const LiveAnalytics = () => {
  const { creatorId } = useParams();
  const navigate = useNavigate();
  const [creatorData, setCreatorData] = useState(null);
  const [liveAnalytics, setLiveAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("live");

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

      const mockLiveAnalytics = {
        total_live_sessions: 45,
        total_live_viewers: 125000,
        average_viewers: 2778,
        average_live_duration: 85,
        peak_concurrent_viewers: 3200,
        live_conversion_rate: 12.8,
        gpm_live: 75000,
        total_live_revenue: 3375000,
        start_date: "2024-01-01",
        end_date: "2024-01-31",
        average_engagement_rate: 8.5,
      };

      // Use mock data (in real app, try API first)
      setCreatorData(mockCreatorData);
      setLiveAnalytics(mockLiveAnalytics);
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

          {/* Live Analytics Content */}
          <div className="tab-content">
            <div className="content-header">
              <h3>Live Analytics</h3>
              <p className="date-range">
                {liveAnalytics?.start_date} - {liveAnalytics?.end_date}
              </p>
            </div>

            <div className="analytics-grid">
              {/* Live Metrics */}
              <div className="live-metrics">
                <div className="metric-card">
                  <div className="metric-value">
                    {liveAnalytics?.total_live_sessions || 0}
                  </div>
                  <div className="metric-label">Tổng số phiên LIVE</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                      <path
                        d="M12 1v6m0 10v6m11-7h-6m-10 0H1m15.5-6.5l-4.24 4.24m-8.48 0L7.05 5.76m12.73 12.73l-4.24-4.24m-8.48 0l4.24 4.24"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {formatNumber(liveAnalytics?.average_viewers)}
                  </div>
                  <div className="metric-label">Người xem trung bình</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M16 4h2c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h2V2h2v2h4V2h2v2zM6 8v10h12V8H6zm2 2h2v6H8v-6zm8 0h2v6h-2v-6z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {formatPercentage(liveAnalytics?.average_engagement_rate)}
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
                    {formatCurrency(liveAnalytics?.gpm_live)}
                  </div>
                  <div className="metric-label">GPM từ LIVE</div>
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

              {/* Live Performance Charts */}
              <div className="chart-section">
                <div className="chart-container">
                  <h4>Hiệu suất LIVE theo thời gian</h4>
                  <div className="area-chart">
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
                          <linearGradient
                            id="liveGradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              style={{ stopColor: "#E74C3C", stopOpacity: 0.3 }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: "#E74C3C", stopOpacity: 0 }}
                            />
                          </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Area Fill */}
                        <polygon
                          fill="url(#liveGradient)"
                          points="50,250 150,200 250,180 350,160 450,140 550,120 650,100 750,80 750,280 50,280"
                        />

                        {/* Area Line */}
                        <polyline
                          fill="none"
                          stroke="#E74C3C"
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
                                fill="#E74C3C"
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
                          style={{ backgroundColor: "#E74C3C" }}
                        ></div>
                        <span className="legend-label">Người xem LIVE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Session Analysis */}
                <div className="chart-container">
                  <h4>Phân tích thời gian LIVE</h4>
                  <div className="donut-chart">
                    <div className="chart-placeholder">
                      <svg width="100%" height="300" viewBox="0 0 300 300">
                        {/* Donut Chart */}
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#E0E0E0"
                          strokeWidth="30"
                        />

                        {/* Morning Sessions */}
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#009995"
                          strokeWidth="30"
                          strokeDasharray="157 471"
                          strokeDashoffset="0"
                          transform="rotate(-90 150 150)"
                          className="donut-segment"
                        />

                        {/* Afternoon Sessions */}
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#0063BE"
                          strokeWidth="30"
                          strokeDasharray="188 440"
                          strokeDashoffset="-157"
                          transform="rotate(-90 150 150)"
                          className="donut-segment"
                        />

                        {/* Evening Sessions */}
                        <circle
                          cx="150"
                          cy="150"
                          r="100"
                          fill="none"
                          stroke="#FEC24C"
                          strokeWidth="30"
                          strokeDasharray="283 345"
                          strokeDashoffset="-345"
                          transform="rotate(-90 150 150)"
                          className="donut-segment"
                        />

                        {/* Center Text */}
                        <text
                          x="150"
                          y="145"
                          textAnchor="middle"
                          fontSize="24"
                          fontWeight="bold"
                          fill="#000"
                        >
                          {liveAnalytics?.total_live_sessions || 0}
                        </text>
                        <text
                          x="150"
                          y="165"
                          textAnchor="middle"
                          fontSize="14"
                          fill="#666"
                        >
                          Phiên LIVE
                        </text>
                      </svg>
                    </div>
                    <div className="chart-legend">
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#009995" }}
                        ></div>
                        <span className="legend-percentage">25%</span>
                        <span className="legend-label">Buổi sáng (6-12h)</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#0063BE" }}
                        ></div>
                        <span className="legend-percentage">30%</span>
                        <span className="legend-label">
                          Buổi chiều (12-18h)
                        </span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#FEC24C" }}
                        ></div>
                        <span className="legend-percentage">45%</span>
                        <span className="legend-label">Buổi tối (18-24h)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Peak Performance Times */}
              <div className="peak-times-section">
                <h4>Khung giờ hiệu suất cao nhất</h4>
                <div className="peak-times-grid">
                  <div className="peak-time-card">
                    <div className="time-slot">19:00 - 21:00</div>
                    <div className="peak-metric">
                      <span className="metric-value">125K</span>
                      <span className="metric-label">Người xem TB</span>
                    </div>
                    <div className="peak-metric">
                      <span className="metric-value">8.5%</span>
                      <span className="metric-label">Tỷ lệ tương tác</span>
                    </div>
                  </div>

                  <div className="peak-time-card">
                    <div className="time-slot">20:00 - 22:00</div>
                    <div className="peak-metric">
                      <span className="metric-value">98K</span>
                      <span className="metric-label">Người xem TB</span>
                    </div>
                    <div className="peak-metric">
                      <span className="metric-value">7.2%</span>
                      <span className="metric-label">Tỷ lệ tương tác</span>
                    </div>
                  </div>

                  <div className="peak-time-card">
                    <div className="time-slot">21:00 - 23:00</div>
                    <div className="peak-metric">
                      <span className="metric-value">87K</span>
                      <span className="metric-label">Người xem TB</span>
                    </div>
                    <div className="peak-metric">
                      <span className="metric-value">6.8%</span>
                      <span className="metric-label">Tỷ lệ tương tác</span>
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

export default LiveAnalytics;
