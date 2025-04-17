import React, { useState, useEffect } from "react";
import { sortArrayByCustomOrder } from "./../../function";

export const DatatableComponent = ({
  checkColumn = false,
  data = [],
  customHeaders = {},
  rows = [],
  selectedRows = [],
  customData = {},
  rowCallback = () => {},
  handleSelectRow = () => {},
  handleSelectAllRow = () => {},
  visibleColumns,
}) => {
  console.log("DatatableComponent > data: ", data);
  console.log("DatatableComponent > rows: ", rows);
  const [maxLengthValues, setMaxLengthValues] = useState({});

  function getMaxLengthsByKey() {
    const maxLengths = {};
    const dataArray = rows;
    dataArray.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        let strLength;

        if (typeof value === "number" || typeof value === "string") {
          strLength = String(value).length;
          if (strLength < 10) maxLengths[key] = 110;
          else if (strLength > 9 && strLength < 50) maxLengths[key] = strLength * 8;
          else maxLengths[key] = strLength * 4;
        } else {
          maxLengths[key] = 110;
        }
      });
    });
    setMaxLengthValues(maxLengths);
  }

  useEffect(() => {
    getMaxLengthsByKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  return (
    <div className="desktopDatatable">
      <div className="table-container">
        <table cellSpacing="0">
          <thead>
            <tr>
              {checkColumn && (
                <th className="text-align-center" style={{ width: "50px" }}>
                  {/*<input type="checkbox" className="custom-checkbox" onChange={(e) => handleSelectAllRow(e.target.checked)} />*/}
                </th>
              )}
              {data.length > 0
                ? Object.keys(sortArrayByCustomOrder(customHeaders, data[0]))
                    .filter((field) => field in customHeaders && visibleColumns.includes(field))
                    .map((field, index) => (
                      <th key={index} className="text-align-center" style={{ width: `${maxLengthValues[field] || 100}px` }}>
                        {customHeaders[field]}
                      </th>
                    ))
                : Object.values(customHeaders)?.map((value, index) => (
                    <th key={index} className="text-align-center">
                      {value}
                    </th>
                  ))}
            </tr>
          </thead>
          <tbody id="datatableTBody">
            {rows.map((d, i) => (
              <tr key={d.id || i} className={selectedRows.includes(d.id) ? "rowSelected" : ""}>
                {checkColumn && (
                  <td className="text-align-center" style={{ width: "50px" }}>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      onChange={(e) => handleSelectRow(d.id, e.target.checked)}
                      checked={selectedRows.includes(d.id)}
                    />
                  </td>
                )}
                {Object.keys(sortArrayByCustomOrder(customHeaders, d))
                  .filter((field) => field in customHeaders && visibleColumns.includes(field))
                  .map((field, index) => (
                    <td
                      key={index}
                      className="text-align-center"
                      style={{ width: `${maxLengthValues[field] || 100}px` }}
                      onClick={typeof d[field] === "boolean" || d[field] === "PUBLISHED" || d[field] === "DRAFT" ? null : () => rowCallback(d)}
                    >
                      {customData[field] ? customData[field](d[field], d) : d[field]}
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
