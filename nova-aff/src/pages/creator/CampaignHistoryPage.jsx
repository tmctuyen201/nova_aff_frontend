import React, { useState } from "react";
import CampaignCard from "../../components/creator/CampaignCard";
import SearchFilters from "../../components/creator/SearchFilters";
import StatusTabs from "../../components/creator/StatusTabs";
import CampaignRegistrationModal from "../../components/creator/CampaignRegistrationModal";
import "./CampaignHistoryPage.css";

const CampaignHistoryPage = ({ stats }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    timeRange: "",
    campaignType: "",
    location: "",
  });
  const [activeTab, setActiveTab] = useState("participated");
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock campaign data for history
  const mockHistoryCampaigns = [
    {
      id: 1,
      title: "Combo Siêu Tiết Kiệm – Mỹ Phẩm",
      brand: "Beauty Studio",
      location: "Hồ Chí Minh",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop&crop=center",
      category: "beauty",
      color: "#FF6B6B",
      status: "participated",
      commission: "15%",
      budget: "50M",
      engagement: "12.5K",
    },
    {
      id: 2,
      title: "Sale Sốc Đồ Gia Dụng",
      brand: "Home Smart",
      location: "Hải Phòng",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop&crop=center",
      category: "home",
      color: "#DDA0DD",
      status: "participated",
      commission: "12%",
      budget: "30M",
      engagement: "8.2K",
    },
    {
      id: 3,
      title: "FlashSale 8/8",
      brand: "TechWorld",
      location: "Đà Nẵng",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop&crop=center",
      category: "flash-sale",
      color: "#85C1E9",
      status: "participated",
      commission: "20%",
      budget: "100M",
      engagement: "25.1K",
    },
    {
      id: 4,
      title: "Giảm Giá Mùa Thu 2025",
      brand: "Fashion House",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      category: "seasonal",
      color: "#F8C471",
      status: "participated",
      commission: "18%",
      budget: "80M",
      engagement: "18.7K",
    },
    {
      id: 5,
      title: "Back To School – Dụng Cụ Học Tập",
      brand: "EduSupplies",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center",
      category: "education",
      color: "#82E0AA",
      status: "participated",
      commission: "10%",
      budget: "25M",
      engagement: "6.8K",
    },
    // Pending campaigns
    {
      id: 6,
      title: "Ưu Đãi Đồ Nội Thất",
      brand: "Interior Pro",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
      category: "furniture",
      color: "#FFEAA7",
      status: "pending",
      commission: "14%",
      budget: "45M",
      engagement: "0",
    },
    {
      id: 7,
      title: "Siêu Khuyến Mãi – Đồ Điện Gia Dụng",
      brand: "ElectroMart",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      category: "appliances",
      color: "#BB8FCE",
      status: "pending",
      commission: "16%",
      budget: "60M",
      engagement: "0",
    },
  ];

  const tabs = [
    {
      id: "participated",
      label: `Đã tham gia (${stats?.participated_campaigns || 5})`,
      count: stats?.participated_campaigns || 5,
    },
    {
      id: "pending",
      label: `Chờ duyệt (${stats?.pending_campaigns || 2})`,
      count: stats?.pending_campaigns || 2,
    },
  ];

  const filteredCampaigns = mockHistoryCampaigns.filter((campaign) => {
    const matchesTab = campaign.status === activeTab;
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !filters.category || campaign.category === filters.category;
    const matchesLocation =
      !filters.location || campaign.location === filters.location;

    return matchesTab && matchesSearch && matchesCategory && matchesLocation;
  });

  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCampaign(null);
  };

  return (
    <div className="campaign-history-page">
      <div className="page-header">
        <div className="breadcrumb">
          <h1 className="page-title">Lịch sử chiến dịch</h1>
        </div>
        <p className="page-description">
          Quản lý và theo dõi tiến độ của các chiến dịch bạn đã tham gia
        </p>
      </div>

      <SearchFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filters={filters}
        onFiltersChange={setFilters}
      />

      <StatusTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="campaigns-section">
        <div className="section-header">
          <div className="section-info">
            <h2 className="section-title">
              {activeTab === "participated"
                ? "Chiến dịch đã tham gia"
                : "Chiến dịch chờ duyệt"}
            </h2>
            <p className="section-subtitle">
              {activeTab === "participated"
                ? "Các chiến dịch bạn đã hoàn thành thành công"
                : "Các chiến dịch đang chờ phê duyệt từ nhà tuyển dụng"}
            </p>
          </div>
          <div className="section-stats">
            <div className="stat-card">
              <div className="stat-number">{filteredCampaigns.length}</div>
              <div className="stat-label">Chiến dịch</div>
            </div>
          </div>
        </div>

        {filteredCampaigns.length > 0 ? (
          <div className="campaigns-grid">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                type="history"
                onCampaignClick={handleCampaignClick}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 2C6.48 2 0 8.48 0 18C0 27.52 6.48 34 16 34C25.52 34 32 27.52 32 18C32 8.48 25.52 2 16 2ZM16 30C8.59 30 4 25.41 4 18C4 10.59 8.59 6 16 6C23.41 6 28 10.59 28 18C28 25.41 23.41 30 16 30Z"
                  fill="currentColor"
                />
                <path
                  d="M16.5 10H15V18L20.25 21.15L21 19.92L16.5 17.25V10Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>
              {activeTab === "pending"
                ? "Chưa có chiến dịch chờ duyệt"
                : "Chưa tham gia chiến dịch nào"}
            </h3>
            <p>
              {activeTab === "pending"
                ? "Các chiến dịch bạn đăng ký sẽ hiển thị ở đây khi đang chờ duyệt"
                : "Hãy khám phá và tham gia các chiến dịch mới để xây dựng lịch sử"}
            </p>
            {activeTab === "participated" && (
              <div className="empty-state-action">
                <button
                  className="action-button"
                  onClick={() => (window.location.href = "/creator/dashboard")}
                >
                  Khám phá chiến dịch mới
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <CampaignRegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        campaign={selectedCampaign}
      />
    </div>
  );
};

export default CampaignHistoryPage;
