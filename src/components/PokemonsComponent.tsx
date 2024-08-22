import React from 'react';
import {useAppSelector} from "../redux/store";
import PokemonDataComponent from "./PokemonDataComponent";

const PokemonsComponent = () => {

    const pokemons= useAppSelector(state => state.pokemonSlice.pokemons)
    const isLoaded= useAppSelector(state => state.pokemonSlice.isLoaded)

    return (
        <div>
            {
                isLoaded ? pokemons.map(pokemon => <PokemonDataComponent key={pokemon.url} pokemon={pokemon} />) : <span>Loading...</span>
            }
        </div>
    );
};

export default PokemonsComponent;