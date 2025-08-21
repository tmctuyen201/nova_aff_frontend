import React from "react";
import styles from "../../styles/pages/publisher-creator-tools.module.css";

const PublisherCreatorToolsPage = () => {
  return (
    <div className={styles.publisherCreatorToolsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>Integrated Tools for Publishers</h1>
            <p>
              Enhance your affiliate marketing performance with our leading
              suite of tools designed specifically for publishers.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className={styles.toolsSection}>
        <div className={styles.toolsContainer}>
          <div className={styles.toolsGrid}>
            {/* Custom Domain Management */}
            <div className={styles.toolCard}>
              <div className={styles.toolImage}>
                <img
                  src="/src/assets/images/custom-domain.jpg"
                  alt="Custom Domain Management"
                />
              </div>
              <div className={styles.toolContent}>
                <h3>Custom Domain Management</h3>
                <p>
                  By using our Domain Mapping tool, publishers can easily assign
                  their own domains to our servers, replacing standard affiliate
                  links with short links under your own domain—allowing for more
                  effective branding and link management.
                </p>
                <button className={styles.seeMoreBtn}>
                  See more
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
            </div>

            {/* Link Replacement */}
            <div className={`${styles.toolCard} ${styles.reverse}`}>
              <div className={styles.toolContent}>
                <h3>Link Replacement</h3>
                <p>
                  Control your affiliate links and optimize them for maximum
                  impact. Our link replacement tool allows you to create
                  affiliate links with tracking elements, ensuring an optimized
                  monetization strategy and maximizing the revenue potential of
                  your links.
                </p>
                <button className={styles.seeMoreBtn}>
                  See more
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
              <div className={styles.toolImage}>
                <img
                  src="/src/assets/images/link-replacement.jpg"
                  alt="Link Replacement"
                />
              </div>
            </div>

            {/* API Management */}
            <div className={styles.toolCard}>
              <div className={styles.toolImage}>
                <img
                  src="/src/assets/images/api-management.jpg"
                  alt="API Management"
                />
              </div>
              <div className={styles.toolContent}>
                <h3>API Management</h3>
                <p>
                  Simplify your workflow and enhance efficiency with our
                  powerful API management solution. It ensures seamless
                  communication between your systems and the network, allowing
                  for smooth data exchange and automation to enhance
                  effectiveness.
                </p>
                <button className={styles.seeMoreBtn}>
                  See more
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
            </div>

            {/* Retargeting URL */}
            <div className={`${styles.toolCard} ${styles.reverse}`}>
              <div className={styles.toolContent}>
                <h3>Retargeting URL</h3>
                <p>
                  Gain deep insights into the performance of your affiliate
                  marketing with our Retargeting URL feature. Track conversions
                  accurately and allocate them properly to the right campaigns,
                  enabling better decision-making and optimization based on data
                  for improved results.
                </p>
                <button className={styles.seeMoreBtn}>
                  See more
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
              <div className={styles.toolImage}>
                <img
                  src="/src/assets/images/retargeting-url.jpg"
                  alt="Retargeting URL"
                />
              </div>
            </div>

            {/* Report Management */}
            <div className={styles.toolCard}>
              <div className={styles.toolImage}>
                <img
                  src="/src/assets/images/report-management.jpg"
                  alt="Report Management"
                />
              </div>
              <div className={styles.toolContent}>
                <h3>Report Management</h3>
                <p>
                  Stay updated on your affiliate marketing efforts with our
                  comprehensive report management tools. Access detailed
                  performance data, analyze trends, and make informed decisions
                  to optimize your strategy and drive growth.
                </p>
                <button className={styles.seeMoreBtn}>
                  See more
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
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2>Unlock Your Earning Potential by Partnering with NOVA AFF</h2>
            <p>
              Discover the best opportunities to optimize and grow your revenue
              by becoming an Ecomobi partner.
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
        </div>
      </section>
    </div>
  );
};

export default PublisherCreatorToolsPage;
