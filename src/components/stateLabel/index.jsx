import React from "react";
import "./style.css";

export const StateLabel = ({ state, text = null }) => {
  /*const dictionary = [
    {pending: "Pendiente", value:"pending"},
    {prepared: "Preparado", value:"ready"},
  ];*/
  const Label = () => {
    switch (state) {
      case "pending":
        return <div className="state-label state-pending">{text || "Pendiente"}</div>;
      case "prepared":
        return <div className="state-label state-prepared">{text || "Preparado"}</div>;
      case "paid":
        return <div className="state-label state-prepared">{text || "Pagado"}</div>;
      case "active":
        return <div className="state-label state-prepared">{text || "Activo"}</div>;
      case "delivered":
        return <div className="state-label state-delivered">{text || "Entregado"}</div>;
      case "inPreparation":
        return <div className="state-label state-process">{text || "En preparación"}</div>;
      case "inDelivery":
        return <div className="state-label state-process">{text || "Enviando"}</div>;
      case "cancelled":
        return <div className="state-label state-canceled">{text || "Cancelado"}</div>;
      case "inactive":
        return <div className="state-label state-canceled">{text || "Inactivo"}</div>;

      default:
        return <div>-</div>;
    }
  };
  return <Label />;
};
