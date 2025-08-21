import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import ProjectCard from "../../components/admin/ProjectCard";
import { projectsApi } from "../../utils/adminApi";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [recentProjects, setRecentProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const projects = await projectsApi.getProjects();
      console.log("AdminDashboard - Raw projects from API:", projects);

      // Transform data to match frontend format
      const transformedProjects = projects.map((project) => ({
        id: project.id,
        name: project.name,
        date: new Date(project.created_date).toLocaleDateString("en-GB"),
        projectId: project.id, // Sử dụng pk thay vì project_id
      }));
      console.log(
        "AdminDashboard - Transformed projects:",
        transformedProjects
      );

      setRecentProjects(transformedProjects);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNewProject = () => {
    console.log("Creating new project...");
    // Implement navigation to create project page
  };

  const handleMoreOptions = (projectId) => {
    console.log("More options for project:", projectId);
    // Implement more options logic
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="admin-dashboard">
          <div className="loading">Loading projects...</div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="admin-dashboard">
          <div className="error">Error: {error}</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="admin-dashboard">
        {/* Start New Project Section */}
        <div className="new-project-section">
          <h2 className="section-title">Start a new project</h2>

          <div className="new-project-card" onClick={handleCreateNewProject}>
            <div className="new-project-icon">
              <div className="plus-icon"></div>
            </div>
            <div className="new-project-text">Create New Project</div>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div className="recent-projects-section">
          <div className="section-header">
            <h2 className="section-title">Recent project</h2>
            <div className="section-actions">
              {/* Sort/Filter icons can be added here */}
              <button className="action-btn" aria-label="Sort projects">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <g transform="translate(4, 14)">
                    <line
                      x1="0"
                      y1="0"
                      x2="16"
                      y2="0"
                      stroke="#000"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="0"
                      y1="10"
                      x2="12"
                      y2="10"
                      stroke="#000"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="0"
                      y1="20"
                      x2="16"
                      y2="20"
                      stroke="#000"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <rect x="20" y="0" width="20" height="20" fill="#000" />
                    <line
                      x1="30"
                      y1="6"
                      x2="30"
                      y2="12"
                      stroke="#000"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </button>

              <button className="action-btn" aria-label="Filter projects">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <g transform="translate(6, 12.5)">
                    <line
                      x1="0"
                      y1="1.5"
                      x2="20"
                      y2="1.5"
                      stroke="#000"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="0"
                      y1="11.5"
                      x2="14"
                      y2="11.5"
                      stroke="#000"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <line
                      x1="0"
                      y1="21.5"
                      x2="10"
                      y2="21.5"
                      stroke="#000"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <rect x="16.5" y="0" width="21" height="23" fill="#000" />
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div className="projects-grid">
            {recentProjects.map((project) => {
              console.log("AdminDashboard - Rendering project:", project);
              return (
                <ProjectCard
                  key={project.id}
                  projectName={project.name}
                  date={project.date}
                  projectId={project.id} // Sử dụng pk thay vì project_id
                  onMoreOptions={() => handleMoreOptions(project.name)}
                >
                  <div className="project-preview">No preview available</div>
                </ProjectCard>
              );
            })}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
