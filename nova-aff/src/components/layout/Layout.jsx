import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatbotIcon from "../ui/ChatbotIcon";

const Layout = ({ children }) => {
  const location = useLocation();

  // Pages that should not show navbar/footer (like pure auth pages)
  const hideLayoutPages = ["/login", "/signup"];
  const shouldHideLayout = hideLayoutPages.includes(location.pathname);

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
      <ChatbotIcon />
    </div>
  );
};

export default Layout;
