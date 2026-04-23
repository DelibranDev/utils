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
}) => {
  return (
    <div className="orderContainer">
      <div className="orderActions">
        <Edit data={data} {...edition} />
      </div>
      <div className="order">
        <div className="orderColumn">
          <div className="orderColumnItem">
            <OrderInfo data={data} />
            <OrderProducts data={data} size={size} />
          </div>
        </div>
        <div className="orderColumn">
          <div className="orderColumnItem">
            <OrderResume data={data} />
          </div>
          <div className="orderColumnItem">
            <OrderNotes data={data} />
          </div>
          <div className="orderColumnItem">
            <ClientDetails data={data} size={size} />
          </div>
          <div className="orderColumnItem">
            <OrderTimeline data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
