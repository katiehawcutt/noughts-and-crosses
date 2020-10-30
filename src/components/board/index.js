import React, { useState } from "react";
import Square from "../square/index.js";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    console.log(i);
    console.log(squares);
    let updatedSquare = squares[i];
    updatedSquare = "X";
    setSquares([
      ...squares.slice(0, i),
      updatedSquare,
      ...squares.slice(i + 1),
    ]);
    console.log(squares);
  }

  return (
    <div>
      <p>Next Player: X</p>
      <div className="board-row">
        <Square i={0} handleClick={handleClick} />
        <Square i={1} handleClick={handleClick} />
        <Square i={2} handleClick={handleClick} />
      </div>
      <div className="board-row">
        <Square i={3} handleClick={handleClick} />
        <Square i={4} handleClick={handleClick} />
        <Square i={5} handleClick={handleClick} />
      </div>
      <div className="board-row">
        <Square i={6} handleClick={handleClick} />
        <Square i={7} handleClick={handleClick} />
        <Square i={8} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Board;
