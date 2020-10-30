import logo from "./logo.svg";
import "./App.css";
import Board from "./components/board/index.js"
import Game from "./components/game/index.js"
import Square from "./components/square/index.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Happy Hacking Bootcampers!</h1>
      </header>
    </div>
  );
}

export default App;
