// src/components/layouts/Content.jsx

import "./Content.css";
import PokemonCard from "./PokemonCard/PokemonCard";

export default function Content({ game, onGuess }) {
  return (
    <div className="content">
      {game.pokemon.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.imageUrl}
            handleClick={() => onGuess(pokemon.id)}
          />
        );
      })}
    </div>
  );
}
