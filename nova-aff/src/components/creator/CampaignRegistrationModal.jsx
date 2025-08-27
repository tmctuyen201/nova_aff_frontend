import React, { useState, useEffect } from "react";
import "./CampaignRegistrationModal.css";

const CampaignRegistrationModal = ({ isOpen, onClose, campaign = null }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    zalo: "",
    tiktokLink: "",
    tiktokId: "",
    followers: "",
    gmv: "",
    contentType: "",
    productChoice: "",
    address: "",
    joinZaloGroup: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Scroll modal content to top when opened
      setTimeout(() => {
        const modalContent = document.querySelector(".modal-content");
        if (modalContent) {
          modalContent.scrollTop = 0;
        }
      }, 100);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Họ và tên là bắt buộc";
    if (!formData.email.trim()) newErrors.email = "Email là bắt buộc";
    if (!formData.phone.trim()) newErrors.phone = "Số điện thoại là bắt buộc";
    if (!formData.zalo.trim()) newErrors.zalo = "Zalo là bắt buộc";
    if (!formData.tiktokLink.trim())
      newErrors.tiktokLink = "Link TikTok là bắt buộc";
    if (!formData.tiktokId.trim()) newErrors.tiktokId = "ID TikTok là bắt buộc";
    if (!formData.followers.trim())
      newErrors.followers = "Số follower là bắt buộc";
    if (!formData.gmv.trim()) newErrors.gmv = "GMV là bắt buộc";
    if (!formData.contentType.trim())
      newErrors.contentType = "Đặc điểm nội dung là bắt buộc";
    if (!formData.productChoice.trim())
      newErrors.productChoice = "Lựa chọn sản phẩm là bắt buộc";
    if (!formData.address.trim()) newErrors.address = "Địa chỉ là bắt buộc";
    if (!formData.joinZaloGroup.trim())
      newErrors.joinZaloGroup = "Xác nhận tham gia nhóm Zalo là bắt buộc";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10,11}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Submit form data to API
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Close modal on success
      onClose();

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        zalo: "",
        tiktokLink: "",
        tiktokId: "",
        followers: "",
        gmv: "",
        contentType: "",
        productChoice: "",
        address: "",
        joinZaloGroup: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const closeIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const FormField = ({
    field,
    label,
    type = "text",
    placeholder = "Short answer text",
    isTextarea = false,
    rows = 3,
  }) => (
    <div className="form-field">
      <div className="field-container">
        <div className="field-header">
          <label className="field-label">* {label}</label>
        </div>

        {isTextarea ? (
          <textarea
            value={formData[field]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
            placeholder={placeholder}
            rows={rows}
            className={`field-input textarea ${errors[field] ? "error" : ""} ${
              focusedField === field ? "focused" : ""
            }`}
          />
        ) : (
          <input
            type={type}
            value={formData[field]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
            placeholder={placeholder}
            className={`field-input ${errors[field] ? "error" : ""} ${
              focusedField === field ? "focused" : ""
            }`}
          />
        )}

        {errors[field] && <div className="field-error">{errors[field]}</div>}
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="campaign-registration-modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          {closeIcon}
        </button>

        <div className="modal-header">
          <div className="header-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
            <div className="decoration-circle circle-4"></div>
            <div className="decoration-circle circle-5"></div>
          </div>

          <h1 className="modal-title">
            {campaign?.brand || "GREENBOX"} – MỜI KOCs HỢP TÁC
            <br />
            AFFILIATE Chiến dịch "{campaign?.title || "GIẢM GIÁ MÙA THU 2025"}"
          </h1>

          <p className="modal-description">
            Cơ hội hợp tác Affiliate bùng nổ cùng chiến dịch khuyến mãi Giảm Giá
            Mùa Thu 2025 – ưu đãi hấp dẫn lên đến 50% cho hàng trăm sản phẩm
            thời trang, mỹ phẩm, gia dụng và thực phẩm sạch. Đây là thời điểm
            vàng để giới thiệu sản phẩm chất lượng với mức giá ưu đãi, thu hút
            khách hàng mới và gia tăng đơn hàng cho cộng tác viên.
          </p>

          <div className="benefits-section">
            <h3>Quyền lợi tham gia</h3>
            <div className="benefits-list">
              <p>
                🌸 Nhận ngay 01 mã giảm giá cá nhân trị giá 200.000đ để mua sắm.
              </p>
              <p>
                🌸 Hoa hồng Affiliate lên đến 12% cho mỗi đơn hàng thành công.
              </p>
              <p>
                🌸 Cơ hội tham gia chương trình quay số trúng thưởng cuối mùa
                với tổng giá trị quà tặng 50.000.000đ.
              </p>
            </div>
          </div>

          <div className="conditions-section">
            <h3>Điều kiện tham gia</h3>
            <div className="conditions-list">
              <p>
                Là KOC, Influencer hoặc Affiliate Marketer có kênh truyền thông
                (Facebook, TikTok, Instagram, Blog...).
              </p>
              <p>
                Cam kết chia sẻ thông tin chiến dịch ít nhất 2 lần/tuần trong
                thời gian khuyến mãi.
              </p>
              <p>Thời gian chiến dịch: 01/09/2025 – 30/09/2025.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-grid">
            <FormField
              field="fullName"
              label="Họ và tên"
              placeholder="Nhập họ và tên của bạn"
            />

            <FormField
              field="email"
              label="Email"
              type="email"
              placeholder="Nhập địa chỉ email"
            />

            <FormField
              field="phone"
              label="Số điện thoại"
              type="tel"
              placeholder="Nhập số điện thoại"
            />

            <FormField
              field="zalo"
              label="Zalo (Số đăng ký zalo)"
              placeholder="Nhập số Zalo"
            />

            <FormField
              field="tiktokLink"
              label="Link kênh TikTok gắn Affiliate"
              placeholder="Nhập link TikTok"
            />

            <FormField
              field="tiktokId"
              label="ID kênh Tiktok của bạn"
              placeholder="Nhập ID TikTok"
            />

            <FormField
              field="followers"
              label="Số lượng follower TikTok hiện tại"
              placeholder="Nhập số follower"
            />

            <FormField
              field="gmv"
              label="GMV kênh trong 30 ngày gần nhất của bạn?"
              placeholder="Nhập GMV"
            />

            <FormField
              field="contentType"
              label="Đặc điểm nội dung kênh"
              placeholder="Mô tả đặc điểm nội dung"
              isTextarea={true}
            />

            <FormField
              field="productChoice"
              label="Sản phẩm KOC lựa chọn"
              placeholder="Nhập sản phẩm bạn quan tâm"
            />

            <FormField
              field="address"
              label="Địa chỉ nhận sản phẩm mẫu (Ghi rõ ràng, chính xác)"
              placeholder="Nhập địa chỉ đầy đủ"
              isTextarea={true}
              rows={4}
            />

            <FormField
              field="joinZaloGroup"
              label="Tham gia nhóm ZALO để cập nhật các thông tin mới nhất"
              placeholder="Xác nhận tham gia nhóm Zalo"
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={onClose}
              className="cancel-button"
              disabled={isSubmitting}
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className={`submit-button ${isSubmitting ? "submitting" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Đang gửi...
                </>
              ) : (
                "Đăng ký tham gia"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignRegistrationModal;
