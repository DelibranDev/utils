import React from "react";
import "./style.css";

export const Loader = ({ state = true }) => {
  if (!state) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  );
};
