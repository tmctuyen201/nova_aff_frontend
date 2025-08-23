// Import downloaded images
import aboutIntroImage from "../../assets/images/about-intro.jpg";
import aboutStoryImage from "../../assets/images/about-story.jpg";
import styles from "../../styles/pages/about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Nova Intro Section */}
      <section className={styles.novaIntroSection}>
        <div className={styles.novaIntroContainer}>
          <div className={styles.introContent}>
            <p className={styles.introSubtitle}>Giới thiệu về NOVA AFF</p>
            <h1 className={styles.introTitle}>
              Mang công nghệ vào chiến lược affiliate, tối ưu hóa chuyển đổi nhờ
              phân tích dữ liệu chuyên sâu
            </h1>
          </div>
          <div className={styles.introImage}>
            <img
              src={aboutIntroImage}
              alt="Nova AFF Introduction"
              className={styles.introImg}
            />
          </div>
        </div>
      </section>

      {/* Nova Story Section */}
      <section className={styles.novaStorySection}>
        <div className={styles.novaStoryContainer}>
          <div className={styles.storyImage}>
            <img
              src={aboutStoryImage}
              alt="Câu chuyện của chúng tôi"
              className={styles.storyImg}
            />
          </div>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>Câu chuyện của chúng tôi</h2>
            <div className={styles.storyText}>
              <p>
                Được thành lập bởi một tập thể sáng lập trẻ, nhiệt huyết và am
                hiểu sâu sắc về tiếp thị số, phân tích dữ liệu và công nghệ ,
                NovaAFF ra đời từ một trăn trở lớn: làm thế nào để các doanh
                nghiệp SMEs Việt Nam có thể bứt phá trên thị trường số với ngân
                sách hạn chế?
              </p>
              <p>
                Chúng tôi nhận thấy một khoảng trống thị trường, nơi các doanh
                nghiệp loay hoay tìm kiếm giải pháp marketing hiệu quả, còn các
                KOC/KOL tiềm năng lại thiếu công cụ và định hướng để tối ưu hóa
                nội dung. Các phương pháp truyền thống thì thủ công, rời rạc và
                kém hiệu quả. Chính vì vậy, NovaAFF được thành lập với sứ mệnh
                tiên phong tích hợp công nghệ tự động hóa và chiến lược dữ liệu,
                biến Affiliate Marketing thành một vũ khí chiến lược mạnh mẽ, dễ
                tiếp cận cho mọi doanh nghiệp.
              </p>
              <p>
                Tầm nhìn của chúng tôi là dẫn dắt ngành tiếp thị liên kết Việt
                Nam bước sang một kỷ nguyên mới – nơi mọi quy trình được tự động
                hóa, mọi quyết định đều dựa trên dữ liệu, và mọi chiến dịch đều
                được tối ưu để mang lại hiệu quả cao nhất. Với chúng tôi, đây
                không chỉ là một dự án khởi nghiệp, mà là hành trình của tâm
                huyết và đam mê, mong muốn trở thành đối tác tăng trưởng đáng
                tin cậy của doanh nghiệp Việt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContainer}>
          <h2 className={styles.valuesTitle}>Giá trị của chúng tôi</h2>

          <div className={styles.valuesGrid}>
            {/* Chính trực (Integrity) */}
            <div className={styles.valueColumn}>
              <div className={styles.valueHeader}>
                <div className={styles.valueIcon}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 2L52 12V32C52 45.2 41.6 57.2 32 62C22.4 57.2 12 45.2 12 32V12L32 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className={styles.valueName}>Đổi mới & Sáng tạo</h3>
              </div>
              <div className={styles.valueItems}>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Tiên phong công nghệ</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Khuyến khích thử nghiệm</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Học hỏi không ngừng</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Tập trung vào kết quả</span>
                </div>
              </div>
            </div>

            {/* Tạo giá trị thực */}
            <div className={styles.valueColumn}>
              <div className={styles.valueHeader}>
                <div className={styles.valueIcon}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 8L40 24H56L44 36L48 52L32 44L16 52L20 36L8 24H24L32 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className={styles.valueName}>Hiệu suất & Dữ liệu</h3>
              </div>
              <div className={styles.valueItems}>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Tư duy dựa trên dữ liệu</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Minh bạch và đo lường</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Tối ưu hóa liên tục</span>
                </div>
              </div>
            </div>

            {/* Tư duy tăng trưởng */}
            <div className={styles.valueColumn}>
              <div className={styles.valueHeader}>
                <div className={styles.valueIcon}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 8C40.8366 8 48 15.1634 48 24C48 32.8366 40.8366 40 32 40C23.1634 40 16 32.8366 16 24C16 15.1634 23.1634 8 32 8ZM32 44C45.2548 44 56 47.5817 56 52V56H8V52C8 47.5817 18.7452 44 32 44Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className={styles.valueName}>Kết nối & Nhân văn</h3>
              </div>
              <div className={styles.valueItems}>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Đồng hành cùng đối tác</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Phối hợp linh hoạt</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Xây dựng môi trường tin cậy</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Cùng nhau phát triển</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
