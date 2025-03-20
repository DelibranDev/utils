import React from "react";
import "./style.css";

export const StateLabel = ({ state }) => {
  /*const dictionary = [
    {pending: "Pendiente", value:"pending"},
    {prepared: "Preparado", value:"ready"},
  ];*/
  const Label = () => {
    switch (state) {
      case "pending":
        return <div className="state-label state-pending">Pendiente</div>;
      case "prepared":
        return <div className="state-label state-prepared">Preparado</div>;
      case "paid":
        return <div className="state-label state-prepared">Pagado</div>;
      case "active":
        return <div className="state-label state-prepared">Activo</div>;
      case "delivered":
        return <div className="state-label state-delivered">Entregado</div>;
      case "inPreparation":
        return <div className="state-label state-process">En preparación</div>;
      case "inDelivery":
        return <div className="state-label state-process">Enviando</div>;
      case "cancelled":
        return <div className="state-label state-canceled">Cancelado</div>;
      case "inactive":
        return <div className="state-label state-canceled">Inactivo</div>;

      default:
        return <div>-</div>;
    }
  };
  return <Label />;
};
