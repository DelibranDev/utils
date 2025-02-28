import React from "react";

export const Sections = ({ sections, activeSection, handleSectionData }) => {
  return (
    <div className="sectionsDatatable">
      {sections &&
        sections?.map((s, i) => {
          return (
            s.text !== null && (
              <div className={i === activeSection ? "selectedHorizontalMenu" : ""} onClick={() => handleSectionData(i, s.callback)}>
                {s.text}
              </div>
            )
          );
        })}
    </div>
  );
};
