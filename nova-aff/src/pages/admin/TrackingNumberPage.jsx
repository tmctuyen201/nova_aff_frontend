import React, { useState, useMemo, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useParams } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { trackingNumbersApi } from "../../utils/adminApi";
import "./TrackingNumberPage.css";

const TrackingNumberPage = () => {
  const { projectId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTrackingData, setNewTrackingData] = useState({
    phone_number: "",
    tracking_date: new Date().toLocaleDateString("en-GB"),
    phone_check: false,
    video_file: null, // Thêm field video
  });

  // Editing state
  const [editingCell, setEditingCell] = useState(null);

  useEffect(() => {
    if (projectId) {
      fetchTrackingNumbers();
    }
  }, [projectId]);

  const fetchTrackingNumbers = async () => {
    try {
      setLoading(true);
      const trackingNumbers = await trackingNumbersApi.getTrackingNumbers(
        projectId
      );

      // Transform data to match frontend format
      const transformedData = trackingNumbers.map((tracking) => ({
        id: tracking.id,
        selected: false,
        trackingNumber: tracking.tracking_number,
        phoneNumber: tracking.phone_number,
        trackingUrl: tracking.tracking_url,
        phoneCheck: tracking.phone_check,
        trackingDate: tracking.tracking_date, // Sử dụng trực tiếp từ backend
        tiktokId: tracking.tiktok_id,
      }));

      setData(transformedData);
    } catch (err) {
      console.error("Error fetching tracking numbers:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Column sizing
  const [columnSizing, setColumnSizing] = useState({
    select: 60,
    trackingNumber: 150,
    phoneNumber: 140,
    trackingUrl: 250,
    phoneCheck: 120,
    trackingDate: 140,
    tiktokId: 150,
  });

  // Helper function for creating editable cell
  const EditableCell = ({ getValue, row, column }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
    const isEditing =
      editingCell?.rowId === row.original.id &&
      editingCell?.columnId === column.id;

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const onBlur = async () => {
      try {
        // Update data in backend
        const trackingData = {
          tracking_number: row.original.trackingNumber,
          phone_number: row.original.phoneNumber,
          tracking_url: row.original.trackingUrl,
          phone_check: row.original.phoneCheck,
          tracking_date: row.original.trackingDate,
          tiktok_id: row.original.tiktokId,
        };

        // Update the specific field
        const fieldName = column.id.replace(/([A-Z])/g, "_$1").toLowerCase();
        trackingData[fieldName] = value;

        await trackingNumbersApi.updateTrackingNumber(
          projectId,
          row.original.id,
          trackingData
        );

        // Reload data from backend to ensure consistency
        await fetchTrackingNumbers();

        setEditingCell(null);
      } catch (err) {
        console.error("Error updating tracking number:", err);
        setValue(initialValue);
        setEditingCell(null);
      }
    };

    const onDoubleClick = () => {
      setEditingCell({ rowId: row.original.id, columnId: column.id });
    };

    const onKeyDown = (e) => {
      if (e.key === "Enter") {
        onBlur();
      } else if (e.key === "Escape") {
        setValue(initialValue);
        setEditingCell(null);
      }
    };

    if (isEditing) {
      return (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className="cell-input"
          autoFocus
        />
      );
    }

    return (
      <div onDoubleClick={onDoubleClick} className="cell-content">
        {value}
      </div>
    );
  };

  // Phone check cell component
  const PhoneCheckCell = ({ getValue, row }) => {
    const checked = getValue();

    const handleChange = async (e) => {
      try {
        const trackingData = {
          tracking_number: row.original.trackingNumber,
          phone_number: row.original.phoneNumber,
          tracking_url: row.original.trackingUrl,
          phone_check: e.target.checked,
          tracking_date: row.original.trackingDate,
          tiktok_id: row.original.tiktokId,
        };

        await trackingNumbersApi.updateTrackingNumber(
          projectId,
          row.original.id,
          trackingData
        );

        // Reload data from backend to ensure consistency
        await fetchTrackingNumbers();
      } catch (err) {
        console.error("Error updating phone check:", err);
      }
    };

    return (
      <div className="phone-check-cell">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="phone-check-box"
        />
      </div>
    );
  };

  // Define columns with TanStack Table
  const columns = useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            className="checkbox"
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
            className="checkbox"
          />
        ),
        size: 60,
        enableResizing: true,
      },
      {
        accessorKey: "trackingNumber",
        header: "Tracking number",
        cell: EditableCell,
        size: 150,
        enableResizing: true,
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone number",
        cell: EditableCell,
        size: 140,
        enableResizing: true,
      },
      {
        accessorKey: "trackingUrl",
        header: "Tracking Url",
        cell: EditableCell,
        size: 250,
        enableResizing: true,
      },
      {
        accessorKey: "phoneCheck",
        header: "Phone check",
        cell: PhoneCheckCell,
        size: 120,
        enableResizing: true,
      },
      {
        accessorKey: "trackingDate",
        header: "Tracking date",
        cell: EditableCell,
        size: 140,
        enableResizing: true,
      },
      {
        accessorKey: "tiktokId",
        header: "Tiktok Id",
        cell: EditableCell,
        size: 150,
        enableResizing: true,
      },
    ],
    [editingCell, projectId]
  );

  // Create table instance
  const table = useReactTable({
    data,
    columns,
    state: {
      columnSizing,
    },
    onColumnSizingChange: setColumnSizing,
    columnResizeMode: "onChange",
    enableColumnResizing: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableRowSelection: true,
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });

  // Row operations
  const handleAddNewRecord = () => {
    setShowAddForm(true);
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
    setNewTrackingData({
      tracking_number: "",
      phone_number: "",
      tracking_url: "https://parcelsapp.com/...",
      phone_check: false,
      tracking_date: new Date().toLocaleDateString("en-GB"),
      tiktok_id: "",
      video_file: null,
    });
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Kiểm tra loại file
      if (!file.type.startsWith("video/")) {
        alert("Vui lòng chọn file video!");
        return;
      }
      // Kiểm tra kích thước file (max 50MB)
      if (file.size > 50 * 1024 * 1024) {
        alert("File video quá lớn! Vui lòng chọn file nhỏ hơn 50MB.");
        return;
      }
      setNewTrackingData({
        ...newTrackingData,
        video_file: file,
      });
    }
  };

  const handleDoneAdd = async () => {
    try {
      // Validate required fields
      if (!newTrackingData.tracking_number.trim()) {
        alert("Tracking number is required");
        return;
      }

      if (!newTrackingData.phone_number.trim()) {
        alert("Phone number is required");
        return;
      }

      // Validate and format tracking_url
      let trackingUrl = newTrackingData.tracking_url.trim();
      if (
        trackingUrl &&
        !trackingUrl.startsWith("http://") &&
        !trackingUrl.startsWith("https://")
      ) {
        trackingUrl = "https://" + trackingUrl;
      }

      // Set tracking_number if empty
      if (!newTrackingData.tracking_number) {
        newTrackingData.tracking_number = String(data.length + 1);
      }

      const trackingDataToSend = {
        tracking_number: newTrackingData.tracking_number,
        phone_number: newTrackingData.phone_number,
        tracking_url: trackingUrl,
        phone_check: newTrackingData.phone_check,
        tracking_date: newTrackingData.tracking_date,
        tiktok_id: newTrackingData.tiktok_id,
        video_file: newTrackingData.video_file, // Thêm video_file
        project: projectId, // Sử dụng pk của project
      };

      console.log("Video file to send:", newTrackingData.video_file);
      console.log("Tracking data to send:", trackingDataToSend);

      await trackingNumbersApi.createTrackingNumber(
        projectId,
        trackingDataToSend
      );

      // Reload data from backend
      await fetchTrackingNumbers();

      // Close form
      setShowAddForm(false);
      setNewTrackingData({
        tracking_number: "",
        phone_number: "",
        tracking_url: "https://parcelsapp.com/...",
        phone_check: false,
        tracking_date: new Date().toLocaleDateString("en-GB"),
        tiktok_id: "",
        video_file: null,
      });
    } catch (err) {
      console.error("Error creating tracking number:", err);
      if (err.response && err.response.data) {
        const errors = err.response.data;
        let errorMessage = "Validation errors:\n";
        Object.keys(errors).forEach((key) => {
          errorMessage += `${key}: ${errors[key].join(", ")}\n`;
        });
        alert(errorMessage);
      } else {
        alert("Error creating tracking number. Please try again.");
      }
    }
  };

  const deleteSelectedRows = async () => {
    try {
      const selectedRowIds = table
        .getSelectedRowModel()
        .rows.map((row) => row.original.id);

      // Delete from backend
      for (const trackingId of selectedRowIds) {
        await trackingNumbersApi.deleteTrackingNumber(projectId, trackingId);
      }

      // Reload the entire page
      window.location.reload();
    } catch (err) {
      console.error("Error deleting tracking numbers:", err);
    }
  };

  // Action buttons handlers
  const handleCustomizeFields = () => {
    console.log("Customize fields clicked");
  };

  const handleViewSettings = () => {
    console.log("View settings clicked");
  };

  const handleFilter = () => {
    console.log("Filter clicked");
  };

  const handleGroupBy = () => {
    console.log("Group by clicked");
  };

  const handleSort = () => {
    console.log("Sort clicked");
  };

  const handleRowHeight = () => {
    console.log("Row height clicked");
  };

  const actionButtons = [
    {
      id: "customize",
      label: "Customize fields",
      onClick: handleCustomizeFields,
    },
    { id: "view", label: "View settings", onClick: handleViewSettings },
    { id: "filter", label: "Filter", onClick: handleFilter },
    { id: "group", label: "Group by", onClick: handleGroupBy },
    { id: "sort", label: "Sort", onClick: handleSort },
    { id: "row", label: "Row height", onClick: handleRowHeight },
  ];

  const selectedCount = table.getSelectedRowModel().rows.length;

  // Project data
  const projectData = {
    title: "April project",
    id: "project-1",
    createdDate: "01/04/2025",
  };

  if (loading) {
    return (
      <div className="tracking-number-page">
        <AdminHeader projectTitle={projectData.title} />
        <AdminSidebar activeItem="tracking-number" projectId={projectId} />
        <main className="tracking-main-content">
          <div className="loading">Loading tracking numbers...</div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tracking-number-page">
        <AdminHeader projectTitle={projectData.title} />
        <AdminSidebar activeItem="tracking-number" projectId={projectId} />
        <main className="tracking-main-content">
          <div className="error">Error: {error}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="tracking-number-page">
      {/* Fixed Header */}
      <AdminHeader projectTitle={projectData.title} />

      {/* Fixed Sidebar */}
      <AdminSidebar activeItem="tracking-number" projectId={projectId} />

      {/* Main Content Area */}
      <main className="tracking-main-content">
        {/* Toolbar */}
        <div className="tracking-toolbar">
          <div className="toolbar-left">
            <button
              onClick={handleAddNewRecord}
              className="toolbar-btn primary"
            >
              + Add new record
            </button>
            <button
              onClick={deleteSelectedRows}
              className="toolbar-btn danger"
              disabled={selectedCount === 0}
            >
              Delete ({selectedCount})
            </button>
          </div>

          <div className="toolbar-center">
            {actionButtons.map((button) => (
              <button
                key={button.id}
                onClick={button.onClick}
                className="toolbar-btn secondary"
              >
                {button.label}
              </button>
            ))}
          </div>

          <div className="toolbar-right">
            <button
              onClick={() => table.toggleAllRowsSelected()}
              className="toolbar-btn"
            >
              {table.getIsAllRowsSelected() ? "Deselect All" : "Select All"}
            </button>
            <span className="selection-info">
              {selectedCount} of {data.length} selected
            </span>
          </div>
        </div>

        {/* Add Form Modal */}
        {showAddForm && (
          <div className="add-form-modal">
            <div className="add-form-content">
              <h3>Add New Tracking Number</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Tracking Number:</label>
                  <input
                    type="text"
                    value={newTrackingData.tracking_number}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        tracking_number: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    value={newTrackingData.phone_number}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        phone_number: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Tracking URL:</label>
                  <input
                    type="url"
                    value={newTrackingData.tracking_url}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        tracking_url: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone Check:</label>
                  <input
                    type="checkbox"
                    checked={newTrackingData.phone_check}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        phone_check: e.target.checked,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Tracking Date:</label>
                  <input
                    type="date"
                    value={newTrackingData.tracking_date}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        tracking_date: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>TikTok ID:</label>
                  <input
                    type="text"
                    value={newTrackingData.tiktok_id}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        tiktok_id: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Video Upload:</label>
                  <div className="video-upload-container">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      className="video-upload-input"
                      id="video-upload-tracking-number"
                    />
                    <label
                      htmlFor="video-upload-tracking-number"
                      className="video-upload-label"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Choose Video File</span>
                    </label>
                    {newTrackingData.video_file && (
                      <div className="video-preview">
                        <p className="video-name">
                          {newTrackingData.video_file.name}
                        </p>
                        <p className="video-size">
                          {(
                            newTrackingData.video_file.size /
                            (1024 * 1024)
                          ).toFixed(2)}{" "}
                          MB
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            setNewTrackingData({
                              ...newTrackingData,
                              video_file: null,
                            })
                          }
                          className="remove-video-btn"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button onClick={handleCancelAdd} className="btn-cancel">
                  Cancel
                </button>
                <button onClick={handleDoneAdd} className="btn-done">
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Data Table Container */}
        <div className="tracking-table-container">
          <div className="table-scroll-container">
            <table
              className="tracking-table"
              style={{ width: table.getTotalSize() }}
            >
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="table-header-row">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="table-header-cell"
                        style={{ width: header.getSize() }}
                      >
                        <div className="header-content">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </div>

                        {/* Column Resizer */}
                        {header.column.getCanResize() && (
                          <div
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                            className={`table-resizer ${
                              header.column.getIsResizing() ? "isResizing" : ""
                            }`}
                          />
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="table-body-row">
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="table-body-cell"
                        style={{ width: cell.column.getSize() }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrackingNumberPage;
