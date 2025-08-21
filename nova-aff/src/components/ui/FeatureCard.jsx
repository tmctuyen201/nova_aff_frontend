import "../../styles/components/feature-card.css";

const FeatureCard = ({ title, subtitle, description, imageSrc }) => {
  return (
    <div className="feature-card">
      <div className="feature-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="feature-card-content">
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-subtitle">{subtitle}</p>
        <p className="feature-card-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
