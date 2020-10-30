import React, { useState } from "react";
import Square from "../square/index.js";

function Board({calculateWinner}) {
  const [squares, setSquares] = useState(Array(9).fill(null)); 
  const [xIsNext, setxIsNext] = useState(true);

  function handleClick(i) {

    console.log(i);
    console.log(squares);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    let updatedSquare = squares[i];
    updatedSquare = xIsNext ? 'X' : 'O';
    setSquares([
      ...squares.slice(0, i),
      updatedSquare,
      ...squares.slice(i + 1),
    ]);
    setxIsNext(!xIsNext)
    console.log(xIsNext)
  }



  return (
    <div>
      <p>Next Player: {xIsNext ? 'X' : 'O'}</p>
      <div className="board-row">
        <Square i={0} handleClick={handleClick} value={squares}/>
        <Square i={1} handleClick={handleClick} value={squares}/>
        <Square i={2} handleClick={handleClick} value={squares}/>
      </div>
      <div className="board-row">
        <Square i={3} handleClick={handleClick} value={squares}/>
        <Square i={4} handleClick={handleClick} value={squares} />
        <Square i={5} handleClick={handleClick} value={squares}/>
      </div>
      <div className="board-row">
        <Square i={6} handleClick={handleClick} value={squares}/>
        <Square i={7} handleClick={handleClick} value={squares}/>
        <Square i={8} handleClick={handleClick} value={squares}/>
      </div>
    </div>
  );
}



export default Board;
