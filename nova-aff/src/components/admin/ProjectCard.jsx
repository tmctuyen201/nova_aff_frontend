import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({
  projectName,
  date,
  onMoreOptions,
  children,
  projectId = "1",
}) => {
  console.log("ProjectCard - projectId:", projectId, "Type:", typeof projectId);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const handleMoreOptionsClick = (e) => {
    e.stopPropagation();
    setShowOptions(!showOptions);
    if (onMoreOptions) {
      onMoreOptions();
    }
  };

  const handleCardClick = () => {
    // Navigate to project detail page
    navigate(`/admin/project/${projectId}`);
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      {/* Main content area - can contain images or other content */}
      <div className="project-card-content">{children}</div>

      {/* Separator line */}
      <div className="project-card-separator"></div>

      {/* Project info section */}
      <div className="project-card-info">
        <div className="project-details">
          <div className="project-more-options">
            <button
              className="more-options-btn"
              onClick={handleMoreOptionsClick}
              aria-label="More options"
            >
              <div className="more-options-icon"></div>
            </button>

            {/* Dropdown menu - can be expanded later */}
            {showOptions && (
              <div className="options-dropdown">
                <div className="option-item">Edit</div>
                <div className="option-item">Delete</div>
                <div className="option-item">Share</div>
              </div>
            )}
          </div>

          <div className="project-name">{projectName}</div>

          <div className="project-date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
