import React from "react";
import "./square.css";

function Square({ i, handleClick, value }) {
  return (
    <button
      className="square"
      onClick={() => {
        handleClick(i);
      }}
    >
      {value[i]}
    </button>
  );
}

export default Square;
