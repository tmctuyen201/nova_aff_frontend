import "../../styles/components/brand-blog-card.css";

const BrandBlogCard = ({ title, excerpt, imageSrc, readTime }) => {
  return (
    <div className="brand-blog-card">
      <div className="brand-blog-card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="brand-blog-card-content">
        <h3 className="brand-blog-card-title">{title}</h3>
        <p className="brand-blog-card-excerpt">{excerpt}</p>
        <div className="brand-blog-card-meta">
          <span className="brand-blog-card-read-time">{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BrandBlogCard;
