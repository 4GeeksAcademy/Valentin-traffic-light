import React, { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("red-click");
  const [newColor, setNewColor] = useState(false);

  const handleColorChange = () => {
    const colors = ["red-click", "yellow-click", "green-click"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  const handleNewColor = () => {
    setNewColor(true);
  };
  const handleNewColorClick = () => {
    setColor("purple-click");
  };

  return (
    <div>
      <div className={color === "red-click" ? "red-click" : "red"}></div>
      <div
        className={color === "yellow-click" ? "yellow-click" : "yellow"}
      ></div>
      <div className={color === "green-click" ? "green-click" : "green"}></div>
      {newColor && (
        <div
          className={color === "purple-click" ? "purple-click" : "purple"}
          onClick={handleNewColorClick}
        ></div>
      )}
      <div className="buttons">
        <div className="btn-random">
          <button className="btn-change" onClick={handleColorChange}>
            Random Traffic
          </button>
        </div>
        <div className="btn-new">
          <button className="btn-change" onClick={handleNewColor}>
            New Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomColor;
