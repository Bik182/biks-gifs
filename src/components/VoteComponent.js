import React from "react";
import "./styles/vote.scss";
const VoteComponent = (props) => {
  return (
    <div>
      <div className="vote-container">
        <span onClick={() => console.log("HEY!")} className="vote-text">
          Vote!
        </span>
        {/* <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
        >
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default VoteComponent;
