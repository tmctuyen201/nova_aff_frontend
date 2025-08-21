import React, { useState } from "react";
import styles from "../../styles/pages/user-generated-content.module.css";

// Icons for features
const AuthenticContentIcon = () => (
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

const EngagementIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12H18L15 21L9 3L6 12H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CostEffectiveIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="12"
      y1="1"
      x2="12"
      y2="23"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 5H9.5A3.5 3.5 0 0 0 6 8.5V8.5A3.5 3.5 0 0 0 9.5 12H14.5A3.5 3.5 0 0 1 18 15.5V15.5A3.5 3.5 0 0 1 14.5 19H6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SocialProofIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 21V19A4 4 0 0 0 13 15H5A4 4 0 0 0 1 19V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M23 21V19A4 4 0 0 0 16 16.13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 3.13A4 4 0 0 1 16 9.87"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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

const UserGeneratedContentPage = () => {
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
      icon: <AuthenticContentIcon />,
      title: "Authentic Content",
      description:
        "Harness real customer experiences and genuine brand stories to create authentic content that resonates with your audience.",
      image: "/authentic-content-ugc.jpg",
    },
    {
      icon: <EngagementIcon />,
      title: "Increased Engagement",
      description:
        "User-generated content drives 6.9x higher engagement than brand-created content, boosting your social media performance.",
      image: "/increased-engagement-ugc.jpg",
    },
    {
      icon: <CostEffectiveIcon />,
      title: "Cost-Effective Marketing",
      description:
        "Reduce content creation costs by 50% while maintaining high-quality, diverse content across all your marketing channels.",
      image: "/cost-effective-ugc.jpg",
    },
    {
      icon: <SocialProofIcon />,
      title: "Social Proof & Trust",
      description:
        "Build customer trust and credibility through real user testimonials, reviews, and authentic brand experiences.",
      image: "/social-proof-ugc.jpg",
    },
  ];

  const services = [
    {
      title: "UGC Content Creation",
      description:
        "Develop comprehensive UGC campaigns that encourage customers to create and share authentic content featuring your products or services.",
      image: "/content-creation-ugc.jpg",
    },
    {
      title: "Community Building",
      description:
        "Build engaged brand communities where customers become content creators and brand advocates, fostering long-term loyalty and organic growth.",
      image: "/community-building-ugc.jpg",
    },
    {
      title: "Content Moderation",
      description:
        "Implement smart content moderation systems to ensure brand-safe UGC while maintaining authenticity and encouraging positive engagement.",
      image: "/content-moderation-ugc.jpg",
    },
    {
      title: "Performance Tracking",
      description:
        "Monitor UGC performance with detailed analytics tracking engagement, reach, conversions, and ROI across all platforms and campaigns.",
      image: "/performance-tracking-ugc.jpg",
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
      category: "User-Generated Content",
      title: "How UGC Campaigns Drive 300% Higher Engagement Rates",
      description:
        "Discover proven strategies to leverage user-generated content for maximum brand engagement....",
      image: "/blog-brands.jpg",
    },
    {
      category: "Content Strategy",
      title: "Building Brand Communities Through User-Generated Content",
      description:
        "Learn how to create thriving brand communities where customers become your most powerful....",
      image: "/blog-brands.jpg",
    },
  ];

  return (
    <div className={styles.userGeneratedContentPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Amplify Your Brand with NOVA AFF's User-Generated Content
              Solutions
            </h1>
            <p className={styles.heroDescription}>
              Transform your customers into powerful brand advocates with NOVA
              AFF's comprehensive UGC platform. Create authentic connections,
              drive engagement, and build trust through real customer stories
              and experiences.
            </p>
            <p className={styles.heroDescription}>
              From campaign strategy to content moderation, our UGC solutions
              help you harness the authentic voice of your community to
              accelerate brand growth and drive meaningful conversions.
            </p>
            <button className={styles.heroCtaButton}>
              Launch UGC Campaign
              <ArrowRightIcon />
            </button>
          </div>
          <div className={styles.heroImage}>
            <img src="/ugc-hero.jpg" alt="User-Generated Content Hero" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Why User-Generated Content Works
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
            NOVA's user-generated content service
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
            <h2 className={styles.contactTitle}>Ready for UGC Success?</h2>
            <p className={styles.contactDescription}>
              Start your user-generated content journey today. Tell us about
              your brand and we'll create a customized UGC strategy that drives
              results!
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
                      <option value="">Marketing Manager/Brand Owner</option>
                      <option value="marketing">Marketing Manager</option>
                      <option value="brand">Brand Owner</option>
                      <option value="community">Community Manager</option>
                      <option value="content">Content Manager</option>
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
                  UGC campaign goals & requirements *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your UGC campaign goals, target audience, content types, platforms, budget, and any specific requirements"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                START UGC CAMPAIGN
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserGeneratedContentPage;
