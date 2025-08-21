import "../../styles/components/story-section.css";

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-container">
        <div className="story-content">
          <h2 className="story-title">Our Story</h2>
          <div className="story-text">
            <p>
              Nova AFF was born from a simple observation: the disconnect
              between brands seeking authentic promotion and creators looking
              for meaningful partnerships. We set out to bridge this gap with
              technology and human insight.
            </p>
            <p>
              Today, we're proud to serve thousands of brands and creators
              worldwide, facilitating partnerships that drive real business
              results while maintaining authenticity and trust.
            </p>
          </div>
        </div>

        <div className="story-stats">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Active Creators</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1K+</span>
            <span className="stat-label">Brand Partners</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">$50M+</span>
            <span className="stat-label">Revenue Generated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
