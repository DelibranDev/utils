import React from "react";
import "./style.css";

export const Button = ({ text, icon = null, customClass = "customButtonColor1", action = () => null, disabled }) => {
  return (
    <button
      className={`customButton ${customClass} ${!icon && "justify-center"} ${disabled && "customButtonDisabled"}`}
      onClick={action}
      disabled={disabled}
    >
      {icon && icon}
      <div className="customButtonText">{text}</div>
    </button>
  );
};
