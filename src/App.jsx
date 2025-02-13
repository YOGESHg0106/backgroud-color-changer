import React, { useState } from "react";
import ColorButton from "./ColorButton";
import "./App.css";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "indigo",
  "violet",
  "gold",
  "silver",
  "maroon",
  "navy",
  "olive",
];

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <h1>Click a Button to Change Background</h1>
      <div className="button-container">
        {colors.map((color) => (
          <ColorButton key={color} color={color} setBgColor={setBgColor} />
        ))}
      </div>
    </div>
  );
}

export default App;
