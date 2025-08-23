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
      title: "Giải pháp Affiliate Marketing",
      features: [
        "Tiếp thị liên kết qua Video hiệu suất cao với Mass KOC.",
        "Tiếp thị liên kết qua Livestream hiệu suất cao với Mass KOC",
      ],
      imageSrc: affiliateMarketingImg,
    },
    {
      title: "Influencer Marketing",
      features: [
        "Dịch vụ Booking Top KOC/KOL",
        "Phát triển nội dung do người dùng tạo",
      ],
      imageSrc: influencerMarketingImg,
    },
    {
      title: "Nền tảng Công nghệ & Dữ liệu",
      features: [
        "Hệ thống tracking và đo lường hiệu quả minh bạch (ROI, ROAS)",
        "Báo cáo & Phân tích dữ liệu theo thời gian thực",
        "Nền tảng quản lý chiến dịch 'All-in-one'",
      ],
      imageSrc: affiliateMarketingImg,
    },
    {
      title: "Các giải pháp Livestream",
      features: ["Sản xuất và vận hành", "Cung cấp cơ sở vật chất"],
      imageSrc: affiliateMarketingImg,
    },
    {
      title: "Chương trình Hợp tác & Kiếm tiền",
      features: [
        "Chiến dịch Affiliate Marketing (Video, Livestream)",
        "Cơ hội Booking với các thương hiệu uy tín.",
      ],
      imageSrc: affiliateMarketingImg,
    },
    {
      title: "Đào tạo & Phát triển Năng lực",
      features: [
        "Đào tạo kiến thức và 'công thức thành công' độc quyền",
        "Cung cấp thư viện nội dung và kịch bản hiệu quả ('Win Content Library')",
      ],
      imageSrc: influencerMarketingImg,
    },
    {
      title: "Công cụ & Hỗ trợ",
      features: [
        "Cung cấp công cụ tracking và đo lường hiệu suất cá nhân",
        "Hệ thống dashboard báo cáo minh bạch, theo thời gian thực",
        "Đội ngũ chuyên biệt hỗ trợ và chăm sóc cộng đồng.",
      ],
      imageSrc: affiliateMarketingImg,
    },
  ];

  // Blog posts
  const blogPosts = [
    {
      category: "Brands",
      title:
        "Sáng tạo nội dung “Win” và làm chủ thuật toán trang “For You Page”",
      excerpt:
        "Trong không gian số hiện nay, xây dựng thương hiệu mạnh mẽ vượt xa khỏi việc chỉ có logo hay slogan đẹp mắt ....",
      imageSrc: blogBrandsImg,
    },
    {
      category: "Affiliate Marketing",
      title: "Kiếm tiền với TikTok Affiliate: 7 chiến lược tăng thu nhập",
      excerpt:
        "Trong không gian số hiện nay, xây dựng thương hiệu mạnh mẽ vượt xa khỏi việc chỉ có logo hay slogan đẹp mắt ....",
      imageSrc: blogBrandsImg,
    },
    {
      category: "Influencer Marketing",
      title: "Các chiến lược tăng follower Tiktok miễn phí & hiệu quả 100%",
      excerpt:
        "Trong không gian số hiện nay, xây dựng thương hiệu mạnh mẽ vượt xa khỏi việc chỉ có logo hay slogan đẹp mắt ....",
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
              Tăng trưởng Doanh thu thông minh qua Affiliate Marketing
              <br />
              Giải pháp Marketing “Trẻ” cho Doanh Nghiệp “Trẻ”
            </h1>
            <p className={styles.heroDescription}>
              NOVA AFF tiên phong ứng dụng công nghệ tự động và chiến lược dữ
              liệu, giúp doanh nghiệp SMEs kết nối chính xác với KOC/KOL tiềm
              năng. Chúng tôi kiến tạo những chiến dịch hiệu quả, đo lường minh
              bạch, biến mỗi nội dung thành cỗ máy tăng trưởng doanh thu bền
              vững.
            </p>
            <button className={styles.heroCta}>
              Tìm hiểu thêm
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
            <h2 className={styles.successTitle}>Mở lối thành công</h2>
            <p className={styles.successSubtitle}>
              Tìm hiểu cách NovaAFF giúp bạn nâng cao giá trị thương hiệu và
              tiềm năng doanh thu cho doanh nghiệp của bạn.
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
                <h3 className={styles.cardTitle}>Dành cho thương hiệu</h3>
                <p className={styles.cardDescription}>
                  Tăng doanh số bán hàng tại thị trường mục tiêu và tối ưu các
                  hoạt động tiếp thị của bạn bằng cách kết nối với mạng lưới của
                  chúng tôi. Hãy tạo dựng mối quan hệ hợp tác mạnh mẽ để thúc
                  đẩy tăng trưởng vượt trội!
                </p>
                <button className={styles.cardCta}>
                  Tìm hiểu thêm
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
                <h3 className={styles.cardTitle}>Dành cho người sáng tạo</h3>
                <p className={styles.cardDescription}>
                  Tiếp cận những cơ hội vàng, kiếm tiền hoa hồng vô tận thông
                  qua các chiến dịch độc quyền và kết nối với các thương hiệu đa
                  dạng lĩnh vực để biến sự sáng tạo của bạn thành doanh thu.
                </p>
                <button className={`${styles.cardCta} ${styles.signupCta}`}>
                  Đăng ký
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
            <h2 className={styles.ecosystemTitle}>Hệ sinh thái NovaAFF</h2>
            <p className={styles.ecosystemSubtitle}>
              Các giải pháp được thiết kế riêng biệt, ứng dụng công nghệ và dữ
              liệu để khai phá tiềm năng và bứt phá doanh thu.
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
            <h3 className={styles.infoTitle}>Dành cho Doanh nghiệp (SMEs)</h3>
            <p className={styles.infoDescription}>
              NovaAFF hỗ trợ các doanh nghiệp SMEs phát huy tối đa hiệu quả
              marketing thông qua bộ giải pháp toàn diện, được tự động hóa và
              tối ưu bằng chiến lược dữ liệu.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              Dành cho Nhà sáng tạo nội dung{" "}
            </h3>
            <p className={styles.infoDescription}>
              NovaAFF cung cấp cho các nhà sáng tạo nội dung một hệ sinh thái hỗ
              trợ toàn diện, từ công cụ, kiến thức đến cơ hội hợp tác, giúp bạn
              phát triển sự nghiệp và tối đa hóa thu nhập một cách bền vững.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className={styles.blogSection}>
        <div className={styles.blogContainer}>
          <h2 className={styles.blogTitle}>
            Không chỉ chạy theo trend - Một bước trở thành người tiên phong cùng
            NOVA AFF
          </h2>

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
                    Xem thêm
                    <ArrowRight className={styles.arrowIcon} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.blogActions}>
            <button className={styles.seeMoreBtn}>
              Xem thêm
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
