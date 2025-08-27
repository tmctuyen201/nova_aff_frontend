import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CreatorHeader from "../../components/creator/CreatorHeader";
import CreatorSidebar from "../../components/creator/CreatorSidebar";
import FindCampaignsPage from "./FindCampaignsPage";
import CampaignHistoryPage from "./CampaignHistoryPage";
import "./CreatorDashboard.css";

const CreatorDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("campaigns");
  const [dashboardStats, setDashboardStats] = useState({
    available_campaigns: 100,
    participated_campaigns: 2,
    pending_campaigns: 5,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Determine current page based on URL path
    const path = location.pathname;
    if (path.includes("/history")) {
      setCurrentPage("history");
    } else {
      setCurrentPage("campaigns");
    }

    fetchDashboardStats();
  }, [location.pathname]);

  const fetchDashboardStats = async () => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch("/api/creator/dashboard/stats/");
      const data = await response.json();
      setDashboardStats(data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_info");
    navigate("/login");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (page === "campaigns") {
      navigate("/creator/dashboard");
    } else if (page === "history") {
      navigate("/creator/dashboard/history");
    }
  };

  if (loading) {
    return (
      <div className="creator-dashboard">
        <CreatorHeader onLogout={handleLogout} />
        <div className="dashboard-layout">
          <CreatorSidebar
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <div className="dashboard-content">
            <div className="loading">Đang tải...</div>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentPage) {
      case "history":
        return <CampaignHistoryPage stats={dashboardStats} />;
      case "campaigns":
      default:
        return <FindCampaignsPage stats={dashboardStats} />;
    }
  };

  return (
    <div className="creator-dashboard">
      <CreatorHeader onLogout={handleLogout} />

      <div className="dashboard-layout">
        <CreatorSidebar
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <main className="dashboard-content" style={{ margin: 0 }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default CreatorDashboard;
