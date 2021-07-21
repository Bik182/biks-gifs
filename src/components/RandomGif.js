import React from "react";

const RandomGif = (props) => {
  return (
    <>
      <div className="random-container">
         
        <img alt={"background gif"} className="random-gif" src={props.link} />
      
      </div>
    </>
  );
};

export default RandomGif;
