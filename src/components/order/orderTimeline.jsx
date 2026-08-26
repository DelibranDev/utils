import React from "react";

export const OrderTimeline = ({ data }) => {
  const orderLog = data?.OrderLog;

  function transformOrderLog(orderLog) {
    if (!orderLog || typeof orderLog !== "object") return [];

    const statusMap = {
      pending: "Productos añadidos al carrito",
      peding: "Productos añadidos al carrito",
      inPreparation: "Pedido en preparación",
      prepared: "Pedido preparado",
      inDelivery: "Pedido en reparto",
      delivered: "Pedido entregado",
      notDelivered: "Entrega fallida",
      returned: "Pedido devuelto",
      canceled: "Pedido cancelado",
      abandoned: "Pedido abandonado",
      reactivated: "Pedido reactivado",
      recoveryEmailSent: "Correo de recuperación enviado",
      paymentCompleted: "Pago completado",
      createdAt: "Pedido creado",
    };

    return Object.entries(orderLog)
      .filter(([key, value]) => statusMap[key] && value)
      .map(([key, value]) => {
        const dateObj = new Date(value);

        return {
          key,
          name: statusMap[key],
          date: `${String(dateObj.getHours()).padStart(2, "0")}:${String(dateObj.getMinutes()).padStart(
            2,
            "0",
          )} de ${dateObj.toLocaleString("es-ES", {
            month: "short",
          })}, ${dateObj.getFullYear()}`,
          timestamp: dateObj.getTime(),
        };
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  }

  const timeline = transformOrderLog(orderLog);

  return (
    <div className="timeline-container">
      <div className="client-details-header">
        <b>Seguimiento</b>
      </div>

      <ul className="timeline">
        {timeline.map((item) => (
          <li key={`${item.key}-${item.timestamp}`}>
            <div className="circleRounded">
              <div className="circle"></div>
            </div>

            <div className="event">
              <div className="event-name">{item.name}</div>
              <div className="event-date">{item.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
