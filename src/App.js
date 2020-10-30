

import logo from "./logo.svg";
import "./App.css";
import Board from "./components/board/index.js";
import Game from "./components/game/index.js";
import Square from "./components/square/index.js";

function App() {

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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

  return (
    <div className="game">
      <header className="game-board">
        <h1>Noughts & Crosses</h1>
      </header>
      <main>
        <Board calculateWinner={calculateWinner}/>
      </main>
    </div>
  );
}

export default App;
