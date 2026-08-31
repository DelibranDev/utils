import React from "react";
import { Button } from "../../../button";
import { MdRefresh, MdClose } from "react-icons/md";
import "./OrderHeader.css";

export const OrderHeader = ({ order, refreshAllData, handleClosePanel }) => {
  return (
    <div className="editOrderHeader">
      <div>
        <h2 className="editOrderTitle">Modificar pedido</h2>
        <p className="editOrderSubtitle">{order?.number ? `Pedido ${order?.SalesChannel?.identifier || ""}${order.number}` : "Cargando pedido..."}</p>
      </div>
      <div className="editOrderHeaderActions">
        <Button
          text={"Eliminar cambios no guardados"}
          icon={<MdRefresh />}
          customClass={"customButtonColor1"}
          action={refreshAllData}
        />
        <Button
          text={""}
          icon={<MdClose />}
          customClass={"fixIconButton buttonNoBorder customButtonColor1"}
          action={handleClosePanel}
        />
      </div>
    </div>
  );
};
