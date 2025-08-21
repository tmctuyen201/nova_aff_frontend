import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/brand-overview.module.css";

const BrandOverviewPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    brand: "",
    website: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Brand overview form submitted:", formData);
    // Add form submission logic here
  };

  const features = [
    {
      id: 1,
      image: "/optimized-revenue.jpg",
      title: "Optimized Revenue Streams",
      description:
        "Unlock multiple revenue sources with our all-in-one solutions. From affiliate marketing to influencer partnerships, we ensure your brand earns from every channel.",
    },
    {
      id: 2,
      image: "/enhanced-visibility.jpg",
      title: "Enhanced Brand Visibility",
      description:
        "Boost your brand presence with our strategic marketing methods. We connect you with the right audience to expand reach and drive deeper engagement.",
    },
    {
      id: 3,
      image: "/data-insights.jpg",
      title: "Data-Driven Insights",
      description:
        "Make smarter decisions with our advanced analytics. We deliver meaningful, actionable insights to help you optimize campaigns and leverage every data opportunity.",
    },
    {
      id: 4,
      image: "/tailored-strategies.jpg",
      title: "Tailored Marketing Strategies",
      description:
        "Our personalized marketing strategies are designed to meet your unique brand goals. We offer customized solutions that are tailored for your target audience.",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      category: "Brands",
      title: "5 Powerful Brand-Building Strategies in the Digital Age",
      description:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan ....",
      image: "/blog-brands.jpg",
    },
    {
      id: 2,
      category: "Affiliate Marketing",
      title: "Affiliate Marketing 101: The Complete Beginner's Guide",
      description:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan ....",
      image: "/blog-brands.jpg",
    },
    {
      id: 3,
      category: "Influencer Marketing",
      title: "Influencer Marketing in 2025: Trends, Tools & Tactics",
      description:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan ....",
      image: "/blog-brands.jpg",
    },
  ];

  return (
    <div className={styles.brandOverviewPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Let Nova AFF Guide Your Brand to Success
            </h1>
            <p className={styles.heroDescription}>
              We empower brands and advertisers to develop smart growth
              strategies in the digital era. With our optimized technology
              platform, Nova AFF helps you reach the right audience at the right
              time — maximizing the impact of every campaign.
              <br />
              <br />
              Our automation tools, performance analytics, and diverse partner
              network are the keys to unlocking your brand's full potential and
              delivering long-term, sustainable results.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              <span>Talk to Our Team</span>
              <div className={styles.buttonIcon}>
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
                  <path
                    d="M1 1L10 9.5L1 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className={styles.heroImage}>
            <img src="/brand-overview-hero.jpg" alt="Brand Overview" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <h2 className={styles.featuresTitle}>
            Maximize Your Brand's Full Potential
          </h2>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img src={feature.image} alt={feature.title} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesSection}>
        <div className={styles.caseStudiesContainer}>
          <h2 className={styles.caseStudiesTitle}>Case study</h2>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study) => (
              <div key={study.id} className={styles.caseStudyCard}>
                <div className={styles.caseStudyImage}>
                  <img src={study.image} alt={study.title} />
                </div>
                <div className={styles.caseStudyContent}>
                  <span className={styles.caseStudyCategory}>
                    {study.category}
                  </span>
                  <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                  <p className={styles.caseStudyDescription}>
                    {study.description}
                  </p>
                  <button className={styles.readMoreButton}>
                    <span>Read more</span>
                    <div className={styles.buttonIcon}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 10H16M10 4L16 10L10 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.contactFormContainer}>
          <div className={styles.contactFormContent}>
            <h2 className={styles.contactFormTitle}>See How We Can Help You</h2>
            <p className={styles.contactFormSubtitle}>
              Complete the contact form below and start your journey toward
              strategic partnership and unprecedented growth!
            </p>
          </div>
          <div className={styles.contactFormWrapper}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Your name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Please enter your name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="youremail@..."
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Phone number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(+84) xxx xxxx xxx"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>You are *</label>
                  <div className={styles.selectWrapper}>
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">You are a KOL or KOC</option>
                      <option value="brand">Brand Representative</option>
                      <option value="advertiser">Advertiser</option>
                      <option value="agency">Marketing Agency</option>
                      <option value="startup">Startup</option>
                    </select>
                    <div className={styles.selectArrow}>
                      <svg width="14" height="6" viewBox="0 0 14 6" fill="none">
                        <path
                          d="M1 1L7 5L13 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Your Brand *</label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="Please enter your brand"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Your Website or Online Store</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website's URL"
                  />
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label>Describe your needs in details *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please enter your enquiries"
                  rows="8"
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandOverviewPage;
