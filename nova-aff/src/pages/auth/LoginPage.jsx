import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSelector from "../../components/ui/LanguageSelector";
import EyeIcon from "../../assets/icons/EyeIcon";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import TikTokIcon from "../../assets/icons/TikTokIcon";
import { authAPI, tokenManager } from "../../utils/api";
import styles from "../../styles/pages/login.module.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await authAPI.login(formData);

      // Store tokens and user info
      tokenManager.setTokens(response.tokens);
      localStorage.setItem("user_info", JSON.stringify(response.user));

      console.log("Login successful:", response);

      // Check if user is admin and redirect accordingly
      const isAdmin =
        response.user.is_staff ||
        response.user.username === "admin" ||
        response.user.role === "admin";

      if (isAdmin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      // The error message is now properly extracted from non_field_errors
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // Navigate to forgot password page or show modal
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };

  return (
    <div className={styles.loginContainer}>
      {/* Background Image Section */}
      <div className={styles.loginBackground}>
        <div className={styles.backgroundOverlay}></div>
      </div>

      {/* Form Section */}
      <div className={styles.loginFormSection}>
        <div className={styles.loginHeader}>
          <LanguageSelector />
        </div>

        <div className={styles.loginContent}>
          <div className={styles.loginTitleSection}>
            <h1 className={styles.loginTitle}>Log in</h1>
            <p className={styles.registrationLink}>
              Have not an account yet?{" "}
              <Link to="/signup" className={styles.registrationLinkText}>
                Registration
              </Link>
            </p>
          </div>

          <form className={styles.loginForm} onSubmit={handleSubmit}>
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
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={styles.formInput}
                placeholder="Username"
                required
                disabled={isLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.formLabel}>
                Password
              </label>
              <div className={styles.passwordInputContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="Password"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  <EyeIcon />
                </button>
              </div>
            </div>

            <button
              type="button"
              className={styles.forgotPasswordBtn}
              onClick={handleForgotPassword}
              disabled={isLoading}
            >
              Forgot password
            </button>

            <button
              type="submit"
              className={styles.loginSubmitBtn}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className={styles.dividerSection}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>Or login wtih</span>
            <div className={styles.dividerLine}></div>
          </div>

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

export default LoginPage;
