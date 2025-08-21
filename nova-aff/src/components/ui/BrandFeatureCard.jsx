import "../../styles/components/brand-feature-card.css";

const BrandFeatureCard = ({ title, description, imageSrc }) => {
  return (
    <div className="brand-feature-card">
      <div className="brand-feature-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="brand-feature-card-content">
        <h3 className="brand-feature-card-title">{title}</h3>
        <p className="brand-feature-card-description">{description}</p>
      </div>
    </div>
  );
};

export default BrandFeatureCard;
