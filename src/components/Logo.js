import React from "react";
import useWindowDimensions from "./WindowDimensions.js";

const Logo = (props) => {
  const {  windowWidth } = useWindowDimensions();

  let currWidth = (1920 / windowWidth) * props.multiplier;
  
  return (
    <div className="logo-wrapper">
      <img
        style={{ width: `${currWidth}%`, height: `${currWidth}%` }}
        className="logo"
        alt={"bik's gifs logo/ giphy logo"}
        src={props.source}
      ></img>
    </div>
  );
};
export default Logo;
