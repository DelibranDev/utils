import React from "react";
import { MapLocation } from "./../mapLocation";
import { getFullAddress } from "../../function";
import "./clientDetails.css";

export const ClientDetails = ({ data = {}, size = "normal" }) => {
  const client = data?.Customer || {};
  const address = data?.address || {};
  const fullAddress = getFullAddress(address);
  const email = client?.email || data?.email || "";
  const phone = client?.phone || data?.phone || "";
  const contact = (
    <>
      {email && <a className="clientContactLink" href={`mailto:${email}`}>{email}</a>}
      {phone && <a className="clientContactLink" href={`tel:${String(phone).replace(/\s+/g, "")}`}>{phone}</a>}
    </>
  );

  if (client.fullname === "Cliente contado") return <div className="clientDetails"><div className="clientDetailsContainer">Sin datos de cliente</div></div>;

  if (size !== "normal") return (
    <div className="clientDetails clientDetailsSmall">
      <div className="clientDetailsContainer"><strong>{client.fullname}</strong><span>{fullAddress}</span>{contact}</div>
    </div>
  );

  return (
    <div className="clientDetails">
      <div className="clientDetailsContainer"><div className="clientDetailsHeader">Cliente</div><div className="clientDetailsSub">{client.fullname}</div></div>
      <div className="clientDetailsContainer"><div className="clientDetailsHeader">Información de contacto</div>{contact}</div>
      <div className="clientDetailsContainer">
        <div className="clientDetailsHeader">Dirección de envío</div>
        <div className="clientDetailsAddress">
          {fullAddress && <div className="clientDetailsMap"><MapLocation address={fullAddress} height="100px" /></div>}
          <div className="clientDetailsAddressText"><div>{address.name}</div><strong>{client.fullname}</strong><div>{fullAddress}</div></div>
        </div>
      </div>
    </div>
  );
};
