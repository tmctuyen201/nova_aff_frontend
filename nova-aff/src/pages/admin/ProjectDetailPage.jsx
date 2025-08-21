import React from "react";
import { useParams } from "react-router-dom";
import DashboardPageOverview from "./DashboardPageOverview";
import "./ProjectDetailPage.css";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  // TODO: Use projectId for API calls and routing

  // Default to Dashboard overview page for project
  // Navigation to other pages handled by specific routes
  console.log("Project ID:", projectId);
  return <DashboardPageOverview />;
};

export default ProjectDetailPage;
