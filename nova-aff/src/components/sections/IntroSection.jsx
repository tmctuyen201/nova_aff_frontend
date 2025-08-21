import "../../styles/components/intro-section.css";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-content">
          <h1 className="intro-title">About Nova AFF</h1>
          <p className="intro-subtitle">
            Connecting brands with creators to build authentic partnerships and
            drive meaningful results.
          </p>
          <p className="intro-description">
            Founded in 2024, Nova AFF has become the leading platform for
            affiliate marketing, influencer partnerships, and creator
            collaborations. We believe in the power of authentic connections
            between brands and creators.
          </p>
        </div>
        <div className="intro-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/about-intro?width=500"
            alt="Nova AFF Team"
            className="intro-img"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
