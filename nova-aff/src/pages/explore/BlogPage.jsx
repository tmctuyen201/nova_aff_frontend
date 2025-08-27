import { useState } from "react";
import ArrowRight from "../../assets/icons/ArrowRight";
import styles from "../../styles/pages/blog.module.css";
import blogImage from "../../assets/images/blog-post-1.jpg";

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const blogPosts = [
    {
      id: 1,
      category: "Brands",
      title: "5 Powerful Brand-Building Strategies in the Digital Age",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "5 Powerful brand building.png",
    },
    {
      id: 2,
      category: "Brands",
      title: "Brand Storytelling: How to Connect with Customers Emotionally",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "Brand storyteling.png",
    },
    {
      id: 3,
      category: "Brands",
      title: "Brand Awareness vs. Brand Loyalty — Where Should You Focus?",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "Braand awareness vs Brand loyalty.png",
    },
    {
      id: 4,
      category: "Affiliate Marketing",
      title: "Affiliate Marketing 101: The Complete Beginner's Guide",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "Affiliate Marketing 101.png",
    },
    {
      id: 5,
      category: "Affiliate Marketing",
      title: "How to Choose the Right Product for Higher Commissions",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "How to choose the right product.png",
    },
    {
      id: 6,
      category: "Affiliate Marketing",
      title: "Affiliate Is More Than Just Links: Content That Converts",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "Affiliate is more than just link.png",
    },
    {
      id: 7,
      category: "Influencer Marketing",
      title: "Influencer Marketing in 2025: Trends, Tools & Tactics",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "Infiencer marketing in 2025.png",
    },
    {
      id: 8,
      category: "Influencer Marketing",
      title: "Top 5 Mistakes Brands Make in Influencer Campaigns",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "Top 5 mistakes.png",
    },
    {
      id: 9,
      category: "Influencer Marketing",
      title:
        "From KOCs to KOLs: How to Choose the Right Influencer for Your Brand",
      excerpt:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan....",
      image: "From KOC to KOL.png",
    },
  ];

  const filters = [
    "All",
    "Brands",
    "Affiliate Marketing",
    "Influencer Marketing",
  ];

  const getFilteredPosts = () => {
    if (activeFilter === "All") {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category === activeFilter);
  };

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogContainer}>
        {/* Header */}
        <section className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>Latest Posts</h1>
        </section>

        {/* Filter Tabs */}
        <section className={styles.blogFilters}>
          <div className={styles.filterTabs}>
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`${styles.filterTab} ${
                  activeFilter === filter ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className={styles.blogPosts}>
          <div className={styles.postsGrid}>
            {getFilteredPosts().map((post) => (
              <article key={post.id} className={styles.blogPost}>
                <div className={styles.postImage}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postCategory}>{post.category}</div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <button className={styles.readMoreBtn}>
                    <span>Read more</span>
                    <ArrowRight className={styles.arrowIcon} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <section className={styles.blogPagination}>
          <div className={styles.paginationPages}>
            <div className={`${styles.pageItem} ${styles.active}`}>
              <span>1</span>
            </div>
            <div className={styles.pageItem}>
              <span>2</span>
            </div>
            <div className={styles.pageItem}>
              <span>...</span>
            </div>
            <div className={styles.pageItem}>
              <span>10</span>
            </div>
          </div>
          <button className={styles.viewAllBtn}>
            <span>View all</span>
            <ArrowRight className={styles.arrowIcon} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
