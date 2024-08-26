import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../redux/store";
import { IPokemon } from "../models/IPokemon";
import "../styles/SearchComponent.css";
import { pokemonActions } from "../redux/slices/pokemonSlice";

const SearchComponent: FC = () => {
    const dispatch = useAppDispatch();
    const pokemons = useAppSelector(state => state.pokemonSlice.pokemons);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<IPokemon[]>([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const loadPokemons = async () => {
            await dispatch(pokemonActions.loadAllPokemons());
            setDataLoaded(true);
        };
        loadPokemons();
    }, [dispatch]);

    useEffect(() => {
        if (dataLoaded) {
            handleSearch();
        }
    }, [query, dataLoaded]);

    const handleSearch = () => {
        if (!dataLoaded) {
            return;
        }

        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filteredPokemons = pokemons.filter(pokemon => {
            const nameMatch = pokemon.name?.toLowerCase().includes(query.toLowerCase());
            const typeMatch = pokemon.types?.some(type => type.type.name?.toLowerCase().includes(query.toLowerCase()));
            const abilityMatch = pokemon.abilities?.some(ability => ability.ability.name?.toLowerCase().includes(query.toLowerCase()));

            return nameMatch || typeMatch || abilityMatch;
        });

        setResults(filteredPokemons);
    };

    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for Pokémon"
                    className="search-input"
                />
            </div>
            {query && (
                <div className={`search-results-container ${query ? 'open' : ''}`}>
                    {results.length === 0 ? (
                        <h6 className="no-results">No results found</h6>
                    ) : (
                        results.map(pokemon => (
                            <div key={pokemon.id} className="search-result-item">
                                <div>{pokemon.name}</div>
                                <div>Type: {pokemon.types.map(t => t.type.name).join(', ')}</div>
                                <div>Abilities: {pokemon.abilities.map(a => a.ability.name).join(', ')}</div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchComponent;


