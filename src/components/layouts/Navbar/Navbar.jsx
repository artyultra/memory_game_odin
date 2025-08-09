// src/components/layouts/Navbar.jsx

import "./Navbar.css";

function NavBar({ score, highScore }) {
  return (
    <div className="nav">
      <div className="nav-left">
        <img
          className="nav-logo"
          src="/src/assets/pokemon_logo.svg"
          alt="Pokemon logo"
        />
        <h1 className="nav-title">CAN YOU GUESS THEM ALL?</h1>
      </div>
      <div className="nav-right">
        <p className="current-score">Score:</p>
        <p className="score-value">{score}</p>
        <p className="high-score">High Score:</p>
        <p className="score-value">{highScore}</p>
      </div>
    </div>
  );
}

export default NavBar;
