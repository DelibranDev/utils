import React, { useMemo, useState } from "react";
import { MdFilterAlt, MdArrowUpward, MdArrowDownward } from "react-icons/md";

const STATUS_LABELS = {
  pending: "Pendiente",
  prepared: "Preparado",
  paid: "Pagado",
  shipped: "Enviado",
  inPreparation: "En preparación",
  inDelivery: "En reparto",
  canceled: "Cancelado",
};

const getObjectLabel = (value) => {
  if (value === null || value === undefined) return "";
  if (typeof value !== "object") return value;

  return value.name ?? value.fullname ?? value.street ?? value.identifier ?? value.email ?? value.number ?? JSON.stringify(value);
};

const isIsoDate = (value) =>
  typeof value === "string" && /^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(value) && !Number.isNaN(new Date(value).getTime());

const getFilterType = (values) => {
  const validValues = values.filter((value) => value !== null && value !== undefined && value !== "");
  if (validValues.length === 0) return "select";
  if (validValues.every((value) => typeof value === "number")) return "number";
  if (validValues.every((value) => isIsoDate(value))) return "date";
  return "select";
};

const getDisplayValue = (field, value) => {
  if (field === "status" || field === "paymentStatus") {
    return STATUS_LABELS[value] ?? value;
  }

  if (typeof value === "boolean") return value ? "Sí" : "No";
  return String(getObjectLabel(value));
};

const ColumnFilter = ({ field, values, filter, onChange, onClose }) => {
  const filterType = getFilterType(values);

  if (filterType === "number") {
    return (
      <div className="columnFilterPopover" onClick={(event) => event.stopPropagation()}>
        <label>
          Mínimo
          <input
            type="number"
            value={filter?.min ?? ""}
            onChange={(event) => onChange({ type: "number", min: event.target.value, max: filter?.max ?? "" })}
          />
        </label>
        <label>
          Máximo
          <input
            type="number"
            value={filter?.max ?? ""}
            onChange={(event) => onChange({ type: "number", min: filter?.min ?? "", max: event.target.value })}
          />
        </label>
        <button type="button" className="columnFilterClose" onClick={onClose}>
          Cerrar
        </button>
      </div>
    );
  }

  if (filterType === "date") {
    return (
      <div className="columnFilterPopover" onClick={(event) => event.stopPropagation()}>
        <label>
          Desde
          <input
            type="date"
            value={filter?.from ?? ""}
            onChange={(event) => onChange({ type: "date", from: event.target.value, to: filter?.to ?? "" })}
          />
        </label>
        <label>
          Hasta
          <input
            type="date"
            value={filter?.to ?? ""}
            onChange={(event) => onChange({ type: "date", from: filter?.from ?? "", to: event.target.value })}
          />
        </label>
        <button type="button" className="columnFilterClose" onClick={onClose}>
          Cerrar
        </button>
      </div>
    );
  }

  const uniqueValues = Array.from(
    new Map(
      values
        .filter((value) => value !== null && value !== undefined && value !== "")
        .map((value) => [String(getObjectLabel(value)), value]),
    ).values(),
  ).sort((a, b) =>
    getDisplayValue(field, a).localeCompare(getDisplayValue(field, b), "es", {
      numeric: true,
      sensitivity: "base",
    }),
  );

  return (
    <div className="columnFilterPopover" onClick={(event) => event.stopPropagation()}>
      <select value={filter?.value ?? ""} onChange={(event) => onChange({ type: "select", value: event.target.value })}>
        <option value="">Todos</option>
        {uniqueValues.map((value) => {
          const rawValue = String(getObjectLabel(value));
          return (
            <option key={rawValue} value={rawValue}>
              {getDisplayValue(field, value)}
            </option>
          );
        })}
      </select>
      <button type="button" className="columnFilterClose" onClick={onClose}>
        Cerrar
      </button>
    </div>
  );
};

export const DatatableComponent = ({
  checkColumn = false,
  data = [],
  customHeaders = {},
  customHeadersStyle = {},
  rows = [],
  selectedRows = [],
  customData = {},
  rowCallback = () => {},
  handleSelectRow = () => {},
  visibleColumns = [],
  columnFilters = {},
  handleColumnFilter = () => {},
  sortConfig = {},
  handleSort = () => {},
}) => {
  const [openFilterColumn, setOpenFilterColumn] = useState(null);
  const MIN_WIDTH = 110;

  const columns = useMemo(
    () => Object.keys(customHeaders).filter((field) => visibleColumns.includes(field)),
    [customHeaders, visibleColumns],
  );

  const maxLengthValues = useMemo(() => {
    const maxLengths = {};

    rows.forEach((item) => {
      columns.forEach((key) => {
        const value = getObjectLabel(item?.[key]);
        const isDataImage = typeof value === "string" && value.startsWith("data:image");
        let width = MIN_WIDTH;

        if (typeof value === "number" || (typeof value === "string" && !isDataImage)) {
          const length = String(value).length;
          if (length >= 10 && length < 50) width = length * 8;
          else if (length >= 50) width = length * 4;
        }

        maxLengths[key] = Math.max(maxLengths[key] ?? MIN_WIDTH, width);
      });
    });

    return maxLengths;
  }, [rows, columns]);

  return (
    <div className="desktopDatatable">
      <div className="table-container">
        <table cellSpacing="0">
          <thead>
            <tr>
              {checkColumn && <th className="text-align-center" style={{ width: "50px" }} />}

              {columns.map((field, columnIndex) => {
                const values = data.map((item) => item?.[field]);
                const hasFilter = Boolean(columnFilters[field]);
                const isSorted = sortConfig.column === field && Boolean(sortConfig.direction);

                return (
                  <th
                    key={field}
                    className={`text-align-center datatableHeaderCell ${columnIndex === 0 ? "datatableHeaderCellFirst" : ""}`}
                    style={{ width: `${customHeadersStyle[field]?.width || maxLengthValues[field] || 100}px` }}
                  >
                    <div className="datatableHeaderContent">
                      <div>
                        <span className="datatableHeaderLabel">{customHeaders[field]}</span>
                      </div>
                      <div className="datatableHeaderActions">
                        <button
                          type="button"
                          className={`datatableHeaderIcon ${isSorted ? "active" : ""}`}
                          title="Ordenar"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleSort(field);
                          }}
                        >
                          {isSorted && sortConfig.direction === "desc" ? <MdArrowDownward /> : <MdArrowUpward />}
                        </button>

                        <button
                          type="button"
                          className={`datatableHeaderIcon ${hasFilter ? "active" : ""}`}
                          title="Filtrar"
                          onClick={(event) => {
                            event.stopPropagation();
                            setOpenFilterColumn((current) => (current === field ? null : field));
                          }}
                        >
                          <MdFilterAlt />
                        </button>
                      </div>
                    </div>

                    {openFilterColumn === field && (
                      <ColumnFilter
                        field={field}
                        values={values}
                        filter={columnFilters[field]}
                        onChange={(filter) => handleColumnFilter(field, filter)}
                        onClose={() => setOpenFilterColumn(null)}
                      />
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody id="datatableTBody">
            {rows.map((row, rowIndex) => (
              <tr key={row.id || row.orderId || rowIndex} className={selectedRows.includes(row.id) ? "rowSelected" : ""}>
                {checkColumn && (
                  <td className="text-align-center checkboxtd" style={{ width: "50px" }}>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      onChange={(event) => handleSelectRow(row.id, event.target.checked)}
                      checked={selectedRows.includes(row.id)}
                    />
                  </td>
                )}

                {columns.map((field) => (
                  <td
                    key={field}
                    className="text-align-center"
                    style={{ width: `${customHeadersStyle[field]?.width || maxLengthValues[field] || 100}px` }}
                    onClick={
                      typeof row[field] === "boolean" || row[field] === "PUBLISHED" || row[field] === "DRAFT"
                        ? undefined
                        : () => rowCallback(row)
                    }
                  >
                    {customData[field]
                      ? customData[field](row[field], row)
                      : field === "status" || field === "paymentStatus"
                        ? (STATUS_LABELS[row[field]] ?? row[field])
                        : row[field]}
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
