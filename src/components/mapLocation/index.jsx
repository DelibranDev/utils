import React from "react";
import { useState, useEffect } from "react";

export const MAPS_API_KEY = "AIzaSyArOoqzUgxtt2rxD8v6MLPbXFMp4YPUIz4";

export const MapLocation = ({ lat = null, lon = null, address = null, height = "300px" }) => {
  const [loc, setLoc] = useState({ lat, lon, address });
  const [error, setError] = useState(null);

  const normalizeAddress = (rawAddress) => {
    return rawAddress
      .replace(/([a-zA-Z]+)(\d+)/g, "$1 $2")
      .replace(/,/g, " ")
      .replace(/\s+/g, "+");
  };

  const getGeocode = async (rawAddress) => {
    if (!rawAddress) return;

    try {
      const normalizedAddress = encodeURIComponent(normalizeAddress(rawAddress)) + "+España";
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${normalizedAddress}&key=${MAPS_API_KEY}`);

      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setLoc({ lat, lon: lng, address: rawAddress });
        setError(null); // Se limpia el error porque se encontró una dirección válida
      } else {
        setLoc({ lat: null, lon: null, address: rawAddress });
        setError(`No se encontró la dirección: "${rawAddress}"`);
      }
    } catch (err) {
      setLoc({ lat: null, lon: null, address: rawAddress });
      setError("Error al conectar con el servidor de mapas");
    }
  };

  useEffect(() => {
    if (!lat && !lon && address) {
      getGeocode(address);
    } else {
      setLoc({ lat, lon, address });
      setError(null); // Si hay coordenadas, no hay error
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const googleMapsUrl =
    loc.lat && loc.lon
      ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${loc.lat},${loc.lon}&zoom=15`
      : address
      ? `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(address)}&zoom=15`
      : null;

  return (
    <div>
      {error && !googleMapsUrl && <p style={{ color: "red" }}>{error}</p>}
      {googleMapsUrl ? (
        <iframe
          title="mapLocation"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, minHeight: height, borderRadius: "5px" }}
          src={googleMapsUrl}
          allowFullScreen
        ></iframe>
      ) : (
        !error && <p>Cargando mapa...</p>
      )}
    </div>
  );
};
