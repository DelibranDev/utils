import React from "react";
import "./style.css";

export const SwitchText = ({ defaultChecked, onChange, id }) => {
  return (
    <div class="toggle-button-cover">
      <div class="button-cover">
        <div class="button r" id="button-3">
          <input id={id} type="checkbox" class="checkbox" defaultChecked={!defaultChecked} onChange={onChange} />
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
      </div>
    </div>
  );
};
