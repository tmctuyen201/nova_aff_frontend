import "../../styles/components/social-login.css";

const SocialLogin = () => {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Implement Google OAuth logic
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
    // Implement Facebook OAuth logic
  };

  return (
    <div className="social-login">
      <div className="social-login-divider">
        <span>Or continue with</span>
      </div>

      <div className="social-login-buttons">
        <button className="social-btn google-btn" onClick={handleGoogleLogin}>
          <span className="social-icon">G</span>
          Google
        </button>

        <button
          className="social-btn facebook-btn"
          onClick={handleFacebookLogin}
        >
          <span className="social-icon">f</span>
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
