// src/api/pokemon.js

// Better name that matches functionality
async function getPokemon(limit = 151) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("getPokemonList - success");
    return { count: data.count, data: data.results };
  } catch (error) {
    console.error("Failed to fetch Pokemon:", error.message);
    return { data: null, error: error.message };
  }
}

export { getPokemon };
