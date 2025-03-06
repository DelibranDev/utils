import React, { useState } from "react";
import { RiCloseFill, RiCheckFill, RiDeleteBack2Line } from "react-icons/ri";
import "./style.css";

export const PinPad = ({ callback, inputText }) => {
  const [pinValue, setPinValue] = useState("");
  const pinList = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    <RiCloseFill color={"var(--color-error)"} />,
    "0",
    <RiCheckFill color={"var(--color-success)"} />,
  ];

  const handlePin = async () => {
    callback(pinValue);
    setPinValue("");
  };

  const handleDigit = (id, pin) => {
    if (id < 9 || pin === 10) setPinValue(pinValue + pin);
    if (id === 9) setPinValue("");
    if (id === 11) handlePin();
    if (id === 12) setPinValue(pinValue.slice(0, -1));
  };

  const CardPin = ({ pin, id }) => {
    return (
      <div className={`cardPin ${!isNaN(pin) ? "pinNumberButton" : "pinNotNumberButton"}`} onClick={() => handleDigit(id, pin)}>
        <div className="pinDigit">{pin}</div>
      </div>
    );
  };

  return (
    <div className="areaPin">
      <div className="loginArea">
        <div className="containerSide">
          <div className="pinLabel">{inputText}</div>
          <div className="flex-gap">
            <div className="inputPwd">{"●".repeat(pinValue.length)}</div>
            <div className={`cardPin pinNotNumberButton`} onClick={() => handleDigit(12, null)}>
              <div className="pinDigit">{<RiDeleteBack2Line />}</div>
            </div>
          </div>
          <div className="pinList">
            {pinList?.map((pin, id) => (
              <CardPin pin={pin} id={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
