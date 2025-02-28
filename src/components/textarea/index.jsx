import React from "react";
import "./style.css";

export const Textarea = ({ id, placeholder, classname = "", label, description, onChange = () => null }) => {
  return (
    <div className="inputType2Container">
      <div className="inputLabel">{label}</div>
      <div className="inputDescription">{description}</div>
      <textarea id={id} className={"customTextarea " + classname} onChange={onChange}>
        {placeholder}
      </textarea>
    </div>
  );
};
