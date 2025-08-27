import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BrandHeader from "../../components/brand/BrandHeader";
import BrandSidebar from "../../components/brand/BrandSidebar";
import CreatorNavigation from "../../components/brand/CreatorNavigation";
import brandApi from "../../utils/brandApi";
import "./FollowersAnalytics.css";
import "../brand/CreatorDetail.css"; // Reuse styling

const FollowersAnalytics = () => {
  const { creatorId } = useParams();
  const navigate = useNavigate();
  const [creatorData, setCreatorData] = useState(null);
  const [demographics, setDemographics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("followers");

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

      const mockDemographics = {
        female_percentage: 72.4,
        male_percentage: 27.6,
        age_18_24_percentage: 35.2,
        age_25_34_percentage: 28.7,
        age_35_44_percentage: 20.1,
        age_45_54_percentage: 12.3,
        age_55_plus_percentage: 3.7,
        snapshot_date: "2024-01-15",
        top_locations: [
          { location: "Hồ Chí Minh", percentage: 35 },
          { location: "Hà Nội", percentage: 28 },
          { location: "Đà Nẵng", percentage: 12 },
          { location: "Cần Thơ", percentage: 8 },
          { location: "Hải Phòng", percentage: 6 },
          { location: "Khác", percentage: 11 },
        ],
      };

      // Use mock data (in real app, try API first)
      setCreatorData(mockCreatorData);
      setDemographics(mockDemographics);
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

          {/* Followers Analytics Content */}
          <div className="tab-content">
            <div className="content-header">
              <h3>Phân tích người theo dõi</h3>
              <p className="date-range">
                Dữ liệu từ: {demographics?.snapshot_date}
              </p>
            </div>

            <div className="analytics-grid">
              {/* Gender Distribution */}
              <div className="demographics-section">
                <div className="chart-container">
                  <h4>Phân bố giới tính</h4>
                  <div className="gender-chart">
                    <div className="pie-chart">
                      <svg width="250" height="250" viewBox="0 0 250 250">
                        <circle
                          cx="125"
                          cy="125"
                          r="100"
                          fill="none"
                          stroke="#E74C3C"
                          strokeWidth="40"
                          strokeDasharray={`${
                            (demographics?.female_percentage || 62) * 6.28
                          } 628`}
                          strokeDashoffset="0"
                          transform="rotate(-90 125 125)"
                          className="pie-segment"
                        />
                        <circle
                          cx="125"
                          cy="125"
                          r="100"
                          fill="none"
                          stroke="#3498DB"
                          strokeWidth="40"
                          strokeDasharray={`${
                            (demographics?.male_percentage || 38) * 6.28
                          } 628`}
                          strokeDashoffset={`-${
                            (demographics?.female_percentage || 62) * 6.28
                          }`}
                          transform="rotate(-90 125 125)"
                          className="pie-segment"
                        />

                        <text
                          x="125"
                          y="120"
                          textAnchor="middle"
                          fontSize="20"
                          fontWeight="bold"
                          fill="#000"
                        >
                          {formatNumber(creatorData?.followers_count)}
                        </text>
                        <text
                          x="125"
                          y="140"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          Followers
                        </text>
                      </svg>
                    </div>
                    <div className="gender-legend">
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#E74C3C" }}
                        ></div>
                        <span className="legend-percentage">
                          {formatPercentage(demographics?.female_percentage)}
                        </span>
                        <span className="legend-label">Nữ</span>
                      </div>
                      <div className="legend-item">
                        <div
                          className="legend-color"
                          style={{ backgroundColor: "#3498DB" }}
                        ></div>
                        <span className="legend-percentage">
                          {formatPercentage(demographics?.male_percentage)}
                        </span>
                        <span className="legend-label">Nam</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Age Distribution */}
                <div className="chart-container">
                  <h4>Phân bố độ tuổi</h4>
                  <div className="age-chart">
                    <div className="bar-chart">
                      <svg width="100%" height="300" viewBox="0 0 500 300">
                        {/* Age bars */}
                        <rect
                          x="50"
                          y={
                            300 - (demographics?.age_18_24_percentage || 35) * 5
                          }
                          width="70"
                          height={
                            (demographics?.age_18_24_percentage || 35) * 5
                          }
                          fill="#009995"
                        />
                        <rect
                          x="140"
                          y={
                            300 - (demographics?.age_25_34_percentage || 28) * 5
                          }
                          width="70"
                          height={
                            (demographics?.age_25_34_percentage || 28) * 5
                          }
                          fill="#0063BE"
                        />
                        <rect
                          x="230"
                          y={
                            300 - (demographics?.age_35_44_percentage || 20) * 5
                          }
                          width="70"
                          height={
                            (demographics?.age_35_44_percentage || 20) * 5
                          }
                          fill="#FEC24C"
                        />
                        <rect
                          x="320"
                          y={
                            300 - (demographics?.age_45_54_percentage || 12) * 5
                          }
                          width="70"
                          height={
                            (demographics?.age_45_54_percentage || 12) * 5
                          }
                          fill="#E74C3C"
                        />
                        <rect
                          x="410"
                          y={
                            300 -
                            (demographics?.age_55_plus_percentage || 5) * 5
                          }
                          width="70"
                          height={
                            (demographics?.age_55_plus_percentage || 5) * 5
                          }
                          fill="#9B59B6"
                        />

                        {/* Labels */}
                        <text
                          x="85"
                          y="315"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          18-24
                        </text>
                        <text
                          x="175"
                          y="315"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          25-34
                        </text>
                        <text
                          x="265"
                          y="315"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          35-44
                        </text>
                        <text
                          x="355"
                          y="315"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          45-54
                        </text>
                        <text
                          x="445"
                          y="315"
                          textAnchor="middle"
                          fontSize="12"
                          fill="#666"
                        >
                          55+
                        </text>

                        {/* Percentage labels */}
                        <text
                          x="85"
                          y={
                            300 -
                            (demographics?.age_18_24_percentage || 35) * 5 -
                            10
                          }
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="bold"
                          fill="#009995"
                        >
                          {formatPercentage(demographics?.age_18_24_percentage)}
                        </text>
                        <text
                          x="175"
                          y={
                            300 -
                            (demographics?.age_25_34_percentage || 28) * 5 -
                            10
                          }
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="bold"
                          fill="#0063BE"
                        >
                          {formatPercentage(demographics?.age_25_34_percentage)}
                        </text>
                        <text
                          x="265"
                          y={
                            300 -
                            (demographics?.age_35_44_percentage || 20) * 5 -
                            10
                          }
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="bold"
                          fill="#FEC24C"
                        >
                          {formatPercentage(demographics?.age_35_44_percentage)}
                        </text>
                        <text
                          x="355"
                          y={
                            300 -
                            (demographics?.age_45_54_percentage || 12) * 5 -
                            10
                          }
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="bold"
                          fill="#E74C3C"
                        >
                          {formatPercentage(demographics?.age_45_54_percentage)}
                        </text>
                        <text
                          x="445"
                          y={
                            300 -
                            (demographics?.age_55_plus_percentage || 5) * 5 -
                            10
                          }
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="bold"
                          fill="#9B59B6"
                        >
                          {formatPercentage(
                            demographics?.age_55_plus_percentage
                          )}
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Locations */}
              <div className="locations-section">
                <h4>Khu vực theo dõi hàng đầu</h4>
                <div className="locations-grid">
                  {(
                    demographics?.top_locations || [
                      { location: "Hồ Chí Minh", percentage: 35 },
                      { location: "Hà Nội", percentage: 28 },
                      { location: "Đà Nẵng", percentage: 12 },
                      { location: "Cần Thơ", percentage: 8 },
                      { location: "Hải Phòng", percentage: 6 },
                      { location: "Khác", percentage: 11 },
                    ]
                  ).map((location, index) => (
                    <div key={index} className="location-card">
                      <div className="location-bar">
                        <div
                          className="location-progress"
                          style={{
                            width: `${location.percentage}%`,
                            backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
                          }}
                        ></div>
                      </div>
                      <div className="location-info">
                        <span className="location-name">
                          {location.location}
                        </span>
                        <span className="location-percentage">
                          {location.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engagement Insights */}
              <div className="engagement-section">
                <h4>Thông tin tương tác theo nhóm người theo dõi</h4>
                <div className="engagement-grid">
                  <div className="engagement-card">
                    <div className="engagement-header">
                      <h5>Nhóm 18-24 tuổi</h5>
                      <span className="engagement-percentage">
                        {formatPercentage(demographics?.age_18_24_percentage)}
                      </span>
                    </div>
                    <div className="engagement-metrics">
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ like:</span>
                        <span className="metric-value">12.5%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ comment:</span>
                        <span className="metric-value">3.8%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ share:</span>
                        <span className="metric-value">1.2%</span>
                      </div>
                    </div>
                  </div>

                  <div className="engagement-card">
                    <div className="engagement-header">
                      <h5>Nhóm 25-34 tuổi</h5>
                      <span className="engagement-percentage">
                        {formatPercentage(demographics?.age_25_34_percentage)}
                      </span>
                    </div>
                    <div className="engagement-metrics">
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ like:</span>
                        <span className="metric-value">8.7%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ comment:</span>
                        <span className="metric-value">2.4%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ share:</span>
                        <span className="metric-value">0.9%</span>
                      </div>
                    </div>
                  </div>

                  <div className="engagement-card">
                    <div className="engagement-header">
                      <h5>Người theo dõi nữ</h5>
                      <span className="engagement-percentage">
                        {formatPercentage(demographics?.female_percentage)}
                      </span>
                    </div>
                    <div className="engagement-metrics">
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ like:</span>
                        <span className="metric-value">11.2%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ comment:</span>
                        <span className="metric-value">4.1%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ share:</span>
                        <span className="metric-value">1.5%</span>
                      </div>
                    </div>
                  </div>

                  <div className="engagement-card">
                    <div className="engagement-header">
                      <h5>Người theo dõi nam</h5>
                      <span className="engagement-percentage">
                        {formatPercentage(demographics?.male_percentage)}
                      </span>
                    </div>
                    <div className="engagement-metrics">
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ like:</span>
                        <span className="metric-value">7.8%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ comment:</span>
                        <span className="metric-value">1.9%</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Tỷ lệ share:</span>
                        <span className="metric-value">0.6%</span>
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

export default FollowersAnalytics;
