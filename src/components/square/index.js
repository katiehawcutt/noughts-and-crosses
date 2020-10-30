import React, { useState } from "react";
import "./square.css";

function Square({ i, handleClick }) {
  return (
    <button
      className="square"
      onClick={() => {
        handleClick(i);
      }}
    >
      {i}
    </button>
  );
}

export default Square;
