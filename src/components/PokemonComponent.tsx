import React, {FC, useEffect, useState} from 'react';
import {IPokemon} from "../models/IPokemon";
import PokemonAbilitiesComponent from "./PokemonAbilitiesComponent";
import PokemonStatsComponent from "./PokemonStatsComponent";
import PokemonTypesComponent from "./PokemonTypesComponent";
import '../styles/PokemonComponent.css'
import AddToFavoriteComponent from "./AddToFavoriteComponent";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {evoChainActions} from "../redux/slices/evoChainSlice";
import PokemonFormComponent from "./PokemonFormComponent";

interface IProps {
    pokemon: IPokemon
}

const PokemonComponent: FC<IProps> = ({pokemon}) => {
    const dispatch = useAppDispatch();
    const evoChainUrls = useAppSelector(state => state.evoChainSlice.urls);
    const evoChainUrl = useAppSelector(state => state.evoChainSlice.url);
    const forms = useAppSelector(state => state.evoChainSlice.forms);
    const currentUrl = evoChainUrls.find(url => url === evoChainUrl);
    const [showForms, setShowForms] = useState(false);

    useEffect(() => {
        dispatch(evoChainActions.loadSpecies(pokemon.id.toString()));
        dispatch(evoChainActions.loadChain());
        if (currentUrl) {
            dispatch(evoChainActions.loadForms(currentUrl));
        }
    }, [currentUrl, pokemon.id, dispatch]);

    return (
        <div className={'pokemon-container'}>
            <img className={'pokemon-image'} src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
            <h1 className={"pokemon-title"}>{pokemon.name}</h1>
            <AddToFavoriteComponent pokemon={pokemon}/>
            <div className={'san-container'}>
                <PokemonStatsComponent stats={pokemon.stats}/>
                <div className={'abilities-types-container'}>
                    <PokemonAbilitiesComponent abilities={pokemon.abilities}/>
                    <PokemonTypesComponent types={pokemon.types}/>
                    <button className={"forms-button"} onClick={() => setShowForms(true)}>
                        FORMS
                    </button>
                </div>
            </div>
            {showForms && (
                <div className="modal-overlay" onClick={() => setShowForms(false)}>
                    <div className="modal-content">
                        {
                            forms.map(name => <PokemonFormComponent key={name} name={name}/>)
                        }
                    </div>
                </div>
            )}
        </div>
    );
};


export default PokemonComponent;
