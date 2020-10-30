import logo from "./logo.svg";
import "./App.css";
import Board from "./components/board/index.js";
import Game from "./components/game/index.js";
import Square from "./components/square/index.js";

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

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }

export default App;
