import axios from "../services/axios";

export const getPokemons = (limit = 151) =>
  axios
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const getPokemonsWithDetails = async (pokemons) => {
  return await Promise.all(
    pokemons.map((pokemon) => axios.get(pokemon.url))
  ).then((pokemonResponses) => {
    return pokemonResponses.map((response) => response.data);
  });
};
