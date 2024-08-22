import React, {FC} from 'react';
import {IPokemon} from "../models/IPokemon";
import PokemonImgComponent from "./PokemonImgComponent";

interface IProps {
    pokemon: IPokemon
}

const PokemonComponent:FC<IProps> = ({pokemon}) => {

    return (
        <div>
            <PokemonImgComponent imgUrl={pokemon.sprites.other.dream_world.front_default}/>
        </div>
    );
};

export default PokemonComponent;