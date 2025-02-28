import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Button } from "./../button";

export const Actions = ({
  checkColumn = false,
  activeSection = "",
  sections = {},
  handleCheckColumn = () => {},
  selectedRows = [],
  cloneCallback = () => {},
  deleteCallback = () => {},
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
      {activeSection && checkColumn
        ? availableActionsWithSelected().map((a, i) => (
            <Button key={i} text={a.text} icon={a.icon} action={a.callback} customClass={a.customClass || ""} />
          ))
        : availableActions().map((a, i) => <Button key={i} text={a.text} icon={a.icon} action={a.callback} />)}
    </div>
  );
};
