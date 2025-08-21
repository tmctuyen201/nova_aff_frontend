import { useNavigate } from "react-router-dom";
import "../../styles/components/login-modal.css";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onClose();
    navigate("/login");
  };

  const handleSignUpClick = () => {
    onClose();
    navigate("/signup");
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <div className="login-modal-header">
          <h2>Get Started</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="login-modal-content">
          <p>Choose how you'd like to get started with Nova AFF</p>
          <div className="login-modal-actions">
            <button className="modal-btn primary" onClick={handleSignUpClick}>
              Create Account
            </button>
            <button className="modal-btn secondary" onClick={handleLoginClick}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
