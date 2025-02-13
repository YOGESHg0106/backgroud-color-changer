import React from "react";
import "./ColorButton.css";

function ColorButton({ color, setBgColor }) {
  return (
    <button
      className="color-button"
      style={{ backgroundColor: color }}
      onClick={() => setBgColor(color)}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
}

export default ColorButton;
