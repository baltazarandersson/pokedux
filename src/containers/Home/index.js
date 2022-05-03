import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonWithDetails } from "../../actions";
import Loader from "../../components/Loader";
import PokemonList from "../../components/PokemonList";
import Searcher from "../../components/Searcher";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getPokemonWithDetails());
  }, []);

  return (
    <div className="Home">
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
