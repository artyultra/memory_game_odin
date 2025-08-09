// src/components/layouts/Content/PokemonCard/PokemonCard.jsx

import "./PokemonCard.css";

export default function PokemonCard({ name, imageUrl, handleClick }) {
  return (
    <div onClick={handleClick} className="pokemon-card">
      <img className="pokemon-card-image" src={imageUrl} alt={name} />
      <h2 className="pokemon-card-name">{name}</h2>
    </div>
  );
}
