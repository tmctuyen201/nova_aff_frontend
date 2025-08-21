import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import SupportPage from "../pages/support/SupportPage";
import BrandPage from "../pages/brand/BrandPage";
import BrandOverviewPage from "../pages/brand/BrandOverviewPage";
import AffiliateMarketingPage from "../pages/brand/AffiliateMarketingPage";
import InfluencerMarketingPage from "../pages/brand/InfluencerMarketingPage";
import InfluencerBookingPage from "../pages/brand/InfluencerBookingPage";
import UserGeneratedContentPage from "../pages/brand/UserGeneratedContentPage";
import CreatorOverviewPage from "../pages/creator/CreatorOverviewPage";
import ExploreCampaignsPage from "../pages/creator/ExploreCampaignsPage";
import CreatorToolsPage from "../pages/creator/CreatorToolsPage";
import PublisherOverviewPage from "../pages/publisher/PublisherOverviewPage";
import PublisherExploreCampaignsPage from "../pages/publisher/PublisherExploreCampaignsPage";
import PublisherCreatorToolsPage from "../pages/publisher/PublisherCreatorToolsPage";
import BlogPage from "../pages/explore/BlogPage";
import EventPage from "../pages/explore/EventPage";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProjectDetailPage from "../pages/admin/ProjectDetailPage";
import KOLsListPage from "../pages/admin/KOLsListPage";
import TrackingNumberPage from "../pages/admin/TrackingNumberPage";
import DataTrackingPage from "../pages/admin/DataTrackingPage";
import DashboardPageOverview from "../pages/admin/DashboardPageOverview";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes - No Layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin/project/:projectId"
          element={<ProjectDetailPage />}
        />
        <Route
          path="/admin/project/:projectId/kols-list"
          element={<KOLsListPage />}
        />
        <Route
          path="/admin/project/:projectId/tracking-number"
          element={<TrackingNumberPage />}
        />
        <Route
          path="/admin/project/:projectId/data-tracking"
          element={<DataTrackingPage />}
        />
        <Route
          path="/admin/project/:projectId/dashboard"
          element={<DashboardPageOverview />}
        />

        {/* Public Routes - With Layout */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/brand" element={<BrandPage />} />
                <Route path="/brand/overview" element={<BrandOverviewPage />} />
                <Route
                  path="/brand/affiliate"
                  element={<AffiliateMarketingPage />}
                />
                <Route
                  path="/brand/influencer"
                  element={<InfluencerMarketingPage />}
                />
                <Route
                  path="/brand/booking"
                  element={<InfluencerBookingPage />}
                />
                <Route
                  path="/brand/ugc"
                  element={<UserGeneratedContentPage />}
                />
                <Route
                  path="/creator/overview"
                  element={<CreatorOverviewPage />}
                />
                <Route
                  path="/creator/campaigns"
                  element={<ExploreCampaignsPage />}
                />
                <Route path="/creator/tools" element={<CreatorToolsPage />} />
                <Route
                  path="/publisher/overview"
                  element={<PublisherOverviewPage />}
                />
                <Route
                  path="/publisher/campaigns"
                  element={<PublisherExploreCampaignsPage />}
                />
                <Route
                  path="/publisher/tools"
                  element={<PublisherCreatorToolsPage />}
                />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/events" element={<EventPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
