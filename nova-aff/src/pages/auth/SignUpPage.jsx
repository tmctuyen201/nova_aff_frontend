import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSelector from "../../components/ui/LanguageSelector";
import EyeIcon from "../../assets/icons/EyeIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import TikTokIcon from "../../assets/icons/TikTokIcon";
import { authAPI, tokenManager } from "../../utils/api";
import styles from "../../styles/pages/signup.module.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(newFormData);

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Real-time validation for password matching
    if (
      name === "password" &&
      touchedFields.confirmPassword &&
      formData.confirmPassword
    ) {
      // Re-validate confirm password when password changes
      const confirmError = validateField(
        "confirmPassword",
        formData.confirmPassword,
        newFormData
      );
      setValidationErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    } else if (name === "confirmPassword" && touchedFields.confirmPassword) {
      // Validate confirm password as user types (if field was already touched)
      const confirmError = validateField("confirmPassword", value, newFormData);
      if (confirmError === "" || confirmError === "Passwords do not match") {
        setValidationErrors((prev) => ({
          ...prev,
          confirmPassword: confirmError,
        }));
      }
    }
  };

  const validateField = (fieldName, value, allFormData = formData) => {
    let error = "";

    if (fieldName === "username" && value.length > 0 && value.length < 6) {
      error = "Minimum 6 characters";
    } else if (fieldName === "password") {
      if (value.length > 0 && value.length < 6) {
        error = "Minimum 6 characters";
      }
    } else if (fieldName === "confirmPassword") {
      if (value.length > 0 && value.length < 6) {
        error = "Minimum 6 characters";
      } else if (value.length >= 6 && value !== allFormData.password) {
        error = "Passwords do not match";
      }
    }

    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouchedFields((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);

    setValidationErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    // If password field is blurred and confirm password is already touched, revalidate confirm password
    if (name === "password" && touchedFields.confirmPassword) {
      const confirmError = validateField(
        "confirmPassword",
        formData.confirmPassword,
        { ...formData, password: value }
      );
      setValidationErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Mark all fields as touched to show validation errors
    const allFields = ["username", "password", "confirmPassword"];
    setTouchedFields({
      username: true,
      password: true,
      confirmPassword: true,
    });

    // Validate all fields
    const errors = {};
    allFields.forEach((field) => {
      const error = validateField(field, formData[field], formData);
      if (error) {
        errors[field] = error;
      }
    });

    // Additional password matching validation
    if (
      formData.password !== formData.confirmPassword &&
      !errors.confirmPassword
    ) {
      errors.confirmPassword = "Passwords do not match";
    }

    // Set all validation errors
    setValidationErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      // Focus on first field with error
      const firstErrorField = allFields.find((field) => errors[field]);
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.focus();
      }
      return;
    }

    setIsLoading(true);

    try {
      const response = await authAPI.register({
        username: formData.username,
        password: formData.password,
        confirm_password: formData.confirmPassword,
      });

      // Store tokens
      tokenManager.setTokens(response.tokens);

      console.log("Registration successful:", response);

      // Redirect to homepage or login
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };

  return (
    <div className={styles.signupContainer}>
      {/* Background Image Section */}
      <div className={styles.signupBackground}>
        <div className={styles.backgroundOverlay}></div>
      </div>

      {/* Form Section */}
      <div className={styles.signupFormSection}>
        <div className={styles.signupHeader}>
          <LanguageSelector />
        </div>

        <div className={styles.signupContent}>
          <div className={styles.signupTitleSection}>
            <h1 className={styles.signupTitle}>Sign Up</h1>
            <p className={styles.loginLink}>
              Already have an account?{" "}
              <Link to="/login" className={styles.loginLinkText}>
                Log in
              </Link>
            </p>
          </div>

          <form className={styles.signupForm} onSubmit={handleSubmit}>
            {error && (
              <div
                className={styles.errorMessage}
                style={{
                  color: "#dc3545",
                  backgroundColor: "#f8d7da",
                  border: "1px solid #f5c6cb",
                  borderRadius: "4px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                {error}
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="username" className={styles.formLabel}>
                * Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`form-input ${
                  touchedFields.username && validationErrors.username
                    ? "error"
                    : ""
                }`}
                required
                disabled={isLoading}
              />
              {touchedFields.username && validationErrors.username && (
                <span className={styles.formError}>
                  {validationErrors.username}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.formLabel}>
                * Password
              </label>
              <div className={styles.passwordInputContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`form-input ${
                    touchedFields.password && validationErrors.password
                      ? "error"
                      : ""
                  }`}
                  required
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <EyeIcon />
                </button>
              </div>
              {touchedFields.password && validationErrors.password && (
                <span className={styles.formError}>
                  {validationErrors.password}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.formLabel}>
                * Confirm password
              </label>
              <div className={styles.passwordInputContainer}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`form-input ${
                    touchedFields.confirmPassword &&
                    validationErrors.confirmPassword
                      ? "error"
                      : ""
                  }`}
                  required
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <EyeIcon />
                </button>
              </div>
              {touchedFields.confirmPassword &&
                validationErrors.confirmPassword && (
                  <span className={styles.formError}>
                    {validationErrors.confirmPassword}
                  </span>
                )}
            </div>

            <button
              type="submit"
              className={styles.signupSubmitBtn}
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Next"}
            </button>

            <p className={styles.termsText}>
              By signing up, you agree to all the Terms & Conditions.
            </p>
          </form>

          <div className={styles.socialLoginSection}>
            <div className={styles.socialLoginButtons}>
              <button
                className={`${styles.socialBtn} ${styles.googleBtn}`}
                onClick={() => handleSocialLogin("google")}
                type="button"
              >
                <GoogleIcon className={styles.socialIcon} />
              </button>
              <button
                className={`${styles.socialBtn} ${styles.tiktokBtn}`}
                onClick={() => handleSocialLogin("tiktok")}
                type="button"
              >
                <TikTokIcon className={styles.socialIcon} />
              </button>
              <button
                className={`${styles.socialBtn} ${styles.facebookBtn}`}
                onClick={() => handleSocialLogin("facebook")}
                type="button"
              >
                <FacebookIcon className={styles.socialIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
