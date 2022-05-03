import axios from "axios";
import { getPokemons } from "../api/getPokemons";
import {
  SET_FAVORITE,
  SET_POKEMON,
  TOGGLE_FAVORITE,
  TOGGLE_LOADER,
} from "./type";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const getPokemonWithDetails = () => (dispatch) => {
  getPokemons()
    .then((res) => {
      dispatch(toggleLoader());
      const pokemonList = res.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    })
    .then((pokemonsResponse) => {
      const pokemonsData = pokemonsResponse.map(
        (pokemonData) => pokemonData.data
      );
      dispatch(setPokemon(pokemonsData));
      dispatch(toggleLoader());
    })
    .catch((error) => {
      console.log(error.message);
      dispatch(toggleLoader());
    });
};

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});
