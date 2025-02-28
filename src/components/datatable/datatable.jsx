import React from "react";
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
}) => {
  return (
    <div className="desktopDatatable">
      <div className="table-container">
        <table cellSpacing="0">
          <thead>
            <tr>
              {checkColumn && (
                <th className="text-align-center" style={{ width: "50px" }}>
                  {/* <input type="checkbox" className="custom-checkbox" /> */}
                </th>
              )}
              {data.length > 0
                ? Object.keys(sortArrayByCustomOrder(customHeaders, data[0]))
                    .filter((field) => field in customHeaders)
                    .map((field, index) => (
                      <th key={index} className="text-align-center">
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
                  .filter((field) => field in customHeaders)
                  .map((field, index) => (
                    <td
                      key={index}
                      className="text-align-center"
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
