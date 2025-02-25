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
        <div className="order-header-time">
          <div className="order-label">Tiempo de preparación</div>
          <div className="order-value">00:00:00</div>
        </div>
      </div>
      <div className="order-header-2">
        <div className="order-info">
          <div className="order-info-time">
            <div className="order-label">Fecha del pedido</div>
            <div className="order-value">{parseDate(data?.createdAt)}</div>
          </div>
          {/*<button className="order-info-button">
          Hacer devolución
        </button>*/}
        </div>
      </div>
    </>
  );
};
