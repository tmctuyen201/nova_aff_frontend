import "../../styles/components/service-card.css";

const ServiceCard = ({ title, features, imageSrc }) => {
  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <ul className="service-card-features">
          {features.map((feature, index) => (
            <li key={index} className="service-card-feature">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
