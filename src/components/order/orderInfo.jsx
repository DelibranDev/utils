import React from "react";
import { StateLabel } from "./../stateLabel";
import { parseDate } from "./../../function";
import "./orderInfo.css";

const orderNumber = (data) => `${data?.SalesChannel?.identifier || ""}${data?.number ?? ""}`;

export const OrderInfo = ({ data = {}, size = "normal" }) => (
  <div className={`orderInfo ${size !== "normal" ? "orderInfoSmall" : ""}`}>
    <div className="orderHeaderStatus">
      <StateLabel state={data.status} />
      <div className="orderNumber">
        <div className="orderLabel">No. Pedido</div>
        <div className="orderValue">{orderNumber(data)}</div>
      </div>
    </div>
    <div className="orderInfoTime">
      <div className="orderLabel">Fecha del pedido</div>
      <div className="orderValue">{parseDate(data?.createdAt)}</div>
    </div>
  </div>
);
