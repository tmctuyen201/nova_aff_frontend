import React, { useState } from "react";
import styles from "../../styles/pages/creator-overview.module.css";

const CreatorOverviewPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    brand: "",
    website: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.creatorOverviewPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Unlock Growth with NovaAFF's Affiliate Marketing Solutions</h1>
            <p>
              Empower your brand with NovaAFF – where strategic partnerships
              meet cutting-edge affiliate marketing solutions. Our platform
              connects you with a network of dynamic creators and influencers,
              opening the door to scalable growth, increased engagement, and
              unmatched market reach.
            </p>
            <button className={styles.ctaButton}>
              Sign Up Now
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className={styles.heroImage}>
            <img
              src="/src/assets/images/creator-overview-hero.jpg"
              alt="Creator Overview Hero"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <h2>Unlock Brand Potential</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img
                  src="/src/assets/images/expanded-reach.jpg"
                  alt="Expanded Reach"
                />
              </div>
              <h3>Expanded Reach</h3>
              <p>
                Leverage diverse audience segments through affiliate networks to
                expand your brand's visibility and reach.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img
                  src="/src/assets/images/performance-focused.jpg"
                  alt="Performance Focused"
                />
              </div>
              <h3>Performance Focused</h3>
              <p>
                Pay for results – our affiliate marketing model ensures your
                investment drives real conversions and successful outcomes.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img
                  src="/src/assets/images/cost-efficiency.jpg"
                  alt="Cost Efficiency"
                />
              </div>
              <h3>Cost Efficiency</h3>
              <p>
                Maximize your marketing budget by targeting performance-based
                channels to ensure high return on investment.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img
                  src="/src/assets/images/enhanced-credibility.jpg"
                  alt="Enhanced Credibility"
                />
              </div>
              <h3>Enhanced Credibility</h3>
              <p>
                Build trust and credibility by associating your brand with
                reputable affiliates, boosting consumer recognition and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <h2>NOVA's affiliate marketing service</h2>
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceImage}>
                <img
                  src="/src/assets/images/create-campaign.jpg"
                  alt="Create an affiliate campaign"
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>Create an affiliate campaign</h3>
                <p>
                  Adjust affiliate campaigns to align with your goals and brand
                  objectives.
                </p>
              </div>
            </div>
            <div className={`${styles.serviceItem} ${styles.reverse}`}>
              <div className={styles.serviceContent}>
                <h3>Affiliate recruitment</h3>
                <p>
                  Identify and collaborate with affiliate units that have an
                  audience that matches your brand.
                </p>
              </div>
              <div className={styles.serviceImage}>
                <img
                  src="/src/assets/images/affiliate-recruitment.jpg"
                  alt="Affiliate recruitment"
                />
              </div>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceImage}>
                <img
                  src="/src/assets/images/monitor-performance.jpg"
                  alt="Monitor performance"
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>Monitor performance</h3>
                <p>
                  Use advanced analytics to measure link performance and
                  campaign effectiveness.
                </p>
              </div>
            </div>
            <div className={`${styles.serviceItem} ${styles.reverse}`}>
              <div className={styles.serviceContent}>
                <h3>Commission management</h3>
                <p>
                  The commission structure is arranged logically to reward the
                  branches for achieving significant results.
                </p>
              </div>
              <div className={styles.serviceImage}>
                <img
                  src="/src/assets/images/commission-management.jpg"
                  alt="Commission management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesSection}>
        <div className={styles.caseStudiesContainer}>
          <h2>Strategies and In-Depth Insights from NOVA</h2>
          <div className={styles.blogGrid}>
            <article className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src="/src/assets/images/blog-brands.jpg" alt="Blog post" />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogCategory}>Brands</span>
                <h3>5 Powerful Brand-Building Strategies in the Digital Age</h3>
                <p>
                  In today's digital landscape, building a strong brand goes far
                  beyond just having a good logo or catchy slogan ....
                </p>
                <button className={styles.readMoreBtn}>
                  Read more
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </article>
            <article className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src="/src/assets/images/blog-brands.jpg" alt="Blog post" />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogCategory}>Affiliate Marketing</span>
                <h3>Affiliate Marketing 101: The Complete Beginner's Guide</h3>
                <p>
                  In today's digital landscape, building a strong brand goes far
                  beyond just having a good logo or catchy slogan ....
                </p>
                <button className={styles.readMoreBtn}>
                  Read more
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </article>
            <article className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src="/src/assets/images/blog-brands.jpg" alt="Blog post" />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogCategory}>
                  Influencer Marketing
                </span>
                <h3>Influencer Marketing in 2025: Trends, Tools & Tactics</h3>
                <p>
                  In today's digital landscape, building a strong brand goes far
                  beyond just having a good logo or catchy slogan ....
                </p>
                <button className={styles.readMoreBtn}>
                  Read more
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2>See How We Can Help You</h2>
            <p>
              Complete the contact form below and start your journey toward
              strategic partnership and unprecedented growth!
            </p>
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Please enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@..."
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(+84) xxx xxxx xxx"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="userType">You are *</label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">You are a KOL or KOC</option>
                  <option value="kol">Key Opinion Leader (KOL)</option>
                  <option value="koc">Key Opinion Consumer (KOC)</option>
                  <option value="creator">Content Creator</option>
                  <option value="influencer">Influencer</option>
                </select>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="brand">Your Brand *</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  placeholder="Please enter your brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="website">Your Website or Online Store</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="Website's URL"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="details">Describe your needs in details *</label>
              <textarea
                id="details"
                name="details"
                placeholder="Please enter your enquiries"
                value={formData.details}
                onChange={handleInputChange}
                required
                rows="8"
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreatorOverviewPage;
