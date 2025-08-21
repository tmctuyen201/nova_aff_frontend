import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ChevronDown from "../../assets/icons/ChevronDown";
import UKFlag from "../../assets/icons/UKFlag";
import LoginModal from "../ui/LoginModal";
import "../../styles/components/navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

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
      title: "Brand",
      items: [
        { name: "Overview", path: "/brand/overview" },
        { name: "Affiliate Marketing", path: "/brand/affiliate" },
        { name: "Influencer Marketing", path: "/brand/influencer" },
        { name: "Influencer Booking", path: "/brand/booking" },
        { name: "User-Generated Content", path: "/brand/ugc" },
      ],
    },
    about: {
      title: "About NOVA AFF",
      items: [
        { name: "About us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Support Center", path: "/support" },
      ],
    },
    creator: {
      title: "Creator",
      items: [
        { name: "Overview", path: "/creator/overview" },
        { name: "Explore Campaigns", path: "/creator/campaigns" },
        { name: "Creator Tools", path: "/creator/tools" },
      ],
    },
    publisher: {
      title: "Publisher",
      items: [
        { name: "Overview", path: "/publisher/overview" },
        { name: "Explore Campaigns", path: "/publisher/campaigns" },
        { name: "Creator Tools", path: "/publisher/tools" },
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
          <button className="start-button" onClick={handleStartClick}>
            Start
          </button>

          <div className="language-selector">
            <button
              className="language-button"
              onClick={() => toggleDropdown("language")}
            >
              <UKFlag className="flag-icon" />
              <ChevronDown className="dropdown-icon" />
            </button>

            {activeDropdown === "language" && (
              <div className="language-dropdown">
                <div className="language-option">
                  <UKFlag className="flag-icon" />
                  <span>EN</span>
                </div>
                <div className="language-option">
                  <UKFlag className="flag-icon" />
                  <span>VI</span>
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
