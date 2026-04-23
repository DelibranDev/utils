import React from "react";
import { Button } from "../../../button";
import { MdEdit } from "react-icons/md";

export const OrderDataCard = ({ orderForm, setOrderForm, clients, isLoadingClients, isSavingOrder, updatePendingOrderData }) => {
  const handleClientChange = (value) => {
    const selectedClient = clients.find((client) => client.customerId === value);

    setOrderForm((prev) => ({
      ...prev,
      customerId: value,
      email: selectedClient?.email || "",
      phone: selectedClient?.phone || "",
    }));
  };

  return (
    <div className="editOrderCard">
      <h3 className="editOrderCardTitle">Datos del cliente</h3>

      <div className="editOrderGrid">
        <div className="editOrderField">
          <div>Cliente</div>
          <select value={orderForm.customerId} onChange={(e) => handleClientChange(e.target.value)} disabled={isLoadingClients}>
            <option value="">Selecciona un cliente</option>
            {clients.map((client) => (
              <option key={client.customerId} value={client.customerId}>
                {client.fullname} {client.phone ? `- ${client.phone}` : ""}
              </option>
            ))}
          </select>
        </div>

        <div className="editOrderField">
          <div>Email</div>
          <input
            type="text"
            value={orderForm.email}
            onChange={(e) =>
              setOrderForm((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </div>

        <div className="editOrderField">
          <div>Teléfono</div>
          <input
            type="text"
            value={orderForm.phone}
            onChange={(e) =>
              setOrderForm((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
          />
        </div>

        <div className="editOrderField editOrderFieldFull">
          <div>Notas</div>
          <textarea
            rows="4"
            value={orderForm.notes}
            onChange={(e) =>
              setOrderForm((prev) => ({
                ...prev,
                notes: e.target.value,
              }))
            }
          />
        </div>
      </div>

      <div className="editOrderActions">
        <Button
          text={isSavingOrder ? "Guardando..." : "Actualizar cambios del cliente"}
          icon={<MdEdit />}
          customClass={"customButtonColor2"}
          action={updatePendingOrderData}
        />
      </div>
    </div>
  );
};
