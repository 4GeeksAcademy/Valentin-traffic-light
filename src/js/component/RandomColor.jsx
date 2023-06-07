import React, { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("red-click");

  const handleColorChange = () => {
    const colors = ["red-click", "yellow-click", "green-click"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div>
      <div className={color === "red-click" ? "red-click" : "red"}></div>
      <div
        className={color === "yellow-click" ? "yellow-click" : "yellow"}
      ></div>
      <div className={color === "green-click" ? "green-click" : "green"}></div>
      <button className="btn-change" onClick={handleColorChange}>
        Random Traffic
      </button>
    </div>
  );
};

export default RandomColor;
