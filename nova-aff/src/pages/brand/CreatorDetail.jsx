import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BrandHeader from "../../components/brand/BrandHeader";
import BrandSidebar from "../../components/brand/BrandSidebar";
import CreatorNavigation from "../../components/brand/CreatorNavigation";
import "./CreatorDetail.css";

const CreatorDetail = () => {
  const { creatorId } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [activeTab] = useState("sales");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Unified mock data for all creator analytics pages
    const mockCreator = {
      id: 1,
      username: "quynhanh_23291702",
      display_name: "Nguyễn Quỳnh Anh",
      tiktok_url: "www.tiktok.com/@auroracastle2",
      avatar: "/default-avatar.svg",
      categories: ["beauty", "lifestyle"],
      category_display: ["Chăm sóc sắc đẹp", "Lối sống"],
      followers_count: 762400,
      latest_analytics: {
        gmv: 13800000000,
        products_sold: 3700000,
        gpm: 82950,
        average_gmv_per_customer: 3700000,
        commission_rate: 1,
        total_products: 367,
        price_range_min: 82000,
        price_range_max: 5000000,
        brands_collaborated: 62,
      },
      // Additional analytics data for other pages
      collaboration_analytics: {
        total_collaborations: 156,
        active_campaigns: 12,
        completed_campaigns: 144,
        total_revenue: 48500000,
        avg_campaign_value: 312000,
        success_rate: 92.3,
        top_categories: ["Beauty", "Lifestyle", "Fashion"],
        monthly_growth: 15.8,
      },
      video_analytics: {
        total_videos: 423,
        total_views: 15600000,
        average_views: 36872,
        total_likes: 1200000,
        total_shares: 89000,
        total_comments: 245000,
        average_engagement_rate: 8.2,
        gpm_video: 52000,
        most_viewed_video: {
          title: "Skincare routine buổi sáng",
          views: 850000,
          likes: 65000,
        },
      },
      live_analytics: {
        total_live_sessions: 45,
        total_live_viewers: 125000,
        average_viewers: 2778,
        average_live_duration: 85,
        peak_concurrent_viewers: 3200,
        live_conversion_rate: 12.8,
        gpm_live: 75000,
        total_live_revenue: 3375000,
      },
      follower_demographics: {
        female_percentage: 72.4,
        male_percentage: 27.6,
        age_18_24_percentage: 35.2,
        age_25_34_percentage: 28.7,
        age_35_44_percentage: 20.1,
        age_45_54_percentage: 12.3,
        age_55_plus_percentage: 3.7,
        top_locations: [
          { location: "Hồ Chí Minh", percentage: 35 },
          { location: "Hà Nội", percentage: 28 },
          { location: "Đà Nẵng", percentage: 12 },
          { location: "Cần Thơ", percentage: 8 },
          { location: "Hải Phòng", percentage: 6 },
          { location: "Khác", percentage: 11 },
        ],
      },
      trend_data: {
        weekly_growth: {
          gmv_growth: 68,
          views_growth: 52,
          followers_growth: 11750,
          engagement_growth: 34,
        },
        trending_hashtags: [
          { hashtag: "#skincare", usage_count: 1200, trend_score: 95.2 },
          { hashtag: "#beauty", usage_count: 980, trend_score: 87.6 },
          { hashtag: "#makeup", usage_count: 750, trend_score: 82.1 },
        ],
      },
    };

    // In a real app, fetch creator data
    setTimeout(() => {
      setCreator(mockCreator);
      setLoading(false);
    }, 1000);
  }, [creatorId]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Navigation is now handled by CreatorNavigation component

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}Bđ`;
    } else if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}Mđ`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}Kđ`;
    }
    return num.toString();
  };

  const tabs = [
    { id: "sales", label: "Doanh số", active: true },
    { id: "collaboration", label: "Số liệu cộng tác", active: false },
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

  if (!creator) {
    return (
      <div className="creator-detail">
        <BrandHeader onLogout={handleLogout} />
        <div className="creator-layout">
          <BrandSidebar />
          <div className="creator-content">
            <div className="error">Không tìm thấy nhà sáng tạo</div>
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
          <CreatorNavigation creator={creator} activeTab={activeTab} />

          {/* Sales Content */}
          {activeTab === "sales" && (
            <div className="tab-content">
              <div className="content-header">
                <h3>Doanh số</h3>
                <p className="date-range">
                  Tháng 6 30, 2025 - tháng 7 30, 2025 (GMT+00:00)
                </p>
              </div>

              <div className="sales-metrics">
                <div className="metric-card">
                  <div className="metric-value">
                    {formatNumber(creator.latest_analytics?.gmv || 0)}
                  </div>
                  <div className="metric-label">GMV</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <line
                        x1="12"
                        y1="1"
                        x2="12"
                        y2="23"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="2"
                      />
                      <path
                        d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {formatNumber(creator.latest_analytics?.products_sold || 0)}
                  </div>
                  <div className="metric-label">Số món bán ra</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="2"
                      />
                      <line
                        x1="3"
                        y1="6"
                        x2="21"
                        y2="6"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 10a4 4 0 0 1-8 0"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {formatNumber(creator.latest_analytics?.gpm || 0)}
                  </div>
                  <div className="metric-label">GPM</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 17h-6v3h6v-3z"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-value">
                    {formatNumber(
                      creator.latest_analytics?.average_gmv_per_customer || 0
                    )}
                  </div>
                  <div className="metric-label">GMV từ mỗi khách hàng</div>
                  <div className="metric-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="7"
                        r="4"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tab contents would go here */}
          {activeTab !== "sales" && (
            <div className="tab-content">
              <div className="content-placeholder">
                <h3>{tabs.find((t) => t.id === activeTab)?.label}</h3>
                <p>Nội dung đang được phát triển...</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CreatorDetail;
