import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import "./DashboardPageOverview.css";

const DashboardPageOverview = () => {
  const { projectId } = useParams();

  // Memoize data to prevent infinite re-renders
  const { kolsData, trackingData, videoData } = useMemo(() => {
    // Simulate data from KOLs List
    const kolsData = [
      {
        id: 1,
        fullName: "Nguyễn Văn A",
        brandApproval: "Approved",
        gmv: 1200000,
      },
      {
        id: 2,
        fullName: "Nguyễn Văn B",
        brandApproval: "Approved",
        gmv: 983780,
      },
      {
        id: 3,
        fullName: "Nguyễn Thị C",
        brandApproval: "Approved",
        gmv: 750000,
      },
      { id: 4, fullName: "Nguyễn Văn D", brandApproval: "Pending", gmv: 0 },
    ];

    // Simulate data from Tracking Numbers
    const trackingData = [
      { id: 1, trackingNumber: "1", phoneCheck: true },
      { id: 2, trackingNumber: "2", phoneCheck: false },
      { id: 3, trackingNumber: "3", phoneCheck: true },
      ...Array.from({ length: 151 }, (_, i) => ({
        id: i + 4,
        trackingNumber: String(i + 4),
        phoneCheck: (i + 4) % 2 === 0, // Deterministic instead of random
      })),
    ];

    // Simulate data from Data Tracking
    const videoData = [
      {
        id: 1,
        creator: "Nguyễn Văn A",
        view: 9000,
        like: 1200,
        share: 153,
        gmv: 2734,
        revenueFromVideos: 1844,
        newFollowers: 100000,
        createdAt: new Date("2025-07-01"),
      },
      {
        id: 2,
        creator: "Nguyễn Văn B",
        view: 8500,
        like: 1100,
        share: 145,
        gmv: 2650,
        revenueFromVideos: 1800,
        newFollowers: 95000,
        createdAt: new Date("2025-07-01"),
      },
      {
        id: 3,
        creator: "Nguyễn Thị C",
        view: 7200,
        like: 980,
        share: 128,
        gmv: 2400,
        revenueFromVideos: 1650,
        newFollowers: 87000,
        createdAt: new Date("2025-06-30"),
      },
      ...Array.from({ length: 148 }, (_, i) => ({
        id: i + 4,
        creator: `Creator ${i + 4}`,
        view: ((i * 137 + 5000) % 15000) + 5000, // Deterministic values
        like: ((i * 23 + 500) % 2000) + 500,
        share: ((i * 7 + 50) % 300) + 50,
        gmv: ((i * 17 + 2000) % 1000) + 2000,
        revenueFromVideos: ((i * 11 + 1500) % 500) + 1500,
        newFollowers: ((i * 347 + 20000) % 80000) + 20000,
        createdAt: new Date(
          Date.now() - i * 24 * 60 * 60 * 1000 // Deterministic dates
        ),
      })),
    ];

    return { kolsData, trackingData, videoData };
  }, []); // Empty dependency array since data is static
  const [stats, setStats] = useState({
    kocsSentSamples: 0,
    gmvFromVideo: 0,
    kocsApproved: 0,
    kocsPostedVideos: 0,
    videoUncheckHashtag: 0,
    gmvFromVideoIn24h: 0,
  });

  useEffect(() => {
    // Calculate statistics from data
    const calculateStats = () => {
      // 1. KOCs sent samples (from tracking data with phone check)
      const kocsSentSamples = trackingData.filter(
        (item) => item.phoneCheck
      ).length;

      // 2. GMV from video (total GMV from all videos)
      const gmvFromVideo = videoData.reduce(
        (total, video) => total + video.gmv,
        0
      );

      // 3. Number of KOCs approved (from KOLs data)
      const kocsApproved = kolsData.filter(
        (kol) => kol.brandApproval === "Approved"
      ).length;

      // 4. KOCs posted videos (unique creators who posted videos)
      const uniqueCreators = new Set(videoData.map((video) => video.creator));
      const kocsPostedVideos = uniqueCreators.size;

      // 5. Video (Uncheck hashtag) - simulate unchecked videos
      const videoUncheckHashtag = Math.floor(videoData.length * 0.78); // 78% ratio

      // 6. GMV from video in 24h (from videos posted in last 24h)
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const gmvFromVideoIn24h = videoData
        .filter((video) => video.createdAt > yesterday)
        .reduce((total, video) => total + video.gmv, 0);

      setStats({
        kocsSentSamples,
        gmvFromVideo,
        kocsApproved,
        kocsPostedVideos,
        videoUncheckHashtag,
        gmvFromVideoIn24h,
      });
    };

    calculateStats();
  }, [kolsData, trackingData, videoData]);

  // Statistics cards configuration based on Figma
  const statisticsCards = [
    {
      id: "kocs-sent-samples",
      title: "KOCs sent samples",
      value: stats.kocsSentSamples,
      color: "#D1A7FF", // Purple
      icon: "📦",
    },
    {
      id: "gmv-from-video",
      title: "GMV form video",
      value: stats.gmvFromVideo.toLocaleString(),
      color: "#FFEB75", // Yellow
      icon: "💰",
    },
    {
      id: "kocs-approved",
      title: "Number of KOCs approved",
      value: stats.kocsApproved,
      color: "#FFFFFF", // White
      icon: "✅",
    },
    {
      id: "kocs-posted-videos",
      title: "KOCs posted videos",
      value: stats.kocsPostedVideos,
      color: "#A7FFB5", // Light green
      icon: "🎥",
    },
    {
      id: "video-uncheck-hashtag",
      title: "Video(Uncheck hashtag)",
      value: stats.videoUncheckHashtag,
      color: "#FF7DFF", // Pink
      icon: "#️⃣",
    },
    {
      id: "gmv-from-video-24h",
      title: "GMV form video in 24h",
      value: stats.gmvFromVideoIn24h.toLocaleString(),
      color: "#A7FFD4", // Mint green
      icon: "⏰",
    },
  ];

  // Project data
  const projectData = {
    title: "April project",
    id: "project-1",
    createdDate: "01/04/2025",
  };

  return (
    <div className="dashboard-page-overview">
      {/* Fixed Header */}
      <AdminHeader projectTitle={projectData.title} />

      {/* Fixed Sidebar */}
      <AdminSidebar activeItem="dashboard" projectId={projectId} />

      {/* Main Content Area */}
      <main className="dashboard-main-content">
        {/* Statistics Cards Container */}
        <div className="dashboard-stats-container">
          <div className="stats-grid">
            {statisticsCards.map((card) => (
              <div
                key={card.id}
                className="stat-card"
                style={{ backgroundColor: card.color }}
              >
                <div className="stat-card-content">
                  <div className="stat-icon">{card.icon}</div>
                  <div className="stat-info">
                    <h3 className="stat-title">{card.title}</h3>
                    <div className="stat-value">{card.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="dashboard-additional-info">
            <div className="info-section">
              <h4>Quick Stats</h4>
              <div className="quick-stats">
                <div className="quick-stat-item">
                  <span className="quick-stat-label">Total Revenue:</span>
                  <span className="quick-stat-value">
                    $
                    {videoData
                      .reduce(
                        (total, video) => total + video.revenueFromVideos,
                        0
                      )
                      .toLocaleString()}
                  </span>
                </div>
                <div className="quick-stat-item">
                  <span className="quick-stat-label">Total Views:</span>
                  <span className="quick-stat-value">
                    {videoData
                      .reduce((total, video) => total + video.view, 0)
                      .toLocaleString()}
                  </span>
                </div>
                <div className="quick-stat-item">
                  <span className="quick-stat-label">
                    Total Followers Gained:
                  </span>
                  <span className="quick-stat-value">
                    {videoData
                      .reduce((total, video) => total + video.newFollowers, 0)
                      .toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h4>Performance Insights</h4>
              <div className="performance-insights">
                <div className="insight-item">
                  <span className="insight-label">
                    Average Engagement Rate:
                  </span>
                  <span className="insight-value">
                    {(
                      videoData.reduce(
                        (total, video) =>
                          total +
                          ((video.like + video.share) / video.view) * 100,
                        0
                      ) / videoData.length
                    ).toFixed(2)}
                    %
                  </span>
                </div>
                <div className="insight-item">
                  <span className="insight-label">Top Performing Creator:</span>
                  <span className="insight-value">
                    {videoData.sort((a, b) => b.view - a.view)[0]?.creator ||
                      "N/A"}
                  </span>
                </div>
                <div className="insight-item">
                  <span className="insight-label">Conversion Rate:</span>
                  <span className="insight-value">
                    {((stats.kocsApproved / kolsData.length) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPageOverview;
