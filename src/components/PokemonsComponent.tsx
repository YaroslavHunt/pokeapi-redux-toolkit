import React from 'react';
import { useAppSelector } from '../redux/store';
import PokemonDataComponent from './PokemonDataComponent';
import '../styles/PokemonsComponent.css';

const PokemonsComponent = () => {
    const { pokemons, isLoaded } = useAppSelector(state => state.pokemonSlice);

    return (
        <div className="pokemons-container">
            {
                isLoaded ? (
                    pokemons.map(pokemon => (
                        <PokemonDataComponent key={pokemon.url} pokemon={pokemon} />
                    ))
                ) : (
                    <span className="loading-message">Loading...</span>
                )
            }
        </div>
    );
};

export default PokemonsComponent;
