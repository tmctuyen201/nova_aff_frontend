import React, { useState } from "react";
import AuthButton from "../../components/ui/AuthButton";
import styles from "../../styles/pages/creator-overview.module.css";

const CreatorOverviewPage = () => {
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
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.creatorOverviewPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Nơi sự sáng tạo của bạn đáp ứng những cơ hội không giới hạn</h1>
            <p>
              Là nền tảng tiên phong ứng dụng công nghệ, chúng tôi trao quyền
              cho các KOC/KOL để tối đa hóa tầm ảnh hưởng và doanh thu. Các giải
              pháp và công cụ của chúng tôi được thiết kế để giúp bạn phát triển
              chuyên nghiệp, nâng cao chất lượng nội dung và biến đam mê của bạn
              thành nguồn thu nhập bền vững.
            </p>
            <AuthButton
              className={styles.ctaButton}
              variant="dashboard"
              showModal={true}
            >
              Đăng ký ngay
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </AuthButton>
          </div>
          <div className={styles.heroImage}>
            <img src="/creator-overview-hero.png" alt="Creator Overview Hero" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <h2>Trao quyền cho hành trình sáng tạo của bạn</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img src="/expanded-reach.jpg" alt="Expanded Reach" />
              </div>
              <h3>Tối đa hóa Cơ hội Thu nhập</h3>
              <p>
                Kiếm tiền từ sự sáng tạo của bạn với đa dạng các cơ hội hợp tác,
                từ chiến dịch Affiliate Marketing đến các job booking độc quyền
                từ các thương hiệu uy tín.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img
                  src="/performance-focused.webp"
                  alt="Performance Focused"
                />
              </div>
              <h3>Phát triển bằng Chiến lược Dữ liệu</h3>
              <p>
                Vượt qua giới hạn của việc làm theo cảm tính. Chúng tôi cung cấp
                các phân tích chuyên sâu về khán giả và hiệu suất nội dung, giúp
                bạn xây dựng chiến lược phát triển kênh một cách bài bản và hiệu
                quả.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img src="/cost-efficiency.webp" alt="Cost Efficiency" />
              </div>
              <h3>Nâng cao Kỹ năng & Chuyên môn</h3>
              <p>
                Truy cập vào hệ thống đào tạo chuyên nghiệp và các tài nguyên
                độc quyền như "Win Content Library" để nâng cao kỹ năng sáng
                tạo. Chúng tôi cung cấp "công thức thành công" và định hướng rõ
                ràng để bạn tự tin phát triển.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img
                  src="/enhanced-credibility.webp"
                  alt="Enhanced Credibility"
                />
              </div>
              <h3>Hỗ trợ Toàn diện & Cộng đồng</h3>
              <p>
                Bạn không bao giờ đơn độc. Đội ngũ của NovaAFF luôn đồng hành hỗ
                trợ, cung cấp các công cụ cần thiết và xây dựng một cộng đồng
                KOC/KOL vững mạnh, nơi mọi người cùng nhau học hỏi và phát
                triển.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <h2>NOVA's affiliate marketing service</h2>
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceImage}>
                <img
                  src="/create-campaign.jpg"
                  alt="Create an affiliate campaign"
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>Create an affiliate campaign</h3>
                <p>
                  Adjust affiliate campaigns to align with your goals and brand
                  objectives.
                </p>
              </div>
            </div>
            <div className={`${styles.serviceItem} ${styles.reverse}`}>
              <div className={styles.serviceContent}>
                <h3>Affiliate recruitment</h3>
                <p>
                  Identify and collaborate with affiliate units that have an
                  audience that matches your brand.
                </p>
              </div>
              <div className={styles.serviceImage}>
                <img
                  src="/affiliate-recruitment.jpg"
                  alt="Affiliate recruitment"
                />
              </div>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceImage}>
                <img src="/monitor-performance.jpg" alt="Monitor performance" />
              </div>
              <div className={styles.serviceContent}>
                <h3>Monitor performance</h3>
                <p>
                  Use advanced analytics to measure link performance and
                  campaign effectiveness.
                </p>
              </div>
            </div>
            <div className={`${styles.serviceItem} ${styles.reverse}`}>
              <div className={styles.serviceContent}>
                <h3>Commission management</h3>
                <p>
                  The commission structure is arranged logically to reward the
                  branches for achieving significant results.
                </p>
              </div>
              <div className={styles.serviceImage}>
                <img
                  src="/commission-management.jpg"
                  alt="Commission management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesSection}>
        <div className={styles.caseStudiesContainer}>
          <h2>Strategies and In-Depth Insights from NOVA</h2>
          <div className={styles.blogGrid}>
            <article className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src="/5 Powerful brand building.png" alt="Blog post" />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogCategory}>Brands</span>
                <h3>5 Powerful Brand-Building Strategies in the Digital Age</h3>
                <p>
                  In today's digital landscape, building a strong brand goes far
                  beyond just having a good logo or catchy slogan ....
                </p>
                <button className={styles.readMoreBtn}>
                  Read more
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
            </article>
            <article className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src="/Affiliate Marketing 101.png" alt="Blog post" />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogCategory}>Affiliate Marketing</span>
                <h3>Affiliate Marketing 101: The Complete Beginner's Guide</h3>
                <p>
                  In today's digital landscape, building a strong brand goes far
                  beyond just having a good logo or catchy slogan ....
                </p>
                <button className={styles.readMoreBtn}>
                  Read more
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
            </article>
            <article className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src="/Infiencer marketing in 2025.png" alt="Blog post" />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogCategory}>
                  Influencer Marketing
                </span>
                <h3>Influencer Marketing in 2025: Trends, Tools & Tactics</h3>
                <p>
                  In today's digital landscape, building a strong brand goes far
                  beyond just having a good logo or catchy slogan ....
                </p>
                <button className={styles.readMoreBtn}>
                  Read more
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
            </article>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2>Xem chúng tôi có thể giúp gì cho bạn</h2>
            <p>
              Hoàn thành biểu mẫu liên hệ dưới đây và bắt đầu hành trình của bạn
              đến mối quan hệ hợp tác chiến lược và tăng trưởng vượt trội!
            </p>
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Tên của bạn *</label>
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
                <label htmlFor="email">Địa chỉ email *</label>
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
                <label htmlFor="phone">Số điện thoại *</label>
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
                <label htmlFor="userType">Bạn là *</label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Bạn là KOL hoặc KOC</option>
                  <option value="kol">Người ảnh hưởng (KOL)</option>
                  <option value="koc">Người tiêu dùng ảnh hưởng (KOC)</option>
                  <option value="creator">Nhà sáng tạo nội dung</option>
                  <option value="influencer">Người ảnh hưởng</option>
                </select>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="brand">Tên thương hiệu của bạn *</label>
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
                <label htmlFor="website">
                  Trang web hoặc cửa hàng trực tuyến của bạn
                </label>
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
              <label htmlFor="details">Mô tả nhu cầu của bạn chi tiết *</label>
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
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreatorOverviewPage;
