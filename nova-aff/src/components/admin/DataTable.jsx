import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import "./DataTable.css";

const DataTable = () => {
  // Sample data with IDs
  const [data, setData] = useState([
    {
      id: 1,
      selected: false,
      fullName: "Nguyễn Văn A",
      submittedOn: "2025/06/24",
      email: "abc12345@gmail.com",
      phoneNumber: "0123456789",
      zalo: "0123456789",
      tiktokUrl: "https://www.tiktok.com/@dramin",
      tiktokId: "dramin.vn",
      followers: "900",
      gmv: "0",
      channelIdentifier: "VNEXxx123414",
      appropriateChannelTopic: "None",
      shippingAddress: "Thach That, Hoa Lac",
      brandApproval: "None",
      note: "None",
      kolKocApprovalTime: "2025/06/24",
      numberTracking: "1",
      kocConfirmedByNova: "None",
    },
    {
      id: 2,
      selected: false,
      fullName: "Nguyễn Văn B",
      submittedOn: "2025/06/24",
      email: "abc12345@gmail.com",
      phoneNumber: "0123456789",
      zalo: "0123456789",
      tiktokUrl: "https://www.tiktok.com/@dramin",
      tiktokId: "dramin.vn",
      followers: "900",
      gmv: "0",
      channelIdentifier: "VNEXxx123414",
      appropriateChannelTopic: "None",
      shippingAddress: "Thach That, Hoa Lac",
      brandApproval: "None",
      note: "None",
      kolKocApprovalTime: "2025/06/24",
      numberTracking: "2",
      kocConfirmedByNova: "None",
    },
    // Generate more sample rows
    ...Array.from({ length: 18 }, (_, i) => ({
      id: i + 3,
      selected: false,
      fullName: `Nguyễn ${i % 2 === 0 ? "Văn" : "Thị"} ${String.fromCharCode(
        67 + i
      )}`,
      submittedOn: "2025/06/24",
      email: "abc12345@gmail.com",
      phoneNumber: "0123456789",
      zalo: "0123456789",
      tiktokUrl: "https://www.tiktok.com/@dramin",
      tiktokId: "dramin.vn",
      followers: "900",
      gmv: "0",
      channelIdentifier: "VNEXxx123414",
      appropriateChannelTopic: "None",
      shippingAddress: "Thach That, Hoa Lac",
      brandApproval: "None",
      note: "None",
      kolKocApprovalTime: "2025/06/24",
      numberTracking: String(i + 3),
      kocConfirmedByNova: "None",
    })),
  ]);

  // Editing state
  const [editingCell, setEditingCell] = useState(null);

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
  const EditableCell = ({ getValue, row, column, table }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
    const isEditing =
      editingCell?.rowId === row.original.id &&
      editingCell?.columnId === column.id;

    // Update value when initialValue changes
    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    const onBlur = () => {
      table.options.meta?.updateData(row.index, column.id, value);
      setEditingCell(null);
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
        minSize: 50,
        maxSize: 80,
        enableResizing: true,
      },
      {
        accessorKey: "fullName",
        header: "Full name",
        cell: EditableCell,
        size: 150,
        minSize: 120,
        maxSize: 250,
        enableResizing: true,
      },
      {
        accessorKey: "submittedOn",
        header: "Submitted on",
        cell: EditableCell,
        size: 130,
        minSize: 100,
        maxSize: 180,
        enableResizing: true,
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: EditableCell,
        size: 200,
        minSize: 150,
        maxSize: 300,
        enableResizing: true,
      },
      {
        accessorKey: "phoneNumber",
        header: "Phone number",
        cell: EditableCell,
        size: 140,
        minSize: 120,
        maxSize: 180,
        enableResizing: true,
      },
      {
        accessorKey: "zalo",
        header: "Zalo",
        cell: EditableCell,
        size: 120,
        minSize: 80,
        maxSize: 150,
        enableResizing: true,
      },
      {
        accessorKey: "tiktokUrl",
        header: "Tiktok Url",
        cell: EditableCell,
        size: 200,
        minSize: 150,
        maxSize: 350,
        enableResizing: true,
      },
      {
        accessorKey: "tiktokId",
        header: "Tiktok Id",
        cell: EditableCell,
        size: 120,
        minSize: 80,
        maxSize: 180,
        enableResizing: true,
      },
      {
        accessorKey: "followers",
        header: "Followers",
        cell: EditableCell,
        size: 100,
        minSize: 80,
        maxSize: 130,
        enableResizing: true,
      },
      {
        accessorKey: "gmv",
        header: "GMV",
        cell: EditableCell,
        size: 80,
        minSize: 60,
        maxSize: 120,
        enableResizing: true,
      },
      {
        accessorKey: "channelIdentifier",
        header: "Channel identifier",
        cell: EditableCell,
        size: 180,
        minSize: 150,
        maxSize: 250,
        enableResizing: true,
      },
      {
        accessorKey: "appropriateChannelTopic",
        header: "Appropriate channel topic",
        cell: EditableCell,
        size: 220,
        minSize: 180,
        maxSize: 300,
        enableResizing: true,
      },
      {
        accessorKey: "shippingAddress",
        header: "Shipping address",
        cell: EditableCell,
        size: 200,
        minSize: 150,
        maxSize: 300,
        enableResizing: true,
      },
      {
        accessorKey: "brandApproval",
        header: "Brand approval",
        cell: EditableCell,
        size: 130,
        minSize: 100,
        maxSize: 180,
        enableResizing: true,
      },
      {
        accessorKey: "note",
        header: "Note",
        cell: EditableCell,
        size: 100,
        minSize: 60,
        maxSize: 200,
        enableResizing: true,
      },
      {
        accessorKey: "kolKocApprovalTime",
        header: "KOL/KOC approval time",
        cell: EditableCell,
        size: 180,
        minSize: 150,
        maxSize: 250,
        enableResizing: true,
      },
      {
        accessorKey: "numberTracking",
        header: "Number tracking",
        cell: EditableCell,
        size: 140,
        minSize: 100,
        maxSize: 200,
        enableResizing: true,
      },
      {
        accessorKey: "kocConfirmedByNova",
        header: "KOC confirmed by Nova",
        cell: EditableCell,
        size: 180,
        minSize: 150,
        maxSize: 250,
        enableResizing: true,
      },
    ],
    [editingCell]
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
  const addRow = () => {
    const newRow = {
      id: Math.max(...data.map((r) => r.id)) + 1,
      selected: false,
      fullName: "",
      submittedOn: new Date().toISOString().split("T")[0].replace(/-/g, "/"),
      email: "",
      phoneNumber: "",
      zalo: "",
      tiktokUrl: "",
      tiktokId: "",
      followers: "0",
      gmv: "0",
      channelIdentifier: "",
      appropriateChannelTopic: "None",
      shippingAddress: "",
      brandApproval: "None",
      note: "None",
      kolKocApprovalTime: new Date()
        .toISOString()
        .split("T")[0]
        .replace(/-/g, "/"),
      numberTracking: String(data.length + 1),
      kocConfirmedByNova: "None",
    };
    setData([...data, newRow]);
  };

  const deleteSelectedRows = () => {
    const selectedRowIds = table
      .getSelectedRowModel()
      .rows.map((row) => row.original.id);
    setData((prev) => prev.filter((row) => !selectedRowIds.includes(row.id)));
    table.resetRowSelection();
  };

  // Action buttons handlers
  const handleCustomizeFields = () => {
    console.log("Customize fields clicked");
    // TODO: Implement customize fields functionality
  };

  const handleViewSettings = () => {
    console.log("View settings clicked");
    // TODO: Implement view settings functionality
  };

  const handleFilter = () => {
    console.log("Filter clicked");
    // TODO: Implement filter functionality
  };

  const handleGroupBy = () => {
    console.log("Group by clicked");
    // TODO: Implement group by functionality
  };

  const handleSort = () => {
    console.log("Sort clicked");
    // TODO: Implement sort functionality
  };

  const handleRowHeight = () => {
    console.log("Row height clicked");
    // TODO: Implement row height functionality
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

  return (
    <div className="enhanced-data-table-container">
      {/* Toolbar */}
      <div className="data-table-toolbar">
        <div className="toolbar-left">
          <button onClick={addRow} className="toolbar-btn primary">
            + Add Row
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

      {/* Scrollable Table Container */}
      <div className="table-scroll-container">
        <table
          className="tanstack-table"
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
