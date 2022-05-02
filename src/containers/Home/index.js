import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemon } from "../../actions";
import { getPokemons } from "../../api/getPokemons";
import PokemonList from "../../components/PokemonList";
import Searcher from "../../components/Searcher";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  useEffect(() => {
    getPokemons()
      .then((res) => {
        const pokemonList = res.results;
        return Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );
      })
      .then((pokemonsResponse) => {
        const pokemonsData = pokemonsResponse.map(
          (pokemonData) => pokemonData.data
        );
        dispatch(setPokemon(pokemonsData));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
