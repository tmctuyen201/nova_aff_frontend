import "../../styles/components/support-card.css";

const SupportCard = ({ title, description, icon, articles }) => {
  return (
    <div className="support-card">
      <div className="support-card-icon">{icon}</div>
      <div className="support-card-content">
        <h3 className="support-card-title">{title}</h3>
        <p className="support-card-description">{description}</p>
        <div className="support-card-meta">
          <span className="support-card-articles">{articles} articles</span>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
