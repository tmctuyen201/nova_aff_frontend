import { Link } from "react-router-dom";
import "../../styles/components/footer.css";

const Footer = () => {
  const footerSections = {
    nova: {
      title: "NOVA AFF",
      links: [
        { name: "About us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Support center", path: "/support" },
      ],
    },
    brands: {
      title: "Brands",
      links: [
        { name: "Overview", path: "/brand" },
        { name: "Affiliate Marketing", path: "/brand/affiliate" },
        { name: "Influencer Marketing", path: "/brand/influencer" },
        { name: "Influencer Booking", path: "/brand/booking" },
        { name: "User-Generated Content", path: "/brand/ugc" },
      ],
    },
    creator: {
      title: "Creator",
      links: [
        { name: "Overview", path: "/creator" },
        { name: "Explore Campaigns", path: "/creator/campaigns" },
        { name: "Creator Tools", path: "/creator/tools" },
      ],
    },
    publisher: {
      title: "Publisher",
      links: [
        { name: "Overview", path: "/publisher" },
        { name: "Explore Campaigns", path: "/publisher/campaigns" },
        { name: "Creator Tools", path: "/publisher/tools" },
      ],
    },
    explore: {
      title: "Explore",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Events", path: "/events" },
        { name: "Success Stories", path: "/stories" },
        { name: "Academy", path: "/academy" },
        { name: "Workshop", path: "/workshop" },
      ],
    },
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="footer-section">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-logo">
          <Link to="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/16ed31e4e075f6ce9a18bbef0964305656dfd5b0?width=162"
              alt="NOVA AFF Logo"
              className="footer-logo-image"
            />
          </Link>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-legal">
            <Link to="/privacy" className="legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="legal-link">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
