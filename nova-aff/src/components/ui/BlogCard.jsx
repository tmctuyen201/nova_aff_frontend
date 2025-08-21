import "../../styles/components/blog-card.css";

const BlogCard = ({ title, excerpt, imageSrc, readTime }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-meta">
          <span className="blog-card-read-time">{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
