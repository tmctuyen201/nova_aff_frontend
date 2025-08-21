import ValueCard from "../ui/ValueCard";
import "../../styles/components/values-section.css";

const ValuesSection = () => {
  const values = [
    {
      title: "Authenticity",
      description:
        "We believe in genuine connections and authentic partnerships that resonate with audiences.",
      icon: "🎯",
    },
    {
      title: "Innovation",
      description:
        "We continuously innovate to provide cutting-edge tools and features for our community.",
      icon: "💡",
    },
    {
      title: "Growth",
      description:
        "We're committed to helping both brands and creators achieve sustainable growth and success.",
      icon: "📈",
    },
    {
      title: "Trust",
      description:
        "Trust is the foundation of all our relationships - with creators, brands, and each other.",
      icon: "🤝",
    },
  ];

  return (
    <section className="values-section">
      <div className="values-container">
        <div className="values-header">
          <h2 className="values-title">Our Values</h2>
          <p className="values-subtitle">
            The principles that guide everything we do
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
