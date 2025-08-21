import ServiceCard from "../ui/ServiceCard";
import "../../styles/components/service-section.css";

const ServiceSection = () => {
  const services = [
    {
      title: "Affiliate Marketing",
      features: [
        "Performance-based partnerships",
        "Real-time tracking and analytics",
        "Automated commission management",
      ],
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/service-affiliate?width=300",
    },
    {
      title: "Influencer Marketing",
      features: [
        "Creator discovery and matching",
        "Campaign management tools",
        "Content approval workflows",
      ],
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/service-influencer?width=300",
    },
    {
      title: "Content Creation",
      features: [
        "User-generated content campaigns",
        "Creative brief management",
        "Content rights management",
      ],
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/service-content?width=300",
    },
  ];

  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-header">
          <h2 className="service-title">Our Services</h2>
          <p className="service-subtitle">
            Comprehensive solutions for modern marketing
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              features={service.features}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
