import { useState } from "react";
import LoginModal from "../../components/ui/LoginModal";
import ArrowRight from "../../assets/icons/ArrowRight";
import styles from "../../styles/pages/homepage.module.css";

// Import downloaded images
import heroAvatar from "../../assets/images/hero-avatar.jpg";
import brandsImage from "../../assets/images/brands-image.jpg";
import creatorsImage from "../../assets/images/creators-image.jpg";
import affiliateMarketingImg from "../../assets/images/affiliate-marketing.jpg";
import influencerMarketingImg from "../../assets/images/influencer-marketing.jpg";
import blogBrandsImg from "../../assets/images/blog-brands.jpg";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // NOVA AFF Ecosystem services
  const ecosystemServices = [
    {
      title: "Affiliate marketing",
      features: [
        "Affiliate marketing for brands",
        "TikTok Shop affiliate marketing",
      ],
      imageSrc: affiliateMarketingImg,
    },
    {
      title: "Influencer Marketing",
      features: [
        "Influencer booking service",
        "User-generated content development",
      ],
      imageSrc: influencerMarketingImg,
    },
    {
      title: "Software solutions for brands",
      features: [
        "Affiliate marketing for brands",
        "TikTok Shop affiliate marketing",
      ],
      imageSrc: affiliateMarketingImg,
    },
    {
      title: "Livestream solutions",
      features: [
        "Affiliate marketing for brands",
        "TikTok Shop affiliate marketing",
      ],
      imageSrc: affiliateMarketingImg,
    },
    {
      title: "Affiliate marketing program",
      features: [
        "Affiliate marketing for brands",
        "TikTok Shop affiliate marketing",
      ],
      imageSrc: affiliateMarketingImg,
    },
    {
      title: "Idol Program",
      features: [
        "Affiliate marketing for brands",
        "TikTok Shop affiliate marketing",
      ],
      imageSrc: influencerMarketingImg,
    },
    {
      title: "Monetization Tools",
      features: [
        "Affiliate marketing for brands",
        "TikTok Shop affiliate marketing",
      ],
      imageSrc: affiliateMarketingImg,
    },
    {
      title: "Influencer & Content Creator",
      features: [
        "Affiliate marketing for brands",
        "TikTok Shop affiliate marketing",
      ],
      imageSrc: influencerMarketingImg,
    },
  ];

  // Blog posts
  const blogPosts = [
    {
      category: "Brands",
      title: "5 Powerful Brand-Building Strategies in the Digital Age",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan ....",
      imageSrc: blogBrandsImg,
    },
    {
      category: "Affiliate Marketing",
      title: "Affiliate Marketing 101: The Complete Beginner's Guide",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan ....",
      imageSrc: blogBrandsImg,
    },
    {
      category: "Influencer Marketing",
      title: "Influencer Marketing in 2025: Trends, Tools & Tactics",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan ....",
      imageSrc: blogBrandsImg,
    },
  ];

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Comprehensive Revenue Solutions for Brands
            </h1>
            <p className={styles.heroDescription}>
              We provide customized approaches for each audience to drive growth
              — from optimizing monetization strategies to increasing audience
              engagement.
            </p>
            <button className={styles.heroCta}>
              Talk to Our Team
              <ArrowRight className={styles.arrowIcon} />
            </button>
          </div>
          <div className={styles.heroImage}>
            <img
              src={heroAvatar}
              alt="NOVA AFF Solution"
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Leading the Way to Success Section */}
      <section className={styles.successSection}>
        <div className={styles.successContainer}>
          <div className={styles.successHeader}>
            <h2 className={styles.successTitle}>Leading the Way to Success</h2>
            <p className={styles.successSubtitle}>
              Learn how NOVA can help you unlock revenue growth potential for
              your business.
            </p>
          </div>

          <div className={styles.successCards}>
            {/* For Brands Card */}
            <div className={`${styles.successCard} ${styles.brandsCard}`}>
              <div className={styles.cardImage}>
                <img
                  src={brandsImage}
                  alt="For Brands"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>For Brands</h3>
                <p className={styles.cardDescription}>
                  Increase sales in your target market and optimize your
                  marketing efforts by connecting with our network. Build strong
                  partnerships to accelerate remarkable growth!
                </p>
                <button className={styles.cardCta}>
                  Talk to Our Team
                  <ArrowRight className={styles.arrowIcon} />
                </button>
              </div>
            </div>

            {/* For Creators/Publishers Card */}
            <div className={`${styles.successCard} ${styles.creatorsCard}`}>
              <div className={styles.cardImage}>
                <img
                  src={creatorsImage}
                  alt="For Creators/Publishers"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>For Creators/Publishers</h3>
                <p className={styles.cardDescription}>
                  Unlock limitless opportunities and earn generous commissions
                  through exclusive campaigns while connecting with top local
                  and global brands to turn your creativity into revenue.
                </p>
                <button className={`${styles.cardCta} ${styles.signupCta}`}>
                  Sign Up Now
                  <ArrowRight className={styles.arrowIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA AFF Ecosystem Section */}
      <section className={styles.ecosystemSection}>
        <div className={styles.ecosystemContainer}>
          <div className={styles.ecosystemHeader}>
            <h2 className={styles.ecosystemTitle}>NOVA AFF Ecosystem</h2>
            <p className={styles.ecosystemSubtitle}>
              Tailored solutions designed to unlock your potential and drive
              revenue growth.
            </p>
          </div>

          <div className={styles.ecosystemGrid}>
            {ecosystemServices.map((service, index) => (
              <div key={index} className={styles.ecosystemCard}>
                <div className={styles.ecosystemCardImage}>
                  <img src={service.imageSrc} alt={service.title} />
                </div>
                <div className={styles.ecosystemCardContent}>
                  <h3 className={styles.ecosystemCardTitle}>{service.title}</h3>
                  <div className={styles.ecosystemCardFeatures}>
                    {service.features.map((feature, idx) => (
                      <p key={idx} className={styles.ecosystemFeature}>
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>For Brands</h3>
            <p className={styles.infoDescription}>
              NOVA AFF helps brands maximize their potential with a
              comprehensive solution suite designed to drive revenue growth.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>For Content Creators</h3>
            <p className={styles.infoDescription}>
              NOVA AFF provides content creators with tailored programs and
              tools designed to maximize income growth and build personal
              brands. Our solutions are created to accompany you on your journey
              towards success.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className={styles.blogSection}>
        <div className={styles.blogContainer}>
          <h2 className={styles.blogTitle}>Become a Trendsetter with NOVA</h2>

          <div className={styles.blogGrid}>
            {blogPosts.map((post, index) => (
              <article key={index} className={styles.blogCard}>
                <div className={styles.blogCardImage}>
                  <img src={post.imageSrc} alt={post.title} />
                </div>
                <div className={styles.blogCardContent}>
                  <span className={styles.blogCategory}>{post.category}</span>
                  <h3 className={styles.blogCardTitle}>{post.title}</h3>
                  <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                  <button className={styles.blogReadMore}>
                    Read more
                    <ArrowRight className={styles.arrowIcon} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.blogActions}>
            <button className={styles.seeMoreBtn}>
              See more
              <ArrowRight className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {isModalOpen && <LoginModal onClose={handleModalClose} />}
    </div>
  );
};

export default HomePage;
