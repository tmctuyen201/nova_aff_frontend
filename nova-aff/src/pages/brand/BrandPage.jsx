import ServiceSection from "../../components/sections/ServiceSection";
import BrandFeatureCard from "../../components/ui/BrandFeatureCard";
import BrandBlogCard from "../../components/ui/BrandBlogCard";
import BrandContactForm from "../../components/forms/BrandContactForm";
import styles from "../../styles/pages/brand.module.css";

const BrandPage = () => {
  const brandFeatures = [
    {
      title: "Campaign Management",
      description:
        "Streamline your affiliate campaigns with our intuitive dashboard",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/brand-feature1?width=300",
    },
    {
      title: "Creator Discovery",
      description:
        "Find the perfect creators for your brand with advanced filtering",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/brand-feature2?width=300",
    },
    {
      title: "Performance Analytics",
      description: "Track ROI and campaign performance in real-time",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/brand-feature3?width=300",
    },
  ];

  const brandBlogPosts = [
    {
      title: "Maximizing ROI with Affiliate Marketing",
      excerpt:
        "Strategies to get the most out of your affiliate marketing budget",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/brand-blog1?width=300",
      readTime: "8 min read",
    },
    {
      title: "Building Brand Awareness Through Influencers",
      excerpt: "How to leverage influencer partnerships for brand growth",
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/brand-blog2?width=300",
      readTime: "6 min read",
    },
  ];

  return (
    <div className={styles.brandPage}>
      {/* Hero Section */}
      <section className={styles.brandHero}>
        <div className={styles.brandHeroContainer}>
          <div className={styles.brandHeroContent}>
            <h1 className={styles.brandHeroTitle}>
              Grow Your Brand with Creator Partnerships
            </h1>
            <p className={styles.brandHeroSubtitle}>
              Connect with top creators and influencers to amplify your brand
              message and drive sales through authentic partnerships.
            </p>
            <div className={styles.brandHeroActions}>
              <button className={styles.brandCtaPrimary}>Start Campaign</button>
              <button className={styles.brandCtaSecondary}>Learn More</button>
            </div>
          </div>
          <div className={styles.brandHeroImage}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/brand-hero?width=600"
              alt="Brand Marketing Platform"
              className={styles.brandHeroImg}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection />

      {/* Features Section */}
      <section className={styles.brandFeatures}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Why Choose Nova AFF for Your Brand
          </h2>
          <div className={styles.brandFeaturesGrid}>
            {brandFeatures.map((feature, index) => (
              <BrandFeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                imageSrc={feature.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className={styles.brandBlog}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Brand Marketing Insights</h2>
          <div className={styles.brandBlogGrid}>
            {brandBlogPosts.map((post, index) => (
              <BrandBlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                imageSrc={post.imageSrc}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.brandContact}>
        <div className={styles.sectionContainer}>
          <div className={styles.brandContactContent}>
            <div className={styles.brandContactInfo}>
              <h2 className={styles.brandContactTitle}>
                Ready to Get Started?
              </h2>
              <p className={styles.brandContactSubtitle}>
                Join thousands of brands already growing with Nova AFF. Let's
                discuss how we can help your brand succeed.
              </p>
            </div>
            <div className={styles.brandContactForm}>
              <BrandContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;
