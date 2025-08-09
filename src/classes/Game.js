// src/classes/Game.js
import { pokemonIdSet } from "../api/pokemonPool";

export default class Game {
  static getPokemonSet(pokemonData) {
    const pokemonIds = pokemonIdSet();
    return pokemonIds.map((id) => ({
      id,
      name: pokemonData[id - 1].name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    }));
  }

  static makeGuess(gameState, id) {
    if (gameState.guessedPokemon.includes(id)) {
      return {
        pokemon: Game.getPokemonSet(gameState.pokemonData),
        guessedPokemon: [],
        score: 0,
        highScore: Math.max(gameState.score, gameState.highScore),
        pokemonData: gameState.pokemonData,
      };
    }

    return {
      ...gameState,
      guessedPokemon: [...gameState.guessedPokemon, id],
      score: gameState.score + 1,
      // pokemon: Game.shufflePokemon(gameState.pokemon),
    };
  }

  static shufflePokemon(pokemon) {
    return pokemon
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  }
}
