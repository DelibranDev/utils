import React from "react";
import { MdSearch, MdClose, MdViewColumn } from "react-icons/md";
import { Button } from "./../button";

export const Actions = ({
  checkColumn = false,
  activeSection = 0,
  sections = [],
  handleCheckColumn = () => {},
  selectedRows = [],
  cloneCallback = () => {},
  deleteCallback = () => {},
  setSearch = () => {},
  search = "",
  customHeaders = {},
  handleVisibleColumns = () => {},
  visibleColumns = [],
  toggleColumnPanel = false,
  showToggleColumnPanel = () => {},
  clearFilters = () => {},
  hasActiveFilters = false,
}) => {
  const actions = [
    { id: "search", text: "Buscar", icon: <MdSearch />, callback: () => null },
    { id: "select", text: "Seleccionar", icon: null, callback: handleCheckColumn },
  ];

  const actionsWithSelected = [
    {
      id: "clone",
      text: "Duplicar",
      icon: null,
      callback: () => cloneCallback(selectedRows),
      customClass: "customButtonColor1",
    },
    {
      id: "delete",
      text: "Eliminar",
      icon: null,
      callback: () => deleteCallback(selectedRows),
      customClass: "customButtonColor1",
    },
    {
      id: "cancel",
      text: "Cancelar",
      icon: null,
      callback: handleCheckColumn,
      customClass: "customButtonColor2",
    },
  ];

  const currentSection = sections?.[activeSection] ?? {};
  const availableActions = actions.filter((action) => currentSection.actions?.includes(action.id));
  const availableActionsWithSelected = actionsWithSelected.filter((action) =>
    currentSection.actionsWithSelect?.includes(action.id),
  );
  const hasSearch = availableActions.some((action) => action.id === "search");

  return (
    <div className="actionsDatatable">
      {checkColumn
        ? availableActionsWithSelected.map((action) => (
            <Button
              key={action.id}
              text={action.text}
              icon={action.icon}
              action={action.callback}
              customClass={action.customClass || ""}
            />
          ))
        : availableActions
            .filter((action) => action.id !== "search")
            .map((action) => <Button key={action.id} text={action.text} icon={action.icon} action={action.callback} />)}

      {!checkColumn && hasActiveFilters && (
        <Button
          text="Limpiar filtros"
          icon={<MdClose />}
          action={clearFilters}
          customClass="datatableClearFilters"
        />
      )}

      {hasSearch && (
        <div className="datatableSearchTools">
          <div className="datatableSearchWrapper">
            <MdSearch className="datatableSearchIcon" />
            <input
              className="datatableSearchInput"
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="toggleColumnContainer">
            <button
              type="button"
              className="toggleColumnButton"
              title="Mostrar u ocultar columnas"
              onClick={() => showToggleColumnPanel(!toggleColumnPanel)}
            >
              <MdViewColumn size="2rem" />
            </button>

            {toggleColumnPanel && (
              <div className="toggleColumnPanel">
                {Object.entries(customHeaders).map(([key, value]) => (
                  <label key={key} className="toggleColumnPanelItem">
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      onChange={() => handleVisibleColumns(key)}
                      checked={visibleColumns.includes(key)}
                    />
                    {String(value)}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
