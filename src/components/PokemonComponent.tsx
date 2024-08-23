import React, {FC} from 'react';
import {IPokemon} from "../models/IPokemon";
import PokemonImgComponent from "./PokemonImgComponent";
import PokemonAbilitiesComponent from "./PokemonAbilitiesComponent";
import PokemonStatsComponent from "./PokemonStatsComponent";
import PokemonTypesComponent from "./PokemonTypesComponent";
import '../styles/PokemonComponent.css'

interface IProps {
    pokemon: IPokemon
}

const PokemonComponent: FC<IProps> = ({pokemon}) => {

    return (
        <div className={'pokemon-container'}>
            <PokemonImgComponent imgUrl={pokemon.sprites.other.dream_world.front_default}/>
            <h1 style={titleStyle}>{pokemon.name}</h1>
            <button>//todo</button>
            <div className={'san-container'}>
                <PokemonStatsComponent stats={pokemon.stats}/>
                <div className={'abilities-types-container'}>
                    <PokemonAbilitiesComponent abilities={pokemon.abilities}/>
                    <PokemonTypesComponent types={pokemon.types}/>
                </div>
            </div>
        </div>
    );
};

export default PokemonComponent;


const titleStyle: React.CSSProperties = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '3rem',
    color: 'blueviolet',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    textTransform: 'capitalize',
};