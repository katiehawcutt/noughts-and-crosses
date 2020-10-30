import React, { useState } from "react";

function Status({ xIsNext, winner }) {
  //   const [winnerState, setWinnerState] = useState(xIsNext ? "X" : "O");
  console.log(winner);
  if (winner) {
    return (
      <p style={{ color: "red", fontWeight: "bold", fontSize: "30px" }}>
        WINNER: {winner}
      </p>
    );
  }

  return <p>Player turn:{xIsNext ? "❌" : "⭕"}</p>;
}

export default Status;
