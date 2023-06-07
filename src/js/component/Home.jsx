import React from "react";
import Lights from "./Lights.jsx";
import RandomColor from "./RandomColor.jsx";

//create your first component
const Home = () => {
  return (
    <div className="content-traffics d-flex">
      <div className="trafic-container">
        <div className="top"></div>
        <div className="traffic">
          <Lights />
        </div>
      </div>
      <div className="trafic-container">
        <div className="top"></div>
        <div className="traffic">
          <RandomColor />
        </div>
      </div>
    </div>
  );
};

export default Home;
