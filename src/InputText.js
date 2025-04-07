// src/InputText.js
import React from "react";

const InputText = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: "10px", borderRadius: "4px" }}
    />
  );
};

export default InputText;
