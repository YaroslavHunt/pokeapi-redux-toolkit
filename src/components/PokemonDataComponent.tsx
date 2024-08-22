import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IDataPokemon} from "../models/IData";

interface IProps {
    pokemon: IDataPokemon
}

const PokemonDataComponent:FC<IProps> = ({pokemon}) => {


    return (
        <div key={pokemon.url}>
            {/*<img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>*/}
            <Link to={pokemon.url}>{pokemon.name}</Link>
        </div>
    );
};

export default PokemonDataComponent;