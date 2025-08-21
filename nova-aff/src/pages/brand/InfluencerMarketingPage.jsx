import React, { useState } from "react";
import styles from "../../styles/pages/influencer-marketing.module.css";

// Icons for features
const ExpandedReachIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PerformanceIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3V21H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 12L12 7L16 11L21 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CostEfficiencyIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 6V12L16 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CredibilityIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5L19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DropdownIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfluencerMarketingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    brand: "",
    website: "",
    description: "",
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
    // Handle form submission here
  };

  const features = [
    {
      icon: <ExpandedReachIcon />,
      title: "Expanded Reach",
      description:
        "Leverage diverse audience segments through affiliate networks to expand your brand's visibility and reach.",
      image: "/expanded-reach-influencer.jpg",
    },
    {
      icon: <PerformanceIcon />,
      title: "Performance Focused",
      description:
        "Pay for results – our affiliate marketing model ensures your investment drives real conversions and successful outcomes.",
      image: "/performance-focused-influencer.jpg",
    },
    {
      icon: <CostEfficiencyIcon />,
      title: "Cost Efficiency",
      description:
        "Maximize your marketing budget by targeting performance-based channels to ensure high return on investment.",
      image: "/cost-efficiency-influencer.jpg",
    },
    {
      icon: <CredibilityIcon />,
      title: "Enhanced Credibility",
      description:
        "Build trust and credibility by associating your brand with reputable affiliates, boosting consumer recognition and loyalty.",
      image: "/enhanced-credibility-influencer.jpg",
    },
  ];

  const services = [
    {
      title: "Create an affiliate campaign",
      description:
        "Adjust affiliate campaigns to align with your goals and brand objectives.",
      image: "/create-campaign-influencer.jpg",
    },
    {
      title: "Affiliate recruitment",
      description:
        "Identify and collaborate with affiliate units that have an audience that matches your brand.",
      image: "/affiliate-recruitment-influencer.jpg",
    },
    {
      title: "Monitor performance",
      description:
        "Use advanced analytics to measure link performance and campaign effectiveness.",
      image: "/monitor-performance-influencer.jpg",
    },
    {
      title: "Commission management",
      description:
        "The commission structure is arranged logically to reward the branches for achieving significant results.",
      image: "/commission-management-influencer.jpg",
    },
  ];

  const caseStudies = [
    {
      category: "Brands",
      title: "5 Powerful Brand-Building Strategies in the Digital Age",
      description:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "/blog-brands.jpg",
    },
    {
      category: "Affiliate Marketing",
      title: "Affiliate Marketing 101: The Complete Beginner's Guide",
      description:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "/blog-brands.jpg",
    },
    {
      category: "Influencer Marketing",
      title: "Influencer Marketing in 2025: Trends, Tools & Tactics",
      description:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "/blog-brands.jpg",
    },
  ];

  return (
    <div className={styles.influencerMarketingPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Boost Your Brand Influence with NOVA AFF's Influencer Marketing
              Services
            </h1>
            <p className={styles.heroDescription}>
              Leverage the power of influencers to expand your brand's reach and
              visibility with NOVA AFF. Our Influencer Marketing service helps
              you build credibility, enhance your brand image, and create
              meaningful connections with your target audience.
            </p>
            <p className={styles.heroDescription}>
              By collaborating with trusted voices in your industry, NOVA AFF
              enables your brand to generate greater impact, drive engagement,
              and boost conversions effectively.
            </p>
            <button className={styles.heroCtaButton}>
              Talk to Our Team
              <ArrowRightIcon />
            </button>
          </div>
          <div className={styles.heroImage}>
            <img src="/influencer-hero.jpg" alt="Influencer Marketing Hero" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Unlock Brand Potential</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className={styles.featureContent}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            NOVA's influencer marketing service
          </h2>
          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <div
                key={index}
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
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Strategies and In-Depth Insights from NOVA
          </h2>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study, index) => (
              <div key={index} className={styles.caseStudyCard}>
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
                    Read more
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactContent}>
            <h2 className={styles.contactTitle}>See How We Can Help You</h2>
            <p className={styles.contactDescription}>
              Complete the contact form below and start your journey toward
              strategic partnership and unprecedented growth!
            </p>
          </div>
          <div className={styles.contactFormWrapper}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Please enter your name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="youremail@..."
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(+84) xxx xxxx xxx"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="userType">You are *</label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">You are a KOL or KOC</option>
                      <option value="kol">KOL (Key Opinion Leader)</option>
                      <option value="koc">KOC (Key Opinion Consumer)</option>
                      <option value="brand">Brand Representative</option>
                      <option value="other">Other</option>
                    </select>
                    <DropdownIcon />
                  </div>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="brand">Your Brand *</label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    placeholder="Please enter your brand"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="website">Your Website or Online Store</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Website's URL"
                  />
                </div>
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="description">
                  Describe your needs in details *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please enter your enquiries"
                  rows="6"
                  required
                ></textarea>
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

export default InfluencerMarketingPage;
