import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons = [] } = {}) {
  return (
    <Grid className="PokemonWrapper">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </Grid>
  );
}

export default PokemonList;
