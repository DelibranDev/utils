import React from "react";
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
    clients: [],
    products: [],
    fetchOrderDetails: () => null,
    fetchClients: () => null,
    fetchProducts: () => null,
    fetchProductDetails: () => null,
    onUpdateOrder: () => null,
    onAddProduct: () => null,
    onRemoveProduct: () => null,
    onUpdateProductQuantity: () => null,
    onShowAlert: () => null,
    onRefresh: () => null,
    onUpdatePanelData: () => null,
  },
  resumeCallbacks = {
    callbackPrintTicket: () => null,
    callbackCreateInvoice: () => null,
    callbackPrintInvoice: () => null,
    canCreateInvoice: true,
  },
  size = "normal",
  variants = [],
  atributos = [],
}) => {
  console.log(info, details, showProducts, notes, resume, timeline, canEdit);
  return (
    <div className="orderContainer">
      <div className="orderActions">{canEdit && <Edit data={data} {...edition} variants={variants} atributos={atributos} />}</div>
      <div className="order">
        <div className="orderColumn">
          <div className="orderColumnItem">
            {info && <OrderInfo data={data} />}
            {showProducts && <OrderProducts data={data} size={size} variants={variants} atributos={atributos} />}
          </div>
        </div>
        <div className="orderColumn">
          <div className="orderColumnItem">{resume && <OrderResume data={data} />}</div>
          <div className="orderColumnItem">{notes && <OrderNotes data={data} />}</div>
          <div className="orderColumnItem">{details && <ClientDetails data={data} size={size} />}</div>
          <div className="orderColumnItem">{timeline && <OrderTimeline data={data} />}</div>
        </div>
      </div>
    </div>
  );
};
