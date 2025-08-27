import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
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
import BrandDashboard from "../pages/brand/BrandDashboard";
import CreatorDetail from "../pages/brand/CreatorDetail";
import CollaborationAnalytics from "../pages/brand/CollaborationAnalytics";
import VideoAnalytics from "../pages/brand/VideoAnalytics";
import LiveAnalytics from "../pages/brand/LiveAnalytics";
import FollowersAnalytics from "../pages/brand/FollowersAnalytics";
import TrendAnalytics from "../pages/brand/TrendAnalytics";
import CreatorDashboard from "../pages/creator/CreatorDashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes - No Layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Brand Analytics Routes - No Layout (Full Screen) */}
        <Route
          path="/brand/dashboard"
          element={
            <ProtectedRoute allowedRoles={["brand"]}>
              <BrandDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brand/creator/:creatorId"
          element={
            <ProtectedRoute allowedRoles={["brand"]}>
              <CreatorDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brand/creator/:creatorId/collaboration"
          element={
            <ProtectedRoute allowedRoles={["brand"]}>
              <CollaborationAnalytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brand/creator/:creatorId/video"
          element={
            <ProtectedRoute allowedRoles={["brand"]}>
              <VideoAnalytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brand/creator/:creatorId/live"
          element={
            <ProtectedRoute allowedRoles={["brand"]}>
              <LiveAnalytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brand/creator/:creatorId/followers"
          element={
            <ProtectedRoute allowedRoles={["brand"]}>
              <FollowersAnalytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/brand/creator/:creatorId/trends"
          element={
            <ProtectedRoute allowedRoles={["brand"]}>
              <TrendAnalytics />
            </ProtectedRoute>
          }
        />

        {/* Creator Dashboard Routes - No Layout (Full Screen) */}
        <Route
          path="/creator/dashboard"
          element={
            <ProtectedRoute allowedRoles={["creator"]}>
              <CreatorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/creator/dashboard/history"
          element={
            <ProtectedRoute allowedRoles={["creator"]}>
              <CreatorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes - Protected */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/project/:projectId"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ProjectDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/project/:projectId/kols-list"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <KOLsListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/project/:projectId/tracking-number"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <TrackingNumberPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/project/:projectId/data-tracking"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DataTrackingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/project/:projectId/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DashboardPageOverview />
            </ProtectedRoute>
          }
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
                {/* Brand Routes - Public Overview, Protected Actions */}
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
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <InfluencerBookingPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/brand/ugc"
                  element={
                    <ProtectedRoute allowedRoles={["brand"]}>
                      <UserGeneratedContentPage />
                    </ProtectedRoute>
                  }
                />

                {/* Creator Routes - Public Overview, Protected Tools */}
                <Route
                  path="/creator/overview"
                  element={<CreatorOverviewPage />}
                />
                <Route
                  path="/creator/campaigns"
                  element={<ExploreCampaignsPage />}
                />
                <Route
                  path="/creator/tools"
                  element={
                    <ProtectedRoute allowedRoles={["creator"]}>
                      <CreatorToolsPage />
                    </ProtectedRoute>
                  }
                />

                {/* Publisher Routes - Public Overview, Protected Tools */}
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
                  element={
                    <ProtectedRoute allowedRoles={["creator"]}>
                      <PublisherCreatorToolsPage />
                    </ProtectedRoute>
                  }
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
