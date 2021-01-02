import "./App.css";
import Board from "./components/board/index.js";

function App() {
  return (
    <div className="game">
      <header className="game-board">
        <h1>Noughts & Crosses</h1>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
