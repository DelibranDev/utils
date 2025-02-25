import React from "react";

export const OrderNotes = ({ data }) => {
  const notes = data?.notes?.toString();
  return (
    <>
      <div>
        <b>Notas</b>
      </div>
      <div>{notes === "" ? "Sin notas" : notes}</div>
    </>
  );
};
