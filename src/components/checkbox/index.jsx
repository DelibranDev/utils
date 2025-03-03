export function Checkbox({ text, clickEvent, checked, className }) {
  return (
    <div className={className}>
      <input
        style={{ padding: "0px", marginTop: "15px", marginLeft: "-20px" }}
        id="privacyCheckbox"
        type="checkbox"
        onClick={clickEvent}
        checked={checked}
      />
      <div style={{ paddingLeft: "30px", marginTop: "-20px" }}>{text}</div>
    </div>
  );
}
