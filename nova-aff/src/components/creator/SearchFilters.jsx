import React from "react";
import "./SearchFilters.css";

const SearchFilters = ({
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
}) => {
  const quickFilters = [
    { id: "beauty", label: "Mỹ phẩm" },
    { id: "fashion", label: "Thời trang" },
    { id: "tech", label: "Công nghệ" },
    { id: "food", label: "Ẩm thực" },
    { id: "lifestyle", label: "Phong cách sống" },
  ];

  const handleQuickFilter = (categoryId) => {
    const newCategory = filters.category === categoryId ? "" : categoryId;
    onFiltersChange({ ...filters, category: newCategory });
  };

  const clearAllFilters = () => {
    onSearchChange("");
    onFiltersChange({
      category: "",
      timeRange: "",
      campaignType: "",
      location: "",
    });
  };

  const hasActiveFilters =
    searchQuery || Object.values(filters).some((filter) => filter);

  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="search-filters">
      <div className="search-section">
        <label className="search-label">Tìm kiếm chiến dịch</label>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Nhập tên chiến dịch, thương hiệu hoặc địa điểm..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="m21 21-4.35-4.35"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="filters-grid">
        <div className="filter-group">
          <label className="filter-label">Danh mục</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="filter-select"
          >
            <option value="">Tất cả danh mục</option>
            <option value="beauty">Mỹ phẩm & Làm đẹp</option>
            <option value="fashion">Thời trang</option>
            <option value="tech">Công nghệ</option>
            <option value="health">Sức khỏe</option>
            <option value="home">Gia dụng</option>
            <option value="electronics">Điện tử</option>
            <option value="toys">Đồ chơi</option>
            <option value="education">Giáo dục</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Thời gian</label>
          <select
            value={filters.timeRange}
            onChange={(e) => handleFilterChange("timeRange", e.target.value)}
            className="filter-select"
          >
            <option value="">Mọi thời gian</option>
            <option value="today">Hôm nay</option>
            <option value="week">Tuần này</option>
            <option value="month">Tháng này</option>
            <option value="quarter">Quý này</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Loại chiến dịch</label>
          <select
            value={filters.campaignType}
            onChange={(e) => handleFilterChange("campaignType", e.target.value)}
            className="filter-select"
          >
            <option value="">Tất cả loại</option>
            <option value="affiliate">Affiliate Marketing</option>
            <option value="sponsored">Sponsored Content</option>
            <option value="review">Product Review</option>
            <option value="unboxing">Unboxing Video</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Địa điểm</label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
            className="filter-select"
          >
            <option value="">Mọi địa điểm</option>
            <option value="hanoi">Hà Nội</option>
            <option value="hcm">Hồ Chí Minh</option>
            <option value="danang">Đà Nẵng</option>
            <option value="haiphong">Hải Phòng</option>
          </select>
        </div>

        {hasActiveFilters && (
          <div className="filter-group">
            <label className="filter-label">&nbsp;</label>
            <button className="clear-filters" onClick={clearAllFilters}>
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>

      <div className="quick-filters">
        {quickFilters.map((filter) => (
          <button
            key={filter.id}
            className={`quick-filter-tag ${
              filters.category === filter.id ? "active" : ""
            }`}
            onClick={() => handleQuickFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;
