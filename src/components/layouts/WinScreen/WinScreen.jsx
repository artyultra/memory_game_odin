// src/compons/layouts/WinScreen/WinScreen.jsx

import "./WinScreen.css";

function WinScreen({ resetGame }) {
  return (
    <div className="win-screen">
      <h1>You won!</h1>
      <button onClick={() => resetGame()}>Play Again</button>
    </div>
  );
}

export { WinScreen };
