import React from "react";
import "./style.css";

export const SwitchText = ({ defaultChecked, onChange, id }) => {
  return (
    <div className="toggle-button-cover">
      <div className="button-cover">
        <div className="button r" id="button-3">
          <input id={id} type="checkbox" className="checkbox" defaultChecked={!defaultChecked} onChange={onChange} />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  );
};
