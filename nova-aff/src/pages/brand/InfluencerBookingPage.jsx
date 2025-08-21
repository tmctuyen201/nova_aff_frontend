import React, { useState } from "react";
import styles from "../../styles/pages/influencer-booking.module.css";

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

const InfluencerBookingPage = () => {
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
      title: "Direct Access",
      description:
        "Connect directly with top-tier influencers across multiple platforms and niches to expand your brand's reach.",
      image: "/expanded-reach-booking.jpg",
    },
    {
      icon: <PerformanceIcon />,
      title: "Verified Influencers",
      description:
        "Work with pre-vetted influencers whose engagement rates and audience authenticity have been verified by our team.",
      image: "/performance-focused-booking.jpg",
    },
    {
      icon: <CostEfficiencyIcon />,
      title: "Transparent Pricing",
      description:
        "Clear, upfront pricing with no hidden fees. Book influencers within your budget with flexible payment options.",
      image: "/cost-efficiency-booking.jpg",
    },
    {
      icon: <CredibilityIcon />,
      title: "Quality Assurance",
      description:
        "Guaranteed content quality with revision options and professional delivery standards for every booking.",
      image: "/enhanced-credibility-booking.jpg",
    },
  ];

  const services = [
    {
      title: "Influencer Discovery",
      description:
        "Find the perfect influencers for your brand using our advanced search filters by niche, audience demographics, engagement rates, and location.",
      image: "/influencer-discovery-booking.jpg",
    },
    {
      title: "Campaign Management",
      description:
        "Streamline your influencer campaigns with our all-in-one platform for booking, communication, content approval, and payment processing.",
      image: "/campaign-management-booking.jpg",
    },
    {
      title: "Content Creation",
      description:
        "Collaborate with influencers to create authentic content that resonates with your target audience and drives meaningful engagement.",
      image: "/content-creation-booking.jpg",
    },
    {
      title: "Performance Analytics",
      description:
        "Track campaign performance with detailed analytics including reach, engagement, conversions, and ROI measurement across all bookings.",
      image: "/performance-analytics-booking.jpg",
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
      category: "Influencer Booking",
      title: "How to Book the Right Influencers for Your Brand Campaign",
      description:
        "Learn the essential steps to identify, evaluate, and book influencers who will deliver authentic results....",
      image: "/blog-brands.jpg",
    },
    {
      category: "Campaign Success",
      title: "Maximizing ROI from Influencer Booking Campaigns",
      description:
        "Discover proven strategies to optimize your influencer booking campaigns and achieve maximum return....",
      image: "/blog-brands.jpg",
    },
  ];

  return (
    <div className={styles.influencerBookingPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Book Top Influencers with NOVA AFF's Influencer Booking Platform
            </h1>
            <p className={styles.heroDescription}>
              Streamline your influencer marketing with NOVA AFF's comprehensive
              booking platform. Connect with verified influencers, manage
              campaigns seamlessly, and achieve guaranteed results for your
              brand.
            </p>
            <p className={styles.heroDescription}>
              From discovery to delivery, our platform simplifies the entire
              influencer booking process, ensuring you work with the right
              creators to amplify your brand message and drive meaningful
              engagement.
            </p>
            <button className={styles.heroCtaButton}>
              Start Booking Influencers
              <ArrowRightIcon />
            </button>
          </div>
          <div className={styles.heroImage}>
            <img src="/booking-hero.jpg" alt="Influencer Booking Hero" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Why Choose Our Booking Platform
          </h2>
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
            NOVA's influencer booking service
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
            <h2 className={styles.contactTitle}>Ready to Start Booking?</h2>
            <p className={styles.contactDescription}>
              Get started with influencer booking today. Fill out the form and
              our team will help you find the perfect influencers for your next
              campaign!
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
                      <option value="">Brand/Marketing Manager</option>
                      <option value="brand">Brand Representative</option>
                      <option value="marketing">Marketing Manager</option>
                      <option value="agency">Agency Representative</option>
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
                  Campaign details & influencer requirements *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your campaign goals, target audience, preferred influencer types, budget range, and timeline"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                START BOOKING PROCESS
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfluencerBookingPage;
