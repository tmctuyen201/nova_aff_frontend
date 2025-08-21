import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/affiliate-marketing.module.css";

const AffiliateMarketingPage = () => {
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
    console.log("Affiliate marketing form submitted:", formData);
    // Add form submission logic here
  };

  const features = [
    {
      id: 1,
      image: "/expanded-reach.jpg",
      title: "Expanded Reach",
      description:
        "Leverage diverse audience segments through affiliate networks to expand your brand's visibility and reach.",
    },
    {
      id: 2,
      image: "/performance-focused.jpg",
      title: "Performance Focused",
      description:
        "Pay for results – our affiliate marketing model ensures your investment drives real conversions and successful outcomes.",
    },
    {
      id: 3,
      image: "/cost-efficiency.jpg",
      title: "Cost Efficiency",
      description:
        "Maximize your marketing budget by targeting performance-based channels to ensure high return on investment.",
    },
    {
      id: 4,
      image: "/enhanced-credibility.jpg",
      title: "Enhanced Credibility",
      description:
        "Build trust and credibility by associating your brand with reputable affiliates, boosting consumer recognition and loyalty.",
    },
  ];

  const services = [
    {
      id: 1,
      image: "/create-campaign.jpg",
      title: "Create an affiliate campaign",
      description:
        "Adjust affiliate campaigns to align with your goals and brand objectives.",
    },
    {
      id: 2,
      image: "/monitor-performance.jpg",
      title: "Monitor performance",
      description:
        "Use advanced analytics to measure link performance and campaign effectiveness.",
    },
    {
      id: 3,
      image: "/affiliate-recruitment.jpg",
      title: "Affiliate recruitment",
      description:
        "Identify and collaborate with affiliate units that have an audience that matches your brand.",
    },
    {
      id: 4,
      image: "/commission-management.jpg",
      title: "Commission management",
      description:
        "The commission structure is arranged logically to reward the branches for achieving significant results.",
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
    <div className={styles.affiliateMarketingPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Unlock Growth with NovaAFF's Affiliate Marketing Solutions
            </h1>
            <p className={styles.heroDescription}>
              Empower your brand with NovaAFF – where strategic partnerships
              meet cutting-edge affiliate marketing solutions. Our platform
              connects you with a network of dynamic creators and influencers,
              opening the door to scalable growth, increased engagement, and
              unmatched market reach.
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
            <img src="/affiliate-hero.jpg" alt="Affiliate Marketing" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <h2 className={styles.featuresTitle}>Unlock Brand Potential</h2>
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

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <h2 className={styles.servicesTitle}>
            NOVA's affiliate marketing service
          </h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`${styles.serviceItem} ${
                  index % 2 === 1 ? styles.reverse : ""
                }`}
              >
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesSection}>
        <div className={styles.caseStudiesContainer}>
          <h2 className={styles.caseStudiesTitle}>
            Strategies and In-Depth Insights from NOVA
          </h2>
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

export default AffiliateMarketingPage;
