import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Icon, Image, Label } from "semantic-ui-react";
import { setFavorite } from "../../slices/pokemon";
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR } from "../../utils/constants";
import "./styles.css";

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  function handleFavorite() {
    dispatch(setFavorite({ pokemonId: pokemon.id }));
  }

  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <Image
          centered
          src={pokemon.sprites.other.home.front_default}
          alt="Pokemon Front"
        />
        <p className="PokemonCard-title">{pokemon.name}</p>
        <div className="PokemonCard-bottom">
          <div>
            {pokemon.types.map((type) => {
              return (
                <Label
                  color={MAIN_COLOR}
                  key={`${pokemon.id}-${type.type.name}`}
                >
                  {type.type.name}
                </Label>
              );
            })}
          </div>
          <button
            className="PokemonCard-favorite"
            onClick={() => handleFavorite()}
          >
            <Icon name="favorite" color={color} size="large" />
          </button>
        </div>
      </div>
    </Grid.Column>
  );
}

export default PokemonCard;
