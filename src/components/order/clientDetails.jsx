import React from "react";
import { MapLocation } from "./../mapLocation";
import { getFullAddress } from "../../function";

export const ClientDetails = ({ data }) => {
  const client = data && data.Customer ? data.Customer : {};
  const address = data && data.address ? data.address : [];

  // Verificar si hay una dirección completa para pasar al componente MapLocation
  const fullAddress = getFullAddress(address);

  return (
    <div className="client-details">
      {client.fullname === "Cliente contado" ? (
        <div className="client-details-container">Sin datos de cliente</div>
      ) : (
        <>
          <div className="client-details-container">
            <div className="client-details-header">Cliente</div>
            <div className="client-details-sub">{client.fullname}</div>
            <div className="client-details-sub">0 pedidos</div>
          </div>
          <div className="client-details-container">
            <div className="client-details-header">Información de contacto</div>
            <div className="client-details-sub">{client.email}</div>
            <div className="client-details-sub">{client.phone}</div>
          </div>
          <div className="client-details-container">
            <div className="client-details-header">Dirección de envío</div>
            <div className="client-details-address">
              {fullAddress && <MapLocation address={fullAddress} height={"100px"} />}
              <div className="client-details-address-container">
                <div className="client-details-address-name">{address.name}</div>
                <div className="client-details-header">{client.fullname}</div>
                <div className="client-details-third">{fullAddress}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
