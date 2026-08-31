import React from "react";
import { useState } from "react";
import Editor from "react-simple-wysiwyg";
import "./style.css";

export const TextEditor = ({ initialValue, id }) => {
  const [html, setHtml] = useState(initialValue);

  function onChange(e) {
    setHtml(e.target.value);
  }

  return <div className="textEditor"><Editor id={id} value={html} onChange={onChange} /></div>;
};
