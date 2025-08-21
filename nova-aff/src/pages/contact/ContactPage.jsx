import { useState } from "react";
import contactImage from "../../assets/images/contact-image.jpg";
import styles from "../../styles/pages/contact.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "You are a KOL or KOC",
    brand: "",
    website: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission logic here
    alert("Message sent successfully!");
  };

  const userTypeOptions = [
    "You are a KOL or KOC",
    "Brand Representative",
    "Marketing Agency",
    "Content Creator",
    "Influencer",
    "Other",
  ];

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        {/* Contact Image */}
        <div className={styles.contactImageSection}>
          <img
            src={contactImage}
            alt="Contact Nova AFF"
            className={styles.contactImg}
          />
        </div>

        {/* Contact Form */}
        <div className={styles.contactFormSection}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            {/* Row 1: Name and Email */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Your name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Please enter your name"
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="youremail@..."
                  className={styles.formInput}
                  required
                />
              </div>
            </div>

            {/* Row 2: Phone and User Type */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Phone number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(+84) xxx xxxx xxx"
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="userType" className={styles.formLabel}>
                  You are *
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className={styles.formSelect}
                  required
                >
                  {userTypeOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Brand and Website */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="brand" className={styles.formLabel}>
                  Your Brand *
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  placeholder="Please enter your brand"
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="website" className={styles.formLabel}>
                  Your Website or Online Store
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="Website's URL"
                  className={styles.formInput}
                />
              </div>
            </div>

            {/* Description Textarea */}
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="description" className={styles.formLabel}>
                Describe your needs in details *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Please enter your enquiries"
                className={styles.formTextarea}
                rows={8}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
