import React, { useState } from "react";
import "./square.css";

function Square({ value, handleClick }) {
  return (
    <button
      className="square"
      onClick={() => {
        handleClick(value);
      }}
    >
      {value}
    </button>
  );
}

export default Square;
