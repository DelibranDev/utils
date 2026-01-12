import React from "react";
import { StateLabel } from "./../stateLabel";
import { parseDate } from "./../../function";
import "./style.css";

export const OrderInfo = ({ data }) => {
  return (
    <>
      <div className="order-header">
        <div className="order-header-status">
          <StateLabel state={data.status} />
          <div className="order-number">
            <div className="order-label">No. Pedido</div>
            <div className="order-value">{data?.number}</div>
          </div>
        </div>
        <div className="order-info">
          <div className="order-info-time">
            <div className="order-label text-align-right">Fecha del pedido</div>
            <div className="order-value text-align-right">
              {parseDate(data?.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
