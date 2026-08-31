import React, { useEffect, useState } from "react";
import { OrderInfo } from "./orderInfo";
import { ClientDetails } from "./clientDetails";
import { OrderNotes } from "./orderNotes";
import { OrderTimeline } from "./orderTimeline";
import { OrderProducts } from "./orderProducts";
import { OrderResume } from "./orderResume";
import { Edit } from "./edition/edit";
import "./order.css";

export const Order = ({
  data,
  info = true,
  details = true,
  showProducts = true,
  notes = true,
  resume = true,
  timeline = true,
  canEdit = true,
  edition = {
    clients: [], products: [], fetchOrderDetails: () => null, fetchClients: () => null,
    fetchProducts: () => null, fetchProductDetails: () => null, onUpdateOrder: () => null,
    onAddProduct: () => null, onRemoveProduct: () => null, onUpdateProductQuantity: () => null,
    onShowAlert: () => null, onRefresh: () => null, onUpdatePanelData: () => null,
  },
  resumeCallbacks = {
    callbackPrintTicket: () => null,
    callbackCreateInvoice: () => null,
    callbackPrintInvoice: () => null,
    callbackRefreshOrder: null,
    canCreateInvoice: true,
  },
  size = "normal",
  variants = [],
  atributos = [],
}) => {
  const [orderData, setOrderData] = useState(data || {});

  useEffect(() => {
    setOrderData(data || {});
  }, [data]);

  return (
    <div className="orderContainer">
      <div className="orderActions">
        {canEdit && <Edit data={orderData} {...edition} variants={variants} atributos={atributos} />}
      </div>
      <div className="order">
        <div className="orderColumn">
          <div className="orderColumnItem">
            {info && <OrderInfo data={orderData} size={size} />}
            {showProducts && <OrderProducts data={orderData} size={size} variants={variants} atributos={atributos} />}
          </div>
        </div>
        <div className="orderColumn orderColumnSecondary">
          <div className="orderColumnItem">
            {resume && <OrderResume data={orderData} {...resumeCallbacks} onDataChange={setOrderData} />}
          </div>
          <div className="orderColumnItem">{notes && <OrderNotes data={orderData} />}</div>
          <div className="orderColumnItem">{details && <ClientDetails data={orderData} size={size} />}</div>
          <div className="orderColumnItem">{timeline && <OrderTimeline data={orderData} />}</div>
        </div>
      </div>
    </div>
  );
};
