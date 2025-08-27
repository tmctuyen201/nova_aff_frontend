import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BrandHeader from "../../components/brand/BrandHeader";
import BrandSidebar from "../../components/brand/BrandSidebar";
import "./BrandDashboard.css";

const BrandDashboard = () => {
  const navigate = useNavigate();
  const [dashboardStats, setDashboardStats] = useState({
    clicks_today: 0,
    orders_today: 0,
    revenue_today: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch("/api/brand/dashboard/stats/");
      const data = await response.json();
      setDashboardStats(data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Handle logout logic
    localStorage.removeItem("token");
    navigate("/login");
  };

  const clickIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const orderIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const revenueIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line
        x1="12"
        y1="1"
        x2="12"
        y2="23"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const orderListIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  if (loading) {
    return (
      <div className="brand-dashboard">
        <BrandHeader onLogout={handleLogout} />
        <div className="dashboard-layout">
          <BrandSidebar />
          <div className="dashboard-content">
            <div className="loading">Đang tải...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="brand-dashboard">
      <BrandHeader onLogout={handleLogout} />

      <div className="dashboard-layout">
        <BrandSidebar />

        <main className="dashboard-content">
          <div className="dashboard-header">
            <div className="breadcrumb">
              <h1 className="breadcrumb-item">Dashboard Brand</h1>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="stats-row">
              {/* Click Card */}
              <div className="stats-card">
                <div className="stats-card-content">
                  <div className="stats-info">
                    <div className="stats-value">
                      {dashboardStats.clicks_today}
                    </div>
                    <div className="stats-title">Click hôm nay</div>
                    <div className="stats-progress">
                      <div className="stats-bar"></div>
                    </div>
                  </div>
                  <div className="stats-icon">{clickIcon}</div>
                </div>
              </div>

              {/* Orders Card */}
              <div className="stats-card">
                <div className="stats-card-content">
                  <div className="stats-info">
                    <div className="stats-value">
                      {dashboardStats.orders_today}
                    </div>
                    <div className="stats-title">Đơn hàng hôm nay</div>
                    <div className="stats-progress">
                      <div className="stats-bar"></div>
                    </div>
                  </div>
                  <div className="stats-icon">{orderIcon}</div>
                </div>
              </div>

              {/* Revenue Card */}
              <div className="stats-card">
                <div className="stats-card-content">
                  <div className="stats-info">
                    <div className="stats-value revenue">
                      {dashboardStats.revenue_today.toLocaleString()} VND
                    </div>
                    <div className="stats-title">Doanh thu hôm nay</div>
                    <div className="stats-progress">
                      <div className="stats-bar"></div>
                    </div>
                  </div>
                  <div className="stats-icon">{revenueIcon}</div>
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <div className="orders-section">
              <div className="orders-header">
                <div className="orders-icon">{orderListIcon}</div>
                <h2 className="orders-title">Đơn hàng mới nhất</h2>
              </div>
              <div className="no-data">📊 Không có dữ liệu đơn hàng</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BrandDashboard;
