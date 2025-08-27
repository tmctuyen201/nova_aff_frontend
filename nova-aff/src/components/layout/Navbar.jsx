import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChevronDown from "../../assets/icons/ChevronDown";
import UKFlag from "../../assets/icons/UKFlag";
import VNFlag from "../../assets/icons/VNFlag";
import LoginModal from "../ui/LoginModal";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/components/navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user, getDashboardLink } = useAuth();

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setActiveDropdown(null);
  };

  const handleStartClick = () => {
    setShowLoginModal(true);
    setActiveDropdown(null);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const menuItems = {
    brand: {
      title: "Nhãn hàng",
      items: [
        { name: "Tổng quan", path: "/brand/overview" },
        { name: "Tiếp Thị Liên Kết", path: "/brand/affiliate" },
        { name: "Tiếp Thị Người Ảnh Hưởng", path: "/brand/influencer" },
        { name: "Dịch vụ Booking Influencer", path: "/brand/booking" },
        { name: "Nội Dung Do Người Dùng Tạo", path: "/brand/ugc" },
      ],
    },
    about: {
      title: "Về NovaAFF",
      items: [
        { name: "Về chúng tôi", path: "/about" },
        { name: "Liên hệ", path: "/contact" },
        { name: "Trung tâm trợ giúp", path: "/support" },
      ],
    },
    creator: {
      title: "Nhà sáng tạo",
      items: [
        { name: "Tổng Quan", path: "/creator/overview" },
        { name: "Khám Phá Chiến Dịch", path: "/creator/campaigns" },
        { name: "Công cụ dành cho nhà sáng tạo", path: "/creator/tools" },
      ],
    },
    publisher: {
      title: "Nhà xuất bản",
      items: [
        { name: "Tổng quan", path: "/publisher/overview" },
        { name: "Khám phá chiến dịch", path: "/publisher/campaigns" },
        { name: "Công cụ dành cho nhà sáng tạo", path: "/publisher/tools" },
      ],
    },
    explore: {
      title: "Explore",
      items: [
        { name: "Blog", path: "/blog" },
        { name: "Events", path: "/events" },
        { name: "Success Stories", path: "/stories" },
        { name: "Academy", path: "/academy" },
        { name: "Workshop", path: "/workshop" },
      ],
    },
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a13cb6f5329aaeee358310ccbde0ed31a5b0b4a6?width=162"
              alt="NOVA AFF Logo"
              className="logo-image"
            />
          </Link>
        </div>

        <div className="navbar-menu">
          {Object.entries(menuItems).map(([key, menu]) => (
            <div key={key} className="navbar-item">
              <button
                className="navbar-button"
                onClick={() => toggleDropdown(key)}
              >
                <span>{menu.title}</span>
                <ChevronDown className="dropdown-icon" />
              </button>

              {activeDropdown === key && (
                <div className="dropdown-menu">
                  {menu.items.map((item, index) => (
                    <button
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleNavigation(item.path)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="navbar-actions">
          {isAuthenticated ? (
            <Link to={getDashboardLink()} className="dashboard-button">
              Dashboard
            </Link>
          ) : (
            <button className="start-button" onClick={handleStartClick}>
              Start
            </button>
          )}

          <div className="language-selector">
            <button
              className="language-button"
              onClick={() => toggleDropdown("language")}
            >
              <VNFlag className="flag-icon" />
              <ChevronDown className="dropdown-icon" />
            </button>

            {activeDropdown === "language" && (
              <div className="language-dropdown">
                <div className="language-option">
                  <VNFlag className="flag-icon" />
                  <span>VI</span>
                </div>
                <div className="language-option">
                  <UKFlag className="flag-icon" />
                  <span>EN</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
    </nav>
  );
};

export default Navbar;
