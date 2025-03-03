import React from "react";
import "./style.css";

export const Button = ({ text, icon = null, customClass = "customButtonColor1", action = () => null }) => {
  return (
    <button className={"customButton " + customClass} onClick={action}>
      {icon && icon}
      <div className="customButtonText">{text}</div>
    </button>
  );
};
