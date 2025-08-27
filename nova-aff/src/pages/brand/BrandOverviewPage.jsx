import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../../components/ui/AuthButton";
import styles from "../../styles/pages/brand-overview.module.css";

const BrandOverviewPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    brand: "",
    website: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Brand overview form submitted:", formData);
    // Add form submission logic here
  };

  const features = [
    {
      id: 1,
      image: "/optimized-revenue.jpg",
      title: "Tăng trưởng Doanh thu Bền vững",
      description:
        "Khai thác tối đa tiềm năng bán hàng qua các giải pháp Affiliate Marketing hiệu suất cao. Chúng tôi biến nội dung sáng tạo của KOC/KOL thành động lực tăng trưởng doanh số trực tiếp, giúp bạn đạt được lợi tức đầu tư (ROI) hấp dẫn.",
    },
    {
      id: 2,
      image: "/enhanced-visibility.jpg",
      title: "Tối ưu Chi phí & Nguồn lực",
      description:
        "Tiếp cận giải pháp marketing hiệu quả với chi phí linh hoạt, phù hợp với ngân sách của doanh nghiệp SMEs. Nền tảng tự động hóa của chúng tôi giúp bạn tiết kiệm thời gian, giảm thiểu quy trình thủ công và tập trung vào hoạt động kinh doanh cốt lõi.",
    },
    {
      id: 3,
      image: "/data-insights.jpg",
      title: "Quyết định dựa trên Dữ liệu",
      description:
        "Đưa ra quyết định kinh doanh sáng suốt với hệ thống phân tích và báo cáo minh bạch của chúng tôi. Chúng tôi cung cấp dữ liệu chi tiết về hiệu quả chiến dịch theo thời gian thực, giúp bạn hiểu rõ hành vi khách hàng và tối ưu hóa chiến lược liên tục.",
    },
    {
      id: 4,
      image: "/tailored-strategies.jpg",
      title: "Tiếp cận Đúng Khách hàng Mục tiêu",
      description:
        "Kết nối thương hiệu của bạn với đúng tệp khách hàng thông qua mạng lưới KOC/KOL đa dạng và đã được xác thực. Chúng tôi giúp bạn lan tỏa thông điệp một cách tự nhiên và đáng tin cậy, xây dựng cộng đồng và tăng cường sự gắn kết với thương hiệu.",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      category: "Brands",
      title: "5 Powerful Brand-Building Strategies in the Digital Age",
      description:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan ....",
      image: "/5 Powerful brand building.png",
    },
    {
      id: 2,
      category: "Affiliate Marketing",
      title: "Affiliate Marketing 101: The Complete Beginner's Guide",
      description:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan ....",
      image: "/Affiliate Marketing 101.png",
    },
    {
      id: 3,
      category: "Influencer Marketing",
      title: "Influencer Marketing in 2025: Trends, Tools & Tactics",
      description:
        "In today's digital landscape, building a strong brand goes far beyond just having a good logo or catchy slogan ....",
      image: "/Infiencer marketing in 2025.png",
    },
  ];

  return (
    <div className={styles.brandOverviewPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Cùng NovaAFF kiến tạo bứt phá cho thương hiệu của bạn
            </h1>
            <p className={styles.heroDescription}>
              Chúng tôi trao quyền cho các doanh nghiệp SMEs phát triển mạnh mẽ
              trong kỷ nguyên số. Bằng cách kết hợp công nghệ tự động hóa, chiến
              lược dữ liệu và mạng lưới KOC/KOL chất lượng, chúng tôi giúp bạn
              tối đa hóa tiềm năng thương hiệu và thúc đẩy tăng trưởng doanh thu
              vượt trội.
            </p>
            <div className={styles.ctaButtons}>
              <AuthButton
                className={styles.ctaButton}
                variant="dashboard"
                showModal={true}
              >
                <span>Bắt đầu ngay</span>
                <div className={styles.buttonIcon}>
                  <svg width="11" height="19" viewBox="0 0 11 19" fill="none">
                    <path
                      d="M1 1L10 9.5L1 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </AuthButton>
              <Link
                to="/contact"
                className={`${styles.ctaButton} ${styles.secondary}`}
              >
                <span>Liên hệ với chúng tôi</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/brand-overview-hero.png" alt="Brand Overview" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <h2 className={styles.featuresTitle}>
            Tối đa hóa tiềm năng đầy đủ của thương hiệu của bạn
          </h2>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <img src={feature.image} alt={feature.title} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesSection}>
        <div className={styles.caseStudiesContainer}>
          <h2 className={styles.caseStudiesTitle}>Case study</h2>
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study) => (
              <div key={study.id} className={styles.caseStudyCard}>
                <div className={styles.caseStudyImage}>
                  <img src={study.image} alt={study.title} />
                </div>
                <div className={styles.caseStudyContent}>
                  <span className={styles.caseStudyCategory}>
                    {study.category}
                  </span>
                  <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                  <p className={styles.caseStudyDescription}>
                    {study.description}
                  </p>
                  <button className={styles.readMoreButton}>
                    <span>Read more</span>
                    <div className={styles.buttonIcon}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 10H16M10 4L16 10L10 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <div className={styles.contactFormContainer}>
          <div className={styles.contactFormContent}>
            <h2 className={styles.contactFormTitle}>
              Xem chúng tôi có thể giúp gì cho bạn
            </h2>
            <p className={styles.contactFormSubtitle}>
              Hoàn thành biểu mẫu liên hệ dưới đây và bắt đầu hành trình của bạn
              đến mối quan hệ hợp tác chiến lược và tăng trưởng vượt trội!
            </p>
          </div>
          <div className={styles.contactFormWrapper}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Tên của bạn *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Please enter your name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Địa chỉ email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="youremail@..."
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Số điện thoại *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(+84) xxx xxxx xxx"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Bạn là *</label>
                  <div className={styles.selectWrapper}>
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Bạn là KOL hoặc KOC</option>
                      <option value="brand">Đại diện thương hiệu</option>
                      <option value="advertiser">Người đặt quảng cáo</option>
                      <option value="agency">Công ty tiếp thị</option>
                      <option value="startup">Doanh nghiệp mới</option>
                    </select>
                    <div className={styles.selectArrow}>
                      <svg width="14" height="6" viewBox="0 0 14 6" fill="none">
                        <path
                          d="M1 1L7 5L13 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Tên thương hiệu của bạn *</label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="Please enter your brand"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Trang web hoặc cửa hàng trực tuyến của bạn</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Website's URL"
                  />
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label>Mô tả nhu cầu của bạn chi tiết *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please enter your enquiries"
                  rows="8"
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandOverviewPage;
