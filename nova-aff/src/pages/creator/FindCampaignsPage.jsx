import React, { useState } from "react";
import CampaignCard from "../../components/creator/CampaignCard";
import SearchFilters from "../../components/creator/SearchFilters";
import CampaignRegistrationModal from "../../components/creator/CampaignRegistrationModal";
import "./FindCampaignsPage.css";

const FindCampaignsPage = ({ stats }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    timeRange: "",
    campaignType: "",
    location: "",
  });
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock campaign data based on Figma design
  const mockCampaigns = [
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
      status: "available",
      commission: "15%",
      budget: "50M",
    },
    {
      id: 2,
      title: "Siêu Hội Công Nghệ",
      brand: "TechWorld",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
      category: "tech",
      color: "#4ECDC4",
      status: "available",
      commission: "20%",
      budget: "120M",
    },
    {
      id: 3,
      title: "Healthy Life – Thực Phẩm Chức Năng",
      brand: "HealthPlus",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      category: "health",
      color: "#45B7D1",
      status: "available",
      commission: "18%",
      budget: "75M",
    },
    {
      id: 4,
      title: "Sale 50% – Giày Dép Nam",
      brand: "FootStyle",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center",
      category: "fashion",
      color: "#96CEB4",
      status: "available",
      commission: "12%",
      budget: "40M",
    },
    {
      id: 5,
      title: "Ưu Đãi Đồ Nội Thất",
      brand: "Interior Pro",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
      category: "furniture",
      color: "#FFEAA7",
      status: "available",
      commission: "14%",
      budget: "45M",
    },
    {
      id: 6,
      title: "Sale Sốc Đồ Gia Dụng",
      brand: "Home Smart",
      location: "Hải Phòng",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop&crop=center",
      category: "home",
      color: "#DDA0DD",
      status: "available",
      commission: "12%",
      budget: "30M",
    },
    {
      id: 7,
      title: "Mua 1 Tặng 1 – Phụ Kiện Điện Thoại",
      brand: "PhoneAccessory",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
      category: "electronics",
      color: "#FFB6C1",
      status: "available",
      commission: "16%",
      budget: "35M",
    },
    {
      id: 8,
      title: "Khuyến Mãi Hè Sôi Động",
      brand: "Summer Vibes",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      category: "lifestyle",
      color: "#98D8C8",
      status: "available",
      commission: "13%",
      budget: "42M",
    },
    {
      id: 9,
      title: "Deal Săn Nhanh 12h",
      brand: "FlashDeals",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=300&fit=crop&crop=center",
      category: "flash-sale",
      color: "#F7DC6F",
      status: "available",
      commission: "25%",
      budget: "80M",
    },
    {
      id: 10,
      title: "Siêu Khuyến Mãi – Đồ Điện Gia Dụng",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "appliances",
      color: "#BB8FCE",
    },
    {
      id: 11,
      title: "FlashSale 8/8",
      location: "Đà Nẵng",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "flash-sale",
      color: "#85C1E9",
    },
    {
      id: 12,
      title: "Giảm Giá Mùa Thu 2025",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "seasonal",
      color: "#F8C471",
    },
    {
      id: 13,
      title: "Back To School – Dụng Cụ Học Tập",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "education",
      color: "#82E0AA",
    },
    {
      id: 14,
      title: "Đẹp Cùng Skincare",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "beauty",
      color: "#F1948A",
    },
    {
      id: 15,
      title: "Clearance Sale – Xả Kho",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "clearance",
      color: "#D2B4DE",
    },
    {
      id: 16,
      title: "Beauty Week – Tuần Lễ Làm Đẹp",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "beauty",
      color: "#AED6F1",
    },
    {
      id: 17,
      title: "Thời Trang Nữ Xu Hướng Mới",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "fashion",
      color: "#A9DFBF",
    },
    {
      id: 18,
      title: "Ưu Đãi Đồ Chơi Trẻ Em",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "toys",
      color: "#FAD7A0",
    },
    {
      id: 19,
      title: "Ưu Đãi Khách Hàng Mới",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "promotion",
      color: "#E8DAEF",
    },
    {
      id: 20,
      title: "Thời Trang Nam Cao Cấp",
      location: "Hà Nội",
      timeRange: "8h-15/07",
      image: "/api/placeholder/100/100",
      category: "fashion",
      color: "#D5DBDB",
    },
  ];

  const filteredCampaigns = mockCampaigns.filter((campaign) => {
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !filters.category || campaign.category === filters.category;
    const matchesLocation =
      !filters.location || campaign.location === filters.location;

    return matchesSearch && matchesCategory && matchesLocation;
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
    <div className="find-campaigns-page">
      <div className="page-header">
        <div className="breadcrumb">
          <h1 className="page-title">Tìm chiến dịch</h1>
        </div>
        <p className="page-description">
          Khám phá và tham gia các chiến dịch affiliate hấp dẫn phù hợp với kênh
          của bạn
        </p>
      </div>

      <SearchFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filters={filters}
        onFiltersChange={setFilters}
      />

      <div className="campaigns-section">
        <div className="section-header">
          <h2 className="section-title">Chiến dịch có sẵn</h2>
          <div className="section-stats">
            {filteredCampaigns.length} /{" "}
            {stats?.available_campaigns || mockCampaigns.length} chiến dịch
          </div>
        </div>

        {filteredCampaigns.length > 0 ? (
          <div className="campaigns-grid">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                type="available"
                onCampaignClick={handleCampaignClick}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 2L18.18 8.52L26 8L20 14L23 22L16 19L9 22L12 14L6 8L13.82 8.52L16 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Không tìm thấy chiến dịch phù hợp</h3>
            <p>
              Hãy thử điều chỉnh bộ lọc tìm kiếm để tìm thấy nhiều chiến dịch
              hơn
            </p>
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

export default FindCampaignsPage;
