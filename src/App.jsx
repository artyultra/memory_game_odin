// src/App.jsx

import { useEffect, useState } from "react";
import NavBar from "./components/layouts/Navbar/Navbar";
import Content from "./components/layouts/Content/Content";
import "./App.css";
import Game from "./classes/Game";
import { getPokemon } from "./api/pokemon";
import { WinScreen } from "./components/layouts/WinScreen/WinScreen";

function App() {
  const [gameState, setGameState] = useState({
    pokemon: [],
    guessedPokemon: [],
    score: 0,
    highScore: 0,
    pokemonData: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const { data } = await getPokemon();
        console.log(data);
        setGameState((prevState) => ({
          ...prevState,
          pokemonData: data,
          pokemon: Game.getPokemonSet(data),
        }));
      } catch (error) {
        setError(error);
        setLoading(false);
        return;
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const handleGuess = (id) => {
    setGameState((prevState) => Game.makeGuess(prevState, id));
  };

  const handleRestart = () => {
    setGameState((prevState) => ({
      pokemon: Game.getPokemonSet(prevState.pokemonData), // Keep the data, generate new pokemon
      guessedPokemon: [],
      score: 0,
      highScore: 0, // Reset high score if you want to start over
      pokemonData: prevState.pokemonData, // Keep the original data!
    }));
  };

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && gameState.pokemon.length > 0 && (
        <>
          <NavBar score={gameState.score} highScore={gameState.highScore} />
          {gameState.score >= 8 ? (
            <WinScreen resetGame={handleRestart} />
          ) : (
            <Content
              highScore={gameState.highScore}
              game={gameState}
              onGuess={handleGuess}
              handleRestart={handleRestart}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
