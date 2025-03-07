import React from "react";
import { LuUser } from "react-icons/lu";
import "./style.css";

export const CardList = ({ title = "", icon = <LuUser />, data, callback = () => null }) => {
  const ItemCard = ({ data }) => {
    return (
      <div className="cardUser" onClick={() => callback(data)}>
        <div className="userIcon">{icon}</div>
        <div className="username ellipsis">{data.fullname || data.name}</div>
      </div>
    );
  };
  return (
    <div>
      <div className="cardLabel">{title}</div>
      <div className="cardList">
        {data.map((card) => (
          <ItemCard data={card} />
        ))}
      </div>
    </div>
  );
};
