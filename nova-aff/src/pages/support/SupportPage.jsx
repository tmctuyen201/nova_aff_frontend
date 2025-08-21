import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/pages/support.module.css";
import brandHero from "../../assets/images/contact-image.jpg";

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Add search functionality here
  };

  return (
    <div className={styles.supportPage}>
      {/* Search Section */}
      <section className={styles.supportSearchSection}>
        <div className={styles.supportSearchContainer}>
          <h1 className={styles.supportTitle}>How can we help you?</h1>
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.searchInputContainer}>
              <div className={styles.searchIcon}>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                  <path
                    d="M12.5 22C17.7467 22 22 17.7467 22 12.5C22 7.25329 17.7467 3 12.5 3C7.25329 3 3 7.25329 3 12.5C3 17.7467 7.25329 22 12.5 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Enter your search here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className={styles.supportCategoriesSection}>
        <div className={styles.supportCategoriesContainer}>
          <div className={styles.categoryCards}>
            <div className={styles.categoryCard}>
              <img
                src={brandHero}
                alt="Brand/Advertiser"
                className={styles.categoryAvatar}
              />
              <h3 className={styles.categoryTitle}>I am Brand/Advertiser</h3>
              <p className={styles.categoryDescription}>
                Learn how you can maximize your impact with tips, tools, and
                resources for successful campaigns.
              </p>
            </div>

            <div className={styles.categoryCard}>
              <img
                src={brandHero}
                alt="Creator/Publisher"
                className={styles.categoryAvatar}
              />
              <h3 className={styles.categoryTitle}>I am Creator/Publisher</h3>
              <p className={styles.categoryDescription}>
                Discover how to monetize your content and increase your revenue
                with essential guides and tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.supportContactSection}>
        <div className={styles.supportContactContainer}>
          <h2 className={styles.contactTitle}>
            Do you still have any questions?
          </h2>
          <p className={styles.contactSubtitle}>Let us support you!</p>
          <Link to="/contact" className={styles.contactButton}>
            Contact us now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
