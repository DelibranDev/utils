import React from "react";
import "./style.css";

export function Checkbox({ text, clickEvent, checked, className }) {
  return (
    <div className={className}>
      <input
        className="checkboxInput"
        id="privacyCheckbox"
        type="checkbox"
        onClick={clickEvent}
        checked={checked}
      />
      <div className="checkboxText">{text}</div>
    </div>
  );
}
