import React from "react";
import { useState } from "react";
import "./style.css";

export const Input = ({
  id,
  placeholder,
  type = "text",
  icon = null,
  iconType = null,
  classname = "",
  iconPositionRight = true,
  label = "",
  description = "",
  defaultValue = "",
  disabled = false,
  validation = null,
  onChange = () => null,
  onWritting = () => null,
}) => {
  const [inputType, setInputType] = useState(type);
  const [validationControl, setValidationControl] = useState(true);

  const handleIcon = () => {
    if (iconType === "tooglePasswordVisibility") {
      inputType === "text" ? setInputType("password") : setInputType("text");
    }
  };

  const classIcon = iconPositionRight ? " inputRight " : " iconLeft ";
  const iconAction = iconType === null ? "" : " actionIcon ";
  const inputSpaceAtStart = iconPositionRight ? "" : " inputSpaceAtStart ";

  const handleValidation = (e) => {
    let isValid = true;
    const value = e.target.value;

    if (validation === "email") {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(value)) isValid = false;
    }

    if (validation === "dni" || validation === "nif") {
      const pattern = /^([XYZ]?)(\d{7,8})([A-Za-z])$/;
      if (!pattern.test(value)) isValid = false;
    }

    if (validation === "telefono") {
      const pattern = /^(\+34|0034)?[6789]\d{8}$/;
      if (!pattern.test(value)) isValid = false;
    }

    if (validation === "url") {
      const pattern = /^[A-Za-z]+$/;
      if (!pattern.test(value)) isValid = false;
    }

    if (validation === "number") {
      const pattern = /^\d+$/;
      if (!pattern.test(value)) isValid = false;
    }

    if (isValid) {
      onChange(value);
      setValidationControl(true);
    } else setValidationControl(false);
  };

  return (
    <div className="inputType2Container">
      {label !== "" && <div className="inputLabel">{label}</div>}
      {description !== "" && <div className="inputDescription">{description}</div>}
      <div className="input-container">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className={`inputType2 ${classname + inputSpaceAtStart} ${!validationControl && "validationFail"} `}
          onBlur={handleValidation}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={(e) => onWritting(e.target.value)}
        />
        <div className={classIcon + iconAction} onClick={handleIcon}>
          {icon}
        </div>
      </div>
      {!validationControl && <div className="validationFailMessage">El valor introducido no es válido.</div>}
    </div>
  );
};
