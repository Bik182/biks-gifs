import React from "react";
import useWindowDimensions from "./WindowDimensions.js";

const Logo = (props) => {
  const { windowWidth } = useWindowDimensions();

  let currWidth = (1920 / windowWidth) * props.multiplier;

  return (
    
    <div className={props.diffClass ? props.diffClass : "logo-wrapper"}>
      {props.source ? (
        <img
          style={{ width: `${currWidth}%`, height: `${currWidth}%` }}
          className="logo"
          alt={"bik's gifs logo/ giphy logo"}
          src={props.source}
        ></img>
      ) : (
        <h1 className="logo-text">Bik's Gifs</h1>
      )}
    </div>
  );
};
export default Logo;
