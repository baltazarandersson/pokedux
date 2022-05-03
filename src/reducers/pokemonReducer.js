import {
  SET_FAVORITE,
  SET_POKEMON,
  TOGGLE_FAVORITE,
  TOGGLE_LOADER,
} from "../actions/type";

const initialState = {
  list: [],
  loading: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return { ...state, list: action.payload };
    case TOGGLE_LOADER:
      return { ...state, loading: !state.loading };
    case SET_FAVORITE:
      const newPokemonList = [...state.list];
      const currentPokemonIndex = newPokemonList.findIndex(
        (elem) => elem.id === action.payload.pokemonId
      );
      if (currentPokemonIndex !== -1) {
        newPokemonList[currentPokemonIndex].favorite =
          !newPokemonList[currentPokemonIndex].favorite;
      }
      return { ...state, list: newPokemonList };
    default:
      return { ...state };
  }
};

export default pokemonReducer;
