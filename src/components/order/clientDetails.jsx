import React from "react";
import { MapLocation } from "./../mapLocation";

export const ClientDetails = ({ data }) => {
  const client = data && data.Customer ? data.Customer : {};
  const address = data && data.address ? data.address : [];

  const getFullAddress = () => {
    const { street, zipCode, city, country } = address;
    let fullAddress = "";

    if (street) fullAddress += street;
    if (zipCode) fullAddress += ` ${zipCode}`;
    if (city) fullAddress += `, ${city}`;
    if (country) fullAddress += `, ${country}`;

    return fullAddress.trim();
  };

  // Verificar si hay una dirección completa para pasar al componente MapLocation
  const fullAddress = getFullAddress();

  return (
    <div className="client-details">
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
    </div>
  );
};
