import React, { useState } from "react";
import styles from "../../styles/pages/explore-campaigns.module.css";
import brandHero from "../../assets/images/creator-overview-hero.jpg";

const ExploreCampaignsPage = () => {
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
    console.log("Explore campaigns form submitted:", formData);
  };

  const campaigns = [
    {
      id: 1,
      title: "Fashion & Lifestyle",
      description: "Promote the latest fashion trends and lifestyle products",
      image: "/affiliate-recruitment.jpg",
      category: "Fashion",
      commission: "15%",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Tech & Gadgets",
      description: "Showcase cutting-edge technology and innovative gadgets",
      image: "/create-campaign.jpg",
      category: "Technology",
      commission: "20%",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Health & Wellness",
      description: "Promote health products and wellness solutions",
      image: "/cost-efficiency.jpg",
      category: "Health",
      commission: "18%",
      difficulty: "Easy",
    },
    {
      id: 4,
      title: "Home & Garden",
      description: "Share home improvement and gardening products",
      image: "/enhanced-credibility.jpg",
      category: "Home",
      commission: "12%",
      difficulty: "Easy",
    },
    {
      id: 5,
      title: "Beauty & Cosmetics",
      description: "Promote beauty products and cosmetic solutions",
      image: "/expanded-reach.jpg",
      category: "Beauty",
      commission: "25%",
      difficulty: "Medium",
    },
    {
      id: 6,
      title: "Sports & Fitness",
      description: "Showcase sports equipment and fitness products",
      image: "/performance-focused.jpg",
      category: "Sports",
      commission: "16%",
      difficulty: "Medium",
    },
  ];

  return (
    <div className={styles.exploreCampaignsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Explore Available Campaigns</h1>
            <p>
              Discover exciting affiliate campaigns that match your niche and
              audience. Choose from a variety of categories and start earning
              commissions today.
            </p>
            <button className={styles.ctaButton}>
              Browse Campaigns
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
            <img src={brandHero} alt="Explore Campaigns Hero" />
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className={styles.campaignsSection}>
        <div className={styles.campaignsContainer}>
          <h2>Available Campaigns</h2>
          <div className={styles.campaignsGrid}>
            {campaigns.map((campaign) => (
              <div key={campaign.id} className={styles.campaignCard}>
                <div className={styles.campaignImage}>
                  <img src={campaign.image} alt={campaign.title} />
                  <div className={styles.campaignCategory}>
                    {campaign.category}
                  </div>
                </div>
                <div className={styles.campaignContent}>
                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>
                  <div className={styles.campaignMeta}>
                    <span className={styles.commission}>
                      Commission: {campaign.commission}
                    </span>
                    <span className={styles.difficulty}>
                      Difficulty: {campaign.difficulty}
                    </span>
                  </div>
                  <button className={styles.applyButton}>
                    Apply Now
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 4L16 10L10 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
          <div className={styles.contactInfo}>
            <h2>Ready to Start Earning?</h2>
            <p>
              Join our platform and start promoting campaigns. Fill out the form
              below to get started!
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

export default ExploreCampaignsPage;
