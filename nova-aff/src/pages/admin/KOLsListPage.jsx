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
import { kolsApi } from "../../utils/adminApi";
import "./KOLsListPage.css";

const KOLsListPage = () => {
  const { projectId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newKolData, setNewKolData] = useState({
    full_name: "",
    submitted_on: new Date().toLocaleDateString("en-GB"),
    email: "",
    phone_number: "",
    zalo: "",
    tiktok_url: "",
    tiktok_id: "",
    followers: "0",
    gmv: "0",
    channel_identifier: "",
    appropriate_channel_topic: "None",
    shipping_address: "",
    brand_approval: "None",
    note: "None",
    kol_koc_approval_time: new Date().toLocaleDateString("en-GB"),
    number_tracking: "",
    koc_confirmed_by_nova: "None",
    video_file: null,
  });

  // Editing state
  const [editingCell, setEditingCell] = useState(null);

  useEffect(() => {
    if (projectId) {
      fetchKOLs();
    }
  }, [projectId]);

  const fetchKOLs = async () => {
    try {
      setLoading(true);
      const kols = await kolsApi.getKOLs(projectId);

      // Transform data to match frontend format
      const transformedData = kols.map((kol) => ({
        id: kol.id,
        selected: false,
        fullName: kol.full_name,
        submittedOn: kol.submitted_on, // Sử dụng trực tiếp từ backend
        email: kol.email,
        phoneNumber: kol.phone_number,
        zalo: kol.zalo,
        tiktokUrl: kol.tiktok_url,
        tiktokId: kol.tiktok_id,
        followers: kol.followers,
        gmv: kol.gmv,
        channelIdentifier: kol.channel_identifier,
        appropriateChannelTopic: kol.appropriate_channel_topic,
        shippingAddress: kol.shipping_address,
        brandApproval: kol.brand_approval,
        note: kol.note,
        kolKocApprovalTime: kol.kol_koc_approval_time, // Sử dụng trực tiếp từ backend
        numberTracking: kol.number_tracking,
        kocConfirmedByNova: kol.koc_confirmed_by_nova,
      }));

      setData(transformedData);
    } catch (err) {
      console.error("Error fetching KOLs:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Column sizing
  const [columnSizing, setColumnSizing] = useState({
    select: 60,
    fullName: 150,
    submittedOn: 130,
    email: 200,
    phoneNumber: 140,
    zalo: 120,
    tiktokUrl: 200,
    tiktokId: 120,
    followers: 100,
    gmv: 80,
    channelIdentifier: 180,
    appropriateChannelTopic: 220,
    shippingAddress: 200,
    brandApproval: 130,
    note: 100,
    kolKocApprovalTime: 180,
    numberTracking: 140,
    kocConfirmedByNova: 180,
  });

  // Helper function for creating editable cell
  const EditableCell = ({ getValue, row, column }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
    const isEditing =
      editingCell?.rowId === row.original.id &&
      editingCell?.columnId === column.id;

    // Update value when initialValue changes
    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const onBlur = async () => {
      try {
        // Update data in backend
        const kolData = {
          full_name: row.original.fullName,
          submitted_on: row.original.submittedOn,
          email: row.original.email,
          phone_number: row.original.phoneNumber,
          zalo: row.original.zalo,
          tiktok_url: row.original.tiktokUrl,
          tiktok_id: row.original.tiktokId,
          followers: row.original.followers,
          gmv: row.original.gmv,
          channel_identifier: row.original.channelIdentifier,
          appropriate_channel_topic: row.original.appropriateChannelTopic,
          shipping_address: row.original.shippingAddress,
          brand_approval: row.original.brandApproval,
          note: row.original.note,
          kol_koc_approval_time: row.original.kolKocApprovalTime,
          number_tracking: row.original.numberTracking,
          koc_confirmed_by_nova: row.original.kocConfirmedByNova,
        };

        // Update the specific field
        const fieldName = column.id.replace(/([A-Z])/g, "_$1").toLowerCase();
        kolData[fieldName] = value;

        await kolsApi.updateKOL(projectId, row.original.id, kolData);

        // Reload data from backend to ensure consistency
        await fetchKOLs();

        setEditingCell(null);
      } catch (err) {
        console.error("Error updating KOL:", err);
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
        accessorKey: "fullName",
        header: "Full name",
        cell: EditableCell,
        size: 150,
        enableResizing: true,
      },
      {
        accessorKey: "submittedOn",
        header: "Submitted on",
        cell: EditableCell,
        size: 130,
        enableResizing: true,
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: EditableCell,
        size: 200,
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
        accessorKey: "zalo",
        header: "Zalo",
        cell: EditableCell,
        size: 120,
        enableResizing: true,
      },
      {
        accessorKey: "tiktokUrl",
        header: "Tiktok Url",
        cell: EditableCell,
        size: 200,
        enableResizing: true,
      },
      {
        accessorKey: "tiktokId",
        header: "Tiktok Id",
        cell: EditableCell,
        size: 120,
        enableResizing: true,
      },
      {
        accessorKey: "followers",
        header: "Followers",
        cell: EditableCell,
        size: 100,
        enableResizing: true,
      },
      {
        accessorKey: "gmv",
        header: "GMV",
        cell: EditableCell,
        size: 80,
        enableResizing: true,
      },
      {
        accessorKey: "channelIdentifier",
        header: "Channel identifier",
        cell: EditableCell,
        size: 180,
        enableResizing: true,
      },
      {
        accessorKey: "appropriateChannelTopic",
        header: "Appropriate channel topic",
        cell: EditableCell,
        size: 220,
        enableResizing: true,
      },
      {
        accessorKey: "shippingAddress",
        header: "Shipping address",
        cell: EditableCell,
        size: 200,
        enableResizing: true,
      },
      {
        accessorKey: "brandApproval",
        header: "Brand approval",
        cell: EditableCell,
        size: 130,
        enableResizing: true,
      },
      {
        accessorKey: "note",
        header: "Note",
        cell: EditableCell,
        size: 100,
        enableResizing: true,
      },
      {
        accessorKey: "kolKocApprovalTime",
        header: "KOL/KOC approval time",
        cell: EditableCell,
        size: 180,
        enableResizing: true,
      },
      {
        accessorKey: "numberTracking",
        header: "Number tracking",
        cell: EditableCell,
        size: 140,
        enableResizing: true,
      },
      {
        accessorKey: "kocConfirmedByNova",
        header: "KOC confirmed by Nova",
        cell: EditableCell,
        size: 180,
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
    columnResizeMode: "onChange", // Thay đổi từ onChange sang onEnd
    columnResizeDirection: "ltr",
    enableColumnResizing: true, // Thêm explicit enable
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
    setNewKolData({
      full_name: "",
      submitted_on: new Date().toLocaleDateString("en-GB"),
      email: "",
      phone_number: "",
      zalo: "",
      tiktok_url: "",
      tiktok_id: "",
      followers: "0",
      gmv: "0",
      channel_identifier: "",
      appropriate_channel_topic: "None",
      shipping_address: "",
      brand_approval: "None",
      note: "None",
      kol_koc_approval_time: new Date().toLocaleDateString("en-GB"),
      number_tracking: "",
      koc_confirmed_by_nova: "None",
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
      setNewKolData({
        ...newKolData,
        video_file: file,
      });
    }
  };

  const handleDoneAdd = async () => {
    try {
      // Validate required fields
      if (!newKolData.full_name.trim()) {
        alert("Full name is required");
        return;
      }

      if (!newKolData.email.trim()) {
        alert("Email is required");
        return;
      }

      // Validate and format TikTok URL
      let tiktokUrl = newKolData.tiktok_url.trim();
      if (
        tiktokUrl &&
        !tiktokUrl.startsWith("http://") &&
        !tiktokUrl.startsWith("https://")
      ) {
        tiktokUrl = "https://" + tiktokUrl;
      }

      // Set number_tracking if empty
      if (!newKolData.number_tracking) {
        newKolData.number_tracking = String(data.length + 1);
      }

      const kolDataToSend = {
        full_name: newKolData.full_name,
        submitted_on: newKolData.submitted_on,
        email: newKolData.email,
        phone_number: newKolData.phone_number,
        zalo: newKolData.zalo,
        tiktok_url: tiktokUrl,
        tiktok_id: newKolData.tiktok_id,
        followers: newKolData.followers,
        gmv: newKolData.gmv,
        channel_identifier: newKolData.channel_identifier,
        appropriate_channel_topic: newKolData.appropriate_channel_topic,
        shipping_address: newKolData.shipping_address,
        brand_approval: newKolData.brand_approval,
        note: newKolData.note,
        kol_koc_approval_time: newKolData.kol_koc_approval_time,
        number_tracking: newKolData.number_tracking,
        koc_confirmed_by_nova: newKolData.koc_confirmed_by_nova,
        video_file: newKolData.video_file, // Thêm video_file
        project: projectId, // Truyền pk của project
      };

      await kolsApi.createKOL(projectId, kolDataToSend);

      // Reload data from backend
      await fetchKOLs();

      // Close form
      setShowAddForm(false);
      setNewKolData({
        full_name: "",
        submitted_on: new Date().toLocaleDateString("en-GB"),
        email: "",
        phone_number: "",
        zalo: "",
        tiktok_url: "",
        tiktok_id: "",
        followers: "0",
        gmv: "0",
        channel_identifier: "",
        appropriate_channel_topic: "None",
        shipping_address: "",
        brand_approval: "None",
        note: "None",
        kol_koc_approval_time: new Date().toLocaleDateString("en-GB"),
        number_tracking: "",
        koc_confirmed_by_nova: "None",
        video_file: null,
      });
    } catch (err) {
      console.error("Error creating KOL:", err);
      if (err.response && err.response.data) {
        const errors = err.response.data;
        let errorMessage = "Validation errors:\n";
        Object.keys(errors).forEach((key) => {
          errorMessage += `${key}: ${errors[key].join(", ")}\n`;
        });
        alert(errorMessage);
      } else {
        alert("Error creating KOL. Please try again.");
      }
    }
  };

  const deleteSelectedRows = async () => {
    try {
      const selectedRowIds = table
        .getSelectedRowModel()
        .rows.map((row) => row.original.id);

      // Delete from backend
      for (const kolId of selectedRowIds) {
        await kolsApi.deleteKOL(projectId, kolId);
      }

      // Reload the entire page
      window.location.reload();
    } catch (err) {
      console.error("Error deleting KOLs:", err);
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
      <div className="kols-list-page">
        <AdminHeader projectTitle={projectData.title} />
        <AdminSidebar activeItem="kols-list" projectId={projectId} />
        <main className="kols-main-content">
          <div className="loading">Loading KOLs...</div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="kols-list-page">
        <AdminHeader projectTitle={projectData.title} />
        <AdminSidebar activeItem="kols-list" projectId={projectId} />
        <main className="kols-main-content">
          <div className="error">Error: {error}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="kols-list-page">
      {/* Fixed Header */}
      <AdminHeader projectTitle={projectData.title} />

      {/* Fixed Sidebar */}
      <AdminSidebar activeItem="kols-list" projectId={projectId} />

      {/* Main Content Area */}
      <main className="kols-main-content">
        {/* Toolbar */}
        <div className="kols-toolbar">
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
              <h3>Add New KOL</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={newKolData.full_name}
                    onChange={(e) =>
                      setNewKolData({
                        ...newKolData,
                        full_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={newKolData.email}
                    onChange={(e) =>
                      setNewKolData({ ...newKolData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    value={newKolData.phone_number}
                    onChange={(e) =>
                      setNewKolData({
                        ...newKolData,
                        phone_number: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Zalo:</label>
                  <input
                    type="text"
                    value={newKolData.zalo}
                    onChange={(e) =>
                      setNewKolData({ ...newKolData, zalo: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>TikTok URL:</label>
                  <input
                    type="url"
                    placeholder="https://www.tiktok.com/@username"
                    value={newKolData.tiktok_url}
                    onChange={(e) =>
                      setNewKolData({
                        ...newKolData,
                        tiktok_url: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>TikTok ID:</label>
                  <input
                    type="text"
                    value={newKolData.tiktok_id}
                    onChange={(e) =>
                      setNewKolData({
                        ...newKolData,
                        tiktok_id: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Followers:</label>
                  <input
                    type="text"
                    value={newKolData.followers}
                    onChange={(e) =>
                      setNewKolData({
                        ...newKolData,
                        followers: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>GMV:</label>
                  <input
                    type="text"
                    value={newKolData.gmv}
                    onChange={(e) =>
                      setNewKolData({ ...newKolData, gmv: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Channel Identifier:</label>
                  <input
                    type="text"
                    value={newKolData.channel_identifier}
                    onChange={(e) =>
                      setNewKolData({
                        ...newKolData,
                        channel_identifier: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Shipping Address:</label>
                  <textarea
                    value={newKolData.shipping_address}
                    onChange={(e) =>
                      setNewKolData({
                        ...newKolData,
                        shipping_address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Number Tracking:</label>
                  <input
                    type="text"
                    value={newKolData.number_tracking}
                    onChange={(e) =>
                      setNewKolData({
                        ...newKolData,
                        number_tracking: e.target.value,
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
                      id="video-upload"
                    />
                    <label
                      htmlFor="video-upload"
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
                    {newKolData.video_file && (
                      <div className="video-preview">
                        <p className="video-name">
                          {newKolData.video_file.name}
                        </p>
                        <p className="video-size">
                          {(newKolData.video_file.size / (1024 * 1024)).toFixed(
                            2
                          )}{" "}
                          MB
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            setNewKolData({ ...newKolData, video_file: null })
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
        <div className="kols-table-container">
          <div className="table-scroll-container">
            <table
              className="kols-table"
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

export default KOLsListPage;
