import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsWithDetails } from "../api/getPokemons";
import { toggleLoader } from "./ui";

const initialState = {
  list: [],
};

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (_, { dispatch }) => {
    try {
      dispatch(toggleLoader());
      const response = await getPokemons();
      const pokemons = response.results;
      const pokemonsWithDetails = await getPokemonsWithDetails(pokemons);
      dispatch(setPokemons(pokemonsWithDetails));
      dispatch(toggleLoader());
    } catch (e) {
      console.log(e);
      dispatch(toggleLoader());
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.list = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.list.findIndex(
        (elem) => elem.id === action.payload.pokemonId
      );
      if (currentPokemonIndex !== -1) {
        state.list[currentPokemonIndex].favorite =
          !state.list[currentPokemonIndex].favorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
