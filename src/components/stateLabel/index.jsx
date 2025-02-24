import React from "react";
import "./style.css";

/**
 * Label personalizado con color y fondo.
 * @constructor
 * @param {string} state - Estado del label: "pending", "paid", "delivered"...
 */
export const StateLabel = ({ state }) => {
  const Label = () => {
    switch (state) {
      case "pending":
        return <div className="state-label state-pending">Pendiente</div>;
      case "prepared":
        return <div className="state-label state-prepared">Preparado</div>;
      case "paid":
        return <div className="state-label state-prepared">Pagado</div>;
      case "delivered":
        return <div className="state-label state-delivered">Entregado</div>;
      case "inPreparation":
        return <div className="state-label state-process">En preparación</div>;
      case "inDelivery":
        return <div className="state-label state-process">Enviando</div>;
      case "cancelled":
        return <div className="state-label state-canceled">Cancelado</div>;

      default:
        return <div>-</div>;
    }
  };
  return <Label />;
};
