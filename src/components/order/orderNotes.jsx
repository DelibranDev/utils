import React from "react";
import "./orderNotes.css";

export const OrderNotes = ({ data }) => {
  const notes = data?.notes?.toString();
  return (
    <div className="orderNotes">
      <div>
        <b>Notas</b>
      </div>
      <div>{!notes ? "Sin notas" : notes}</div>
    </div>
  );
};
