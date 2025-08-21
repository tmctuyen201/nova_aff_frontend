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
              Trong một thế giới mà cuộc chơi marketing thường bị thống trị bởi
              những "ông lớn", NovaAFF ra đời để phá vỡ rào cản đó.
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
                Được ươm mầm bởi những con người đầy khát vọng, NovaAFF ra đời
                với sứ mệnh dân chủ hóa lĩnh vực tiếp thị – nơi mà mọi cá nhân,
                dù nhỏ bé hay không chuyên, đều có cơ hội tạo ra giá trị từ nỗ
                lực sáng tạo của chính mình. NovaAFF không đơn thuần là một nền
                tảng tiếp thị liên kết, mà là chiếc cầu nối giữa các thương hiệu
                và cộng đồng người ảnh hưởng tiềm năng tại Đông Nam Á.
              </p>
              <p>
                Chúng tôi tin rằng trong một thế giới số đang phát triển với tốc
                độ chóng mặt, cơ hội không nên chỉ thuộc về "ông lớn". Vì thế,
                NovaAFF tập trung phát triển hạ tầng dễ tiếp cận, minh bạch và
                hiệu quả tại các thị trường chiến lược như Việt Nam, Indonesia,
                Thái Lan và Malaysia — nơi người dùng có thể bắt đầu kiếm tiền
                từ tiếp thị chỉ với một chiếc điện thoại và kết nối internet.
              </p>
              <p>
                Với lòng biết ơn đối với sự tin tưởng từ người dùng, đối tác và
                đội ngũ phát triển, NovaAFF cam kết theo đuổi tầm nhìn dài hạn:
                trở thành nền tảng hàng đầu giúp mọi người tạo dựng sự nghiệp
                trong lĩnh vực affiliate marketing – công bằng, bền vững và
                truyền cảm hứng.
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
                <h3 className={styles.valueName}>Chính trực</h3>
              </div>
              <div className={styles.valueItems}>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Xây dựng lòng tin bằng hành động thực tế</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Minh bạch trong mọi quy trình và hợp tác</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Giữ vững đạo đức dù trong thử thách</span>
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
                <h3 className={styles.valueName}>Tạo giá trị thực</h3>
              </div>
              <div className={styles.valueItems}>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Hiểu rõ nhu cầu thực sự của người dùng</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Tập trung vào kết quả và hiệu quả</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Đo lường bằng giá trị tạo ra</span>
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
                <h3 className={styles.valueName}>Tư duy tăng trưởng</h3>
              </div>
              <div className={styles.valueItems}>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Luôn học hỏi và đổi mới</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Đón nhận thử thách như một cơ hội</span>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.bulletPoint}></div>
                  <span>Chia sẻ, dẫn dắt và truyền cảm hứng</span>
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
