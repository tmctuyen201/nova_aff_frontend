import React, { useState } from "react";
import styles from "../../styles/pages/publisher-overview.module.css";

const PublisherOverviewPage = () => {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.publisherOverviewPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Publisher Solutions for Maximum Revenue</h1>
            <p>
              Maximize your website's earning potential with our comprehensive
              publisher solutions. Access premium advertisers, advanced
              tracking, and competitive commission rates.
            </p>
            <button className={styles.ctaButton}>
              Start Earning
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
              src="/src/assets/images/publisher-hero.jpg"
              alt="Publisher Overview Hero"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <h2>Why Choose NovaAFF for Publishers?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 4L29.2533 16.7467L42 22L29.2533 27.2533L24 40L18.7467 27.2533L6 22L18.7467 16.7467L24 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>High Commission Rates</h3>
              <p>
                Earn competitive commission rates up to 30% on qualified sales
                and leads. Our tiered commission structure rewards top
                performers.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M8 12H40M8 24H40M8 36H40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Advanced Analytics</h3>
              <p>
                Track your performance with detailed analytics and real-time
                reporting. Monitor clicks, conversions, and earnings in one
                dashboard.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M24 12V24L32 28"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Quick Payments</h3>
              <p>
                Get paid on time with our reliable payment system. Receive
                payments monthly with a minimum threshold of $50.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 4L29.2533 16.7467L42 22L29.2533 27.2533L24 40L18.7467 27.2533L6 22L18.7467 16.7467L24 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Premium Advertisers</h3>
              <p>
                Partner with top-tier brands and advertisers across various
                industries. Access exclusive campaigns and high-value offers.
              </p>
            </div>
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

export default PublisherOverviewPage;
