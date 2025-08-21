import React from "react";
import "./Toolbar.css";

const Toolbar = ({
  onAddRecord,
  onCustomizeFields,
  onViewSettings,
  onFilter,
  onGroupBy,
  onSort,
  onRowHeight,
}) => {
  const handleAddRecord = () => {
    console.log("Add new record");
    if (onAddRecord) onAddRecord();
  };

  const actionButtons = [
    { id: "customize", label: "Customize fields", onClick: onCustomizeFields },
    { id: "view", label: "View settings", onClick: onViewSettings },
    { id: "filter", label: "Filter", onClick: onFilter },
    { id: "group", label: "Group by", onClick: onGroupBy },
    { id: "sort", label: "Sort", onClick: onSort },
    { id: "row", label: "Row height", onClick: onRowHeight },
  ];

  return (
    <div className="toolbar">
      <div className="toolbar-container">
        {/* Add New Record Button */}
        <div className="toolbar-left">
          <button className="add-record-btn" onClick={handleAddRecord}>
            <div className="add-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" fill="#3688FF" />
                <path d="M10.5 16.5h15v3z" fill="#5F6379" />
                <path d="M16.5 10.5v15h3z" fill="#5F6379" />
              </svg>
            </div>
            <span className="add-label">Add new record</span>
          </button>
        </div>

        {/* Separator Line */}
        <div className="toolbar-separator"></div>

        {/* Action Buttons */}
        <div className="toolbar-right">
          {actionButtons.map((button) => (
            <button
              key={button.id}
              className="action-button"
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
