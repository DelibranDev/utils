import React from "react";

export const OrderTimeline = ({ data }) => {
  const orderLog = data?.OrderLog;

  function transformOrderLog(orderLog) {
    if (!orderLog || typeof orderLog !== "object") return [];

    const statusMap = {
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
      /*updatedAt: "Pedido actualizado",*/
    };

    let events = Object.entries(orderLog)
      .filter(([key, value]) => statusMap[key] && value) // Filtra valores no nulos
      .map(([key, value], index) => {
        const dateObj = new Date(value);
        const formattedDate = `${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, "0")} de ${dateObj.toLocaleString(
          "es-ES",
          {
            month: "short",
          },
        )}, ${dateObj.getFullYear()}`;

        return {
          id: index,
          name: statusMap[key],
          date: formattedDate,
          timestamp: dateObj.getTime(), // Guarda la fecha en timestamp para ordenación
        };
      })
      .sort((a, b) => a.timestamp - b.timestamp) // Ordena por timestamp de menor a mayor
      .map(({ id, name, date }) => ({ id, name, date })); // Elimina el timestamp del resultado final

    return events;
  }

  return (
    <div className="timeline-container">
      <div class="client-details-header">
        <b>Seguimiento</b>
      </div>
      <ul className="timeline">
        {orderLog &&
          transformOrderLog(orderLog)?.map((timeline) => (
            <li>
              <div className="circleRounded">
                <div className="circle"></div>
              </div>
              <div className="event">
                <div className="event-name">{timeline.name}</div>
                <div className="event-date">{timeline.date}</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
