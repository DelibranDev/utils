import { useState } from "react";
import "./style.css";

export const Select = ({ value = "", values, isMenu = false, className = "", callback = null, label = null, description = null, id = null }) => {
  const [selected, setSelected] = useState(value ? value : values[0].id);
  const [visibility, changeVisibility] = useState(false);

  const handleOption = (e) => {
    const option = e.target.value;
    if (!isMenu) {
      setSelected(option);
      changeVisibility(!visibility);
      if (callback) callback(option);
    } else {
      changeVisibility(!visibility);
      option.function();
    }
  };

  return (
    <div className="selectContainer">
      {label !== null && <div className="inputLabel">{label}</div>}
      {label !== null && <div className="inputDescription">{description}</div>}
      <select className={"customSelect " + className} id={id} value={selected} onChange={handleOption}>
        {values?.map((v, i) => (
          <option key={i} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
};
