import React from "react";
import { StateLabel } from "./../stateLabel";
import { parseDate } from "./../../function";
import "./style.css";

export const OrderInfo = ({ data, size = "normal" }) => {
  console.log("=== OrderInfo ===");
  const NormalInfo = () => {
    return (
      <>
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
            <div className="order-value text-align-right">{parseDate(data?.createdAt)}</div>
          </div>
        </div>
      </>
    );
  };

  const SmallInfo = () => {
    return (
      <>
        <div className="order-header-status">
          <StateLabel state={data.status} />
          <div className="order-number">
            <div className="order-label">No. Pedido</div>
            <div className="order-value" style={{ fontSize: "1rem" }}>
              {data?.number}
            </div>
          </div>
        </div>
        <div className="order-info">
          <div className="order-info-time">
            <div className="order-label text-align-right">Fecha del pedido</div>
            <div className="order-value text-align-right" style={{ fontSize: "1rem" }}>
              {parseDate(data?.createdAt, small)}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="order-header">{size === "normal" ? <NormalInfo /> : <SmallInfo />}</div>
    </>
  );
};
