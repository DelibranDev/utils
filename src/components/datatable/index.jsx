import React, { useMemo, useState } from "react";
import { Pagination } from "./pagination";
import { DatatableComponent } from "./datatable";
import { Sections } from "./sections";
import { Actions } from "./actions";
import "./style.css";

console.info("[UTILS Datatable v2026.08.26-2] módulo cargado");

const DEFAULT_SECTIONS = [
  {
    text: null,
    callback: () => null,
    actions: ["search"],
    actionsWithSelect: [],
  },
];

const getNestedValue = (item, key) =>
  key.includes(".") ? key.split(".").reduce((acc, current) => acc?.[current], item) : item?.[key];

const isIsoDate = (value) =>
  typeof value === "string" && /^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(value) && !Number.isNaN(new Date(value).getTime());

const getObjectLabel = (value) => {
  if (value === null || value === undefined) return "";
  if (typeof value !== "object") return value;

  return value.name ?? value.fullname ?? value.street ?? value.identifier ?? value.email ?? value.number ?? JSON.stringify(value);
};

const getComparableValue = (item, column) => getObjectLabel(getNestedValue(item, column));

const applyColumnFilters = (items, columnFilters) => {
  return Object.entries(columnFilters).reduce((result, [column, filter]) => {
    if (!filter) return result;

    if (filter.type === "number") {
      const min = filter.min === "" ? null : Number(filter.min);
      const max = filter.max === "" ? null : Number(filter.max);

      return result.filter((item) => {
        const value = Number(getNestedValue(item, column));
        if (Number.isNaN(value)) return false;
        if (min !== null && value < min) return false;
        if (max !== null && value > max) return false;
        return true;
      });
    }

    if (filter.type === "date") {
      const from = filter.from ? new Date(`${filter.from}T00:00:00`).getTime() : null;
      const to = filter.to ? new Date(`${filter.to}T23:59:59.999`).getTime() : null;

      return result.filter((item) => {
        const timestamp = new Date(getNestedValue(item, column)).getTime();
        if (Number.isNaN(timestamp)) return false;
        if (from !== null && timestamp < from) return false;
        if (to !== null && timestamp > to) return false;
        return true;
      });
    }

    if (filter.value === "") return result;

    return result.filter((item) => String(getComparableValue(item, column)) === String(filter.value));
  }, items);
};

export const Datatable = ({
  title = "",
  subtitle = "",
  data = [],
  customHeaders = {
    name: "Nombre",
    description: "Descripción",
  },
  customHeadersStyle = {},
  customData = {},
  sections = DEFAULT_SECTIONS,
  identificator = "default",
  rowCallback = () => null,
  deleteCallback = () => null,
  cloneCallback = () => null,
  handleCheckColumn = () => null,
  handleSelectedRows = () => null,
  checkColumn = false,
  checkedRows = [],
}) => {
  const [selectedRows, setSelectedRows] = useState(() => (checkedRows?.length ? checkedRows : []));
  const [activeSection, setActiveSection] = useState(0);
  const [maxRows, setMaxRows] = useState(12);
  const [indexStart, setIndexStart] = useState(0);
  const [search, setSearch] = useState("");
  const [columnFilters, setColumnFilters] = useState({});
  const [sortConfig, setSortConfig] = useState({ column: null, direction: null });
  const [visibleColumns, setVisibleColumns] = useState(() => Object.keys(customHeaders));
  const [toggleColumnPanel, showToggleColumnPanel] = useState(false);

  const sourceData = Array.isArray(data) ? data : [];

  console.debug("[UTILS Datatable v2026.08.26-2] render", {
    rows: sourceData.length,
    activeSection,
    indexStart,
  });

  const filteredData = useMemo(() => {
    let result = [...sourceData];

    if (search.trim() !== "") {
      const searchLower = search.trim().toLowerCase();
      const keys = Object.keys(customHeaders);

      result = result.filter((item) =>
        keys.some((key) =>
          String(getComparableValue(item, key) ?? "")
            .toLowerCase()
            .includes(searchLower),
        ),
      );
    }

    result = applyColumnFilters(result, columnFilters);

    if (sortConfig.column && sortConfig.direction) {
      const { column, direction } = sortConfig;

      result.sort((a, b) => {
        const rawA = getNestedValue(a, column);
        const rawB = getNestedValue(b, column);

        if (rawA === null || rawA === undefined) return 1;
        if (rawB === null || rawB === undefined) return -1;

        let comparison;

        if (typeof rawA === "number" && typeof rawB === "number") {
          comparison = rawA - rawB;
        } else if (isIsoDate(rawA) && isIsoDate(rawB)) {
          comparison = new Date(rawA).getTime() - new Date(rawB).getTime();
        } else {
          comparison = String(getObjectLabel(rawA)).localeCompare(String(getObjectLabel(rawB)), "es", {
            numeric: true,
            sensitivity: "base",
          });
        }

        return direction === "asc" ? comparison : -comparison;
      });
    }

    return result;
  }, [sourceData, search, customHeaders, columnFilters, sortConfig]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / maxRows));
  const currentPage = Math.min(Math.floor(indexStart / maxRows), totalPages - 1);
  const effectiveIndexStart = currentPage * maxRows;

  const rows = useMemo(
    () => filteredData.slice(effectiveIndexStart, effectiveIndexStart + maxRows),
    [filteredData, effectiveIndexStart, maxRows],
  );

  const configuration = useMemo(
    () => ({
      maxRows,
      indexStart: effectiveIndexStart,
      pages: Array.from({ length: totalPages }, (_, index) => index),
    }),
    [maxRows, effectiveIndexStart, totalPages],
  );

  const handleMaxRows = (value) => {
    const rawValue = typeof value === "object" ? (value?.name ?? value?.value) : value;
    const parsedValue = Number(rawValue);

    if (!Number.isNaN(parsedValue) && parsedValue > 0) {
      setMaxRows(parsedValue);
      setIndexStart(0);
    }
  };

  const handlePage = (page) => {
    setIndexStart(page * maxRows);
    document.getElementById("datatableTBody")?.scrollTo?.({ top: 0 });
  };

  const handleSectionData = (section, callback) => {
    console.debug("[UTILS Datatable v2026.08.26-2] section", section);
    setActiveSection(section);
    setIndexStart(0);
    showToggleColumnPanel(false);
    callback?.();
  };

  const handleSelectRow = (id, isChecked) => {
    setSelectedRows((previousRows) => {
      const updatedRows = isChecked
        ? previousRows.includes(id)
          ? previousRows
          : [...previousRows, id]
        : previousRows.filter((rowId) => rowId !== id);

      handleSelectedRows(updatedRows);
      return updatedRows;
    });
  };

  const handleVisibleColumns = (column) => {
    setVisibleColumns((previousColumns) =>
      previousColumns.includes(column)
        ? previousColumns.filter((currentColumn) => currentColumn !== column)
        : [...previousColumns, column],
    );
  };

  const handleSearch = (value) => {
    setSearch(value ?? "");
    setIndexStart(0);
  };

  const handleColumnFilter = (column, filter) => {
    setColumnFilters((previousFilters) => {
      const nextFilters = { ...previousFilters };
      const isEmptySelect = filter.type === "select" && filter.value === "";
      const isEmptyNumber = filter.type === "number" && filter.min === "" && filter.max === "";
      const isEmptyDate = filter.type === "date" && filter.from === "" && filter.to === "";

      if (isEmptySelect || isEmptyNumber || isEmptyDate) {
        delete nextFilters[column];
      } else {
        nextFilters[column] = filter;
      }

      return nextFilters;
    });

    setIndexStart(0);
  };

  const handleSort = (column) => {
    setSortConfig((previousSort) => {
      if (previousSort.column !== column) return { column, direction: "asc" };
      if (previousSort.direction === "asc") return { column, direction: "desc" };
      return { column: null, direction: null };
    });

    setIndexStart(0);
  };

  const clearFilters = () => {
    setColumnFilters({});
    setSearch("");
    setIndexStart(0);
  };

  const rowCallbackHandler = (row) => {
    showToggleColumnPanel(false);
    rowCallback(row);
  };

  return (
    <div className="datatable" data-identificator={identificator}>
      {title !== "" && (
        <div>
          <div className="inputLabel">{title}</div>
          <div className="inputDescription">{subtitle}</div>
        </div>
      )}

      <div className="adminPanel">
        <div className="headerDatatable">
          <Sections sections={sections} activeSection={activeSection} handleSectionData={handleSectionData} />
          <Actions
            checkColumn={checkColumn}
            activeSection={activeSection}
            sections={sections}
            handleCheckColumn={handleCheckColumn}
            selectedRows={selectedRows}
            cloneCallback={cloneCallback}
            deleteCallback={deleteCallback}
            search={search}
            setSearch={handleSearch}
            customHeaders={customHeaders}
            handleVisibleColumns={handleVisibleColumns}
            visibleColumns={visibleColumns}
            toggleColumnPanel={toggleColumnPanel}
            showToggleColumnPanel={showToggleColumnPanel}
            clearFilters={clearFilters}
            hasActiveFilters={search !== "" || Object.keys(columnFilters).length > 0}
          />
        </div>

        <DatatableComponent
          checkColumn={checkColumn}
          data={sourceData}
          customHeaders={customHeaders}
          customHeadersStyle={customHeadersStyle}
          rows={rows}
          selectedRows={selectedRows}
          customData={customData}
          rowCallback={rowCallbackHandler}
          handleSelectRow={handleSelectRow}
          visibleColumns={visibleColumns}
          columnFilters={columnFilters}
          handleColumnFilter={handleColumnFilter}
          sortConfig={sortConfig}
          handleSort={handleSort}
        />
      </div>

      <div className="flex">
        <div className="datatableFooterInfo">
          <span>
            {filteredData.length} {filteredData.length === 1 ? "resultado" : "resultados"}
          </span>
        </div>

        <Pagination
          configuration={configuration}
          maxRowsAvailable={false}
          handleMaxRows={handleMaxRows}
          handlePage={handlePage}
        />
      </div>
    </div>
  );
};
