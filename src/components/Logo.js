import React from "react";
import logo from "../assets/logo-red.png";
import useWindowDimensions from "./WindowDimensions.js";

const Logo = (props) => {
  const {  windowWidth } = useWindowDimensions();

  let currWidth = (1920 / windowWidth) * 20;
  
  return (
    <div className="logo-wrapper">
      <img
        style={{ width: `${currWidth}%`, height: `${currWidth}%` }}
        className="logo"
        alt={"bik's gifs logo"}
        src={logo}
      ></img>
    </div>
  );
};
export default Logo;
