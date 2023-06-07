import React, { useState } from "react";

function Lights() {
  const [isRed, setIsRed] = useState(true);
  const [isYellow, setIsYellow] = useState(false);
  const [isGreen, setIsGreen] = useState(false);

  const handleRed = () => {
    setIsRed(!isRed);
    setIsYellow(false);
    setIsGreen(false);
  };
  const handleYellow = () => {
    setIsYellow(!isYellow);
    setIsGreen(false);
    setIsRed(false);
  };
  const handleGreen = () => {
    setIsGreen(!isGreen);
    setIsYellow(false);
    setIsRed(false);
  };

  const randomColor = () => {
   let arrColor = ['red-click', 'yellow-click', 'green-click']

  }

  return (
    <div>
      <div className={isRed ? "red-click" : "red"} onClick={handleRed}></div>
      <div
        className={isYellow ? "yellow-click" : "yellow"}
        onClick={handleYellow}
      ></div>
      <div
        className={isGreen ? "green-click" : "green"}
        onClick={handleGreen}
      ></div>
    </div>
  );
}

export default Lights;
