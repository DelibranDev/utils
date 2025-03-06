import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Button } from "./../button";
import { Input } from "./../input";

export const Actions = ({
  checkColumn = false,
  activeSection = "",
  sections = {},
  handleCheckColumn = () => {},
  selectedRows = [],
  cloneCallback = () => {},
  deleteCallback = () => {},
  setSearch,
}) => {
  const actions = [
    { id: "search", text: "Buscar", icon: <HiOutlineSearch />, callback: () => console.log("Buscar action") },
    { id: "filter", text: "Filtrar", icon: <HiOutlineSearch />, callback: () => null },
    { id: "order", text: "Ordenar", icon: <HiOutlineSearch />, callback: () => null },
    { id: "select", text: "Seleccionar", icon: "", callback: handleCheckColumn },
  ];

  const actionsWithSelected = [
    { id: "clone", text: "Duplicar", icon: <HiOutlineSearch />, callback: () => cloneCallback(selectedRows), customClass: "customButtonColor1" },
    { id: "delete", text: "Eliminar", icon: <HiOutlineSearch />, callback: () => deleteCallback(selectedRows), customClass: "customButtonColor1" },
    { id: "cancel", text: "Cancelar", icon: "", callback: handleCheckColumn, customClass: "customButtonColor2" },
  ];

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
      {console.log(availableActions())}
      {activeSection && checkColumn
        ? availableActionsWithSelected().map((a, i) => (
            <Button key={i} text={a.text} icon={a.icon} action={a.callback} customClass={a.customClass || ""} />
          ))
        : availableActions()
            .filter((f) => f.id !== "search")
            .map((a, i) => <Button key={i} text={a.text} icon={a.icon} action={a.callback} />)}
      {availableActions().some((obj) => obj.id === "search") && (
        <div>
          <Input
            id={""}
            type={""}
            placeholder={"Buscar"}
            classname={"inputTextRight"}
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
        </div>
      )}
    </div>
  );
};
