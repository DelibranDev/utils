import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Button } from "./../button";
import { Input } from "./../input";
import { PiColumnsPlusLeftFill, PiColumnsPlusLeftLight } from "react-icons/pi";

export const Actions = ({
  checkColumn = false,
  activeSection = "",
  sections = {},
  handleCheckColumn = () => {},
  selectedRows = [],
  cloneCallback = () => {},
  deleteCallback = () => {},
  setSearch,
  customHeaders,
  handleVisibleColumns,
  visibleColumns,
  toggleColumnPanel,
  showToggleColumnPanel,
}) => {
  console.log(customHeaders);
  const actions = [
    { id: "search", text: "Buscar", icon: <HiOutlineSearch />, callback: () => null },
    { id: "filter", text: "Filtrar", icon: <HiOutlineSearch />, callback: () => null },
    { id: "order", text: "Ordenar", icon: <HiOutlineSearch />, callback: () => null },
    { id: "select", text: "Seleccionar", icon: "", callback: handleCheckColumn },
  ];

  const actionsWithSelected = [
    { id: "clone", text: "Duplicar", icon: <HiOutlineSearch />, callback: () => cloneCallback(selectedRows), customClass: "customButtonColor1" },
    { id: "delete", text: "Eliminar", icon: <HiOutlineSearch />, callback: () => deleteCallback(selectedRows), customClass: "customButtonColor1" },
    { id: "cancel", text: "Cancelar", icon: "", callback: handleCheckColumn, customClass: "customButtonColor2" },
  ];

  const ToggleColumn = () => {
    const handleToggleColumnPanel = () => {
      showToggleColumnPanel(!toggleColumnPanel);
    };
    return (
      <>
        <div style={{ cursor: "pointer" }} onClick={handleToggleColumnPanel}>
          <PiColumnsPlusLeftLight size={"2rem"} />
        </div>
        {toggleColumnPanel && (
          <div className="toggleColumnPanel">
            {Object.entries(customHeaders).map(([clave, valor]) => (
              <div key={clave} className="toggleColumnPanelItem">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  onChange={() => handleVisibleColumns(clave)}
                  checked={visibleColumns.includes(clave)}
                />
                {`${valor}`}
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  const handleSearch = (e) => {
    setSearch(e);
  };

  const availableActions = () => {
    return sections?.[activeSection]?.actions ? actions.filter((f) => sections[activeSection].actions.includes(f.id)) : [];
  };

  const availableActionsWithSelected = () => {
    return sections?.[activeSection]?.actionsWithSelect
      ? actionsWithSelected.filter((f) => sections[activeSection].actionsWithSelect.includes(f.id))
      : [];
  };

  return (
    <div className="actionsDatatable">
      {checkColumn
        ? availableActionsWithSelected().map((a, i) => (
            <Button key={i} text={a.text} icon={a.icon} action={a.callback} customClass={a.customClass || ""} />
          ))
        : availableActions()
            .filter((f) => f.id !== "search")
            .map((a, i) => <Button key={i} text={a.text} icon={a.icon} action={a.callback} />)}
      {availableActions().some((obj) => obj.id === "search") && (
        <div className="flex-start" style={{ width: "250px", gap: "15px" }}>
          <Input
            id={""}
            type={""}
            placeholder={"Buscar"}
            classname={"text-align-right"}
            icon={null}
            iconType={null}
            iconPositionRight={true}
            label={""}
            description={""}
            defaultValue={""}
            disabled={false}
            validation={null}
            onWritting={handleSearch}
          />
          <ToggleColumn />
        </div>
      )}
    </div>
  );
};
