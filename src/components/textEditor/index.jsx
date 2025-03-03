import React from "react";
import { useState } from "react";
import Editor from "react-simple-wysiwyg";

export const TextEditor = ({ initialValue, id }) => {
  const [html, setHtml] = useState(initialValue);

  function onChange(e) {
    setHtml(e.target.value);
  }

  return <Editor id={id} value={html} onChange={onChange} />;
};
