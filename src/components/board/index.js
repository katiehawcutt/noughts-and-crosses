import React, { useState } from "react";
import Square from "../square/index.js";
import Status from "../Winner/winner.js";

function Board({ calculateWinner }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  function handleClick(i) {
    let updatedSquare = squares[i];
    updatedSquare = xIsNext ? "❌" : "⭕";
    const squaresArray = [
      ...squares.slice(0, i),
      updatedSquare,
      ...squares.slice(i + 1),
    ];
    const calculatedWinner = calculateWinner(squaresArray);
    console.log(calculatedWinner);
    setWinner(calculatedWinner);
    setSquares(squaresArray);

    setxIsNext(!xIsNext);
    console.log(xIsNext);
  }

  return (
    <div>
      <Status winner={winner} xIsNext={xIsNext} />
      <div className="board-row">
        <Square i={0} handleClick={handleClick} value={squares} />
        <Square i={1} handleClick={handleClick} value={squares} />
        <Square i={2} handleClick={handleClick} value={squares} />
      </div>
      <div className="board-row">
        <Square i={3} handleClick={handleClick} value={squares} />
        <Square i={4} handleClick={handleClick} value={squares} />
        <Square i={5} handleClick={handleClick} value={squares} />
      </div>
      <div className="board-row">
        <Square i={6} handleClick={handleClick} value={squares} />
        <Square i={7} handleClick={handleClick} value={squares} />
        <Square i={8} handleClick={handleClick} value={squares} />
      </div>
    </div>
  );
}

export default Board;
