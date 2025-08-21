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
import { dataTrackingApi } from "../../utils/adminApi";
import "./DataTrackingPage.css";

const DataTrackingPage = () => {
  const { projectId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTrackingData, setNewTrackingData] = useState({
    creator: "",
    creator_id: "",
    about_video: "The Power of Creativity",
    video_id: "",
    upload_time:
      new Date()
        .toISOString()
        .replace("T", "/")
        .split(".")[0]
        .replace(/-/g, "/") + "h",
    view: 0,
    like: 0,
    share: 0,
    comment: 0,
    product_linked: "https://www.tiktok...",
    new_followers: 0,
    product_impressions: 0,
    product_entries: 0,
    gmv: 0,
    ctr: 0,
    revenue_from_videos: 0,
    video_file: null, // Thêm field video
  });

  // Editing state
  const [editingCell, setEditingCell] = useState(null);

  useEffect(() => {
    if (projectId) {
      fetchDataTracking();
    }
  }, [projectId]);

  const fetchDataTracking = async () => {
    try {
      setLoading(true);
      const dataTracking = await dataTrackingApi.getDataTracking(projectId);

      // Transform data to match frontend format
      const transformedData = dataTracking.map((tracking) => ({
        id: tracking.id,
        selected: false,
        creator: tracking.creator,
        creatorId: tracking.creator_id,
        aboutVideo: tracking.about_video,
        videoId: tracking.video_id,
        uploadTime: tracking.upload_time,
        view: tracking.view,
        like: tracking.like,
        share: tracking.share,
        comment: tracking.comment,
        productLinked: tracking.product_linked,
        newFollowers: tracking.new_followers,
        productImpressions: tracking.product_impressions,
        productEntries: tracking.product_entries,
        gmv: tracking.gmv,
        ctr: tracking.ctr,
        revenueFromVideos: tracking.revenue_from_videos,
      }));

      setData(transformedData);
    } catch (err) {
      console.error("Error fetching data tracking:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Column sizing
  const [columnSizing, setColumnSizing] = useState({
    select: 60,
    creator: 140,
    creatorId: 120,
    aboutVideo: 180,
    videoId: 120,
    uploadTime: 160,
    view: 100,
    like: 100,
    share: 100,
    comment: 120,
    productLinked: 200,
    newFollowers: 140,
    productImpressions: 160,
    productEntries: 140,
    gmv: 100,
    ctr: 100,
    revenueFromVideos: 160,
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
          creator: row.original.creator,
          creator_id: row.original.creatorId,
          about_video: row.original.aboutVideo,
          video_id: row.original.videoId,
          upload_time: row.original.uploadTime,
          view: row.original.view,
          like: row.original.like,
          share: row.original.share,
          comment: row.original.comment,
          product_linked: row.original.productLinked,
          new_followers: row.original.newFollowers,
          product_impressions: row.original.productImpressions,
          product_entries: row.original.productEntries,
          gmv: row.original.gmv,
          ctr: row.original.ctr,
          revenue_from_videos: row.original.revenueFromVideos,
        };

        // Update the specific field
        const fieldName = column.id.replace(/([A-Z])/g, "_$1").toLowerCase();
        trackingData[fieldName] = value;

        // Convert date fields back to correct format if they were edited
        if (fieldName === "upload_time") {
          // upload_time is already in correct format (YYYY/MM/DD/HH:MMh)
          // No conversion needed
        }

        await dataTrackingApi.updateDataTracking(
          projectId,
          row.original.id,
          trackingData
        );

        // Reload data from backend to ensure consistency
        await fetchDataTracking();

        setEditingCell(null);
      } catch (err) {
        console.error("Error updating data tracking:", err);
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

  // Creator checkbox cell component
  const CreatorCell = ({ getValue }) => {
    const creatorName = getValue();

    return (
      <div className="creator-cell">
        <span className="creator-name">{creatorName}</span>
      </div>
    );
  };

  // Define columns based on Figma design
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
        accessorKey: "creator",
        header: "Creator",
        cell: CreatorCell,
        size: 140,
        enableResizing: true,
      },
      {
        accessorKey: "creatorId",
        header: "Creator Id",
        cell: EditableCell,
        size: 120,
        enableResizing: true,
      },
      {
        accessorKey: "aboutVideo",
        header: "About video",
        cell: EditableCell,
        size: 180,
        enableResizing: true,
      },
      {
        accessorKey: "videoId",
        header: "Video Id",
        cell: EditableCell,
        size: 120,
        enableResizing: true,
      },
      {
        accessorKey: "uploadTime",
        header: "Upload time",
        cell: EditableCell,
        size: 160,
        enableResizing: true,
      },
      {
        accessorKey: "view",
        header: "#View",
        cell: EditableCell,
        size: 100,
        enableResizing: true,
      },
      {
        accessorKey: "like",
        header: "#Like",
        cell: EditableCell,
        size: 100,
        enableResizing: true,
      },
      {
        accessorKey: "share",
        header: "#Share",
        cell: EditableCell,
        size: 100,
        enableResizing: true,
      },
      {
        accessorKey: "comment",
        header: "#Comment",
        cell: EditableCell,
        size: 120,
        enableResizing: true,
      },
      {
        accessorKey: "productLinked",
        header: "Product linked",
        cell: EditableCell,
        size: 200,
        enableResizing: true,
      },
      {
        accessorKey: "newFollowers",
        header: "#New followers",
        cell: EditableCell,
        size: 140,
        enableResizing: true,
      },
      {
        accessorKey: "productImpressions",
        header: "#Product impressions",
        cell: EditableCell,
        size: 160,
        enableResizing: true,
      },
      {
        accessorKey: "productEntries",
        header: "#Product entries",
        cell: EditableCell,
        size: 140,
        enableResizing: true,
      },
      {
        accessorKey: "gmv",
        header: "#GMV",
        cell: EditableCell,
        size: 100,
        enableResizing: true,
      },
      {
        accessorKey: "ctr",
        header: "#CTR",
        cell: EditableCell,
        size: 100,
        enableResizing: true,
      },
      {
        accessorKey: "revenueFromVideos",
        header: "#Revenue from videos",
        cell: EditableCell,
        size: 160,
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
      creator: "",
      creator_id: "",
      about_video: "The Power of Creativity",
      video_id: "",
      upload_time:
        new Date()
          .toISOString()
          .replace("T", "/")
          .split(".")[0]
          .replace(/-/g, "/") + "h",
      view: 0,
      like: 0,
      share: 0,
      comment: 0,
      product_linked: "https://www.tiktok...",
      new_followers: 0,
      product_impressions: 0,
      product_entries: 0,
      gmv: 0,
      ctr: 0,
      revenue_from_videos: 0,
      video_file: null, // Thêm field video
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
      if (!newTrackingData.creator.trim()) {
        alert("Creator is required");
        return;
      }

      if (!newTrackingData.creator_id.trim()) {
        alert("Creator ID is required");
        return;
      }

      // Validate and format product_linked URL
      let productLinked = newTrackingData.product_linked.trim();
      if (
        productLinked &&
        !productLinked.startsWith("http://") &&
        !productLinked.startsWith("https://")
      ) {
        productLinked = "https://" + productLinked;
      }

      const trackingDataToSend = {
        creator: newTrackingData.creator,
        creator_id: newTrackingData.creator_id,
        about_video: newTrackingData.about_video,
        video_id: newTrackingData.video_id,
        upload_time: newTrackingData.upload_time,
        view: parseInt(newTrackingData.view) || 0,
        like: parseInt(newTrackingData.like) || 0,
        share: parseInt(newTrackingData.share) || 0,
        comment: parseInt(newTrackingData.comment) || 0,
        product_linked: productLinked,
        new_followers: parseInt(newTrackingData.new_followers) || 0,
        product_impressions: parseInt(newTrackingData.product_impressions) || 0,
        product_entries: parseInt(newTrackingData.product_entries) || 0,
        gmv: parseInt(newTrackingData.gmv) || 0,
        ctr: parseInt(newTrackingData.ctr) || 0,
        revenue_from_videos: parseInt(newTrackingData.revenue_from_videos) || 0,
        video_file: newTrackingData.video_file, // Thêm video_file
        project: projectId, // Sử dụng pk của project
      };

      await dataTrackingApi.createDataTracking(projectId, trackingDataToSend);

      // Reload data from backend
      await fetchDataTracking();

      // Close form
      setShowAddForm(false);
      setNewTrackingData({
        creator: "",
        creator_id: "",
        about_video: "The Power of Creativity",
        video_id: "",
        upload_time:
          new Date()
            .toISOString()
            .replace("T", "/")
            .split(".")[0]
            .replace(/-/g, "/") + "h",
        view: 0,
        like: 0,
        share: 0,
        comment: 0,
        product_linked: "https://www.tiktok...",
        new_followers: 0,
        product_impressions: 0,
        product_entries: 0,
        gmv: 0,
        ctr: 0,
        revenue_from_videos: 0,
        video_file: null, // Thêm field video
      });
    } catch (err) {
      console.error("Error creating data tracking:", err);
      if (err.response && err.response.data) {
        const errors = err.response.data;
        let errorMessage = "Validation errors:\n";
        Object.keys(errors).forEach((key) => {
          errorMessage += `${key}: ${errors[key].join(", ")}\n`;
        });
        alert(errorMessage);
      } else {
        alert("Error creating data tracking. Please try again.");
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
        await dataTrackingApi.deleteDataTracking(projectId, trackingId);
      }

      // Reload the entire page
      window.location.reload();
    } catch (err) {
      console.error("Error deleting data tracking:", err);
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
      <div className="data-tracking-page">
        <AdminHeader projectTitle={projectData.title} />
        <AdminSidebar activeItem="data-tracking" projectId={projectId} />
        <main className="data-tracking-main-content">
          <div className="loading">Loading data tracking...</div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="data-tracking-page">
        <AdminHeader projectTitle={projectData.title} />
        <AdminSidebar activeItem="data-tracking" projectId={projectId} />
        <main className="data-tracking-main-content">
          <div className="error">Error: {error}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="data-tracking-page">
      {/* Fixed Header */}
      <AdminHeader projectTitle={projectData.title} />

      {/* Fixed Sidebar */}
      <AdminSidebar activeItem="data-tracking" projectId={projectId} />

      {/* Main Content Area */}
      <main className="data-tracking-main-content">
        {/* Toolbar */}
        <div className="data-tracking-toolbar">
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
              <h3>Add New Data Tracking</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Creator:</label>
                  <input
                    type="text"
                    value={newTrackingData.creator}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        creator: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Creator ID:</label>
                  <input
                    type="text"
                    value={newTrackingData.creator_id}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        creator_id: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>About Video:</label>
                  <input
                    type="text"
                    value={newTrackingData.about_video}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        about_video: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Video ID:</label>
                  <input
                    type="text"
                    value={newTrackingData.video_id}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        video_id: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Upload Time:</label>
                  <input
                    type="text"
                    value={newTrackingData.upload_time}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        upload_time: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>View:</label>
                  <input
                    type="number"
                    value={newTrackingData.view}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        view: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Like:</label>
                  <input
                    type="number"
                    value={newTrackingData.like}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        like: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Share:</label>
                  <input
                    type="number"
                    value={newTrackingData.share}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        share: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Comment:</label>
                  <input
                    type="number"
                    value={newTrackingData.comment}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        comment: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Product Linked:</label>
                  <input
                    type="url"
                    value={newTrackingData.product_linked}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        product_linked: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>New Followers:</label>
                  <input
                    type="number"
                    value={newTrackingData.new_followers}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        new_followers: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Product Impressions:</label>
                  <input
                    type="number"
                    value={newTrackingData.product_impressions}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        product_impressions: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Product Entries:</label>
                  <input
                    type="number"
                    value={newTrackingData.product_entries}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        product_entries: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>GMV:</label>
                  <input
                    type="number"
                    value={newTrackingData.gmv}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        gmv: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>CTR:</label>
                  <input
                    type="number"
                    value={newTrackingData.ctr}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        ctr: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Revenue from Videos:</label>
                  <input
                    type="number"
                    value={newTrackingData.revenue_from_videos}
                    onChange={(e) =>
                      setNewTrackingData({
                        ...newTrackingData,
                        revenue_from_videos: parseInt(e.target.value) || 0,
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
                      id="video-upload-tracking"
                    />
                    <label
                      htmlFor="video-upload-tracking"
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
        <div className="data-tracking-table-container">
          <div className="table-scroll-container">
            <table
              className="data-tracking-table"
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

export default DataTrackingPage;
