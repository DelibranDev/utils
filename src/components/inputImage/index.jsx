import React, { useState } from "react";
import { handleImage } from "../../function";
import { NoImage } from "../noImage";
import "./style.css";

export const InputImage = ({ uniqueId, className, image = null }) => {
  const [imageLoaded, setImageLoaded] = useState(null);

  const updateImage = (e, uniqueId) => {
    setImageLoaded(true);
    handleImage(e, uniqueId);
  };

  return (
    <label className={`inputImage ${className} ${uniqueId}`} style={{ backgroundImage: image === null ? `url('${image}')` : "" }}>
      {imageLoaded === null && image === null && <NoImage />}
      <input type="file" id={`${uniqueId}`} style={{ display: "none" }} onChange={(e) => updateImage(e, uniqueId)} />
    </label>
  );
};
