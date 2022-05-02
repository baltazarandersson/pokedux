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
        dispatch(setPokemon(res.results));
      })
      .catch(console.log);
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
