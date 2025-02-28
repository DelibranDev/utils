import React from "react";
import { Select } from "./../select";
import "./style.css";

export const Pagination = ({ configuration, maxRowsAvailable, handleMaxRows, handlePage }) => {
  return (
    <div className="pagination">
      {maxRowsAvailable && (
        <div className="paginationDropdown">
          <div className="paginationText">Mostrar</div>
          <div>
            <Select
              values={[
                { id: 0, name: "12" },
                { id: 1, name: "24" },
              ]}
              callback={handleMaxRows}
            />
          </div>
          <div className="paginationText">por página</div>
        </div>
      )}
      <div className="paginationPages">
        {configuration.pages?.map((p) => {
          return (
            <div
              className={(configuration.indexStart + 12) / configuration.maxRows === p + 1 ? "pageBtn pageBtnActive" : "pageBtn"}
              onClick={() => handlePage(p)}
            >
              {p + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};
