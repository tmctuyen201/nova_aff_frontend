import "../../styles/components/value-card.css";

const ValueCard = ({ title, description, icon }) => {
  return (
    <div className="value-card">
      <div className="value-card-icon">{icon}</div>
      <div className="value-card-content">
        <h3 className="value-card-title">{title}</h3>
        <p className="value-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
