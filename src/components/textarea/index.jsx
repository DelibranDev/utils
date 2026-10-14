import React from "react";
import "./style.css";

export const Textarea = ({ id, placeholder, value, defaultValue, classname = "", label, description, onChange = () => null }) => {
  // Legacy consumers pass saved text as placeholder; explicit values take precedence.
  const valueProps = value !== undefined
    ? { value }
    : { defaultValue: defaultValue !== undefined ? defaultValue : placeholder };
  return (
    <div className="inputType2Container">
      <div className="inputLabel">{label}</div>
      <div className="inputDescription">{description}</div>
      <textarea id={id} className={"customTextarea " + classname} placeholder={placeholder} onChange={onChange} {...valueProps} />
    </div>
  );
};
