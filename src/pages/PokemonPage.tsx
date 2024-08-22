import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {pokemonActions} from "../redux/slices/pokemonSlice";
import PokemonComponent from "../components/PokemonComponent";


const PokemonPage = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();
    const pokemon = useAppSelector(state => state.pokemonSlice.pokemon);

    useEffect(() => {
        if (id) {
            dispatch(pokemonActions.loadPokemon(id));
        }
    }, [id]);

    return (
        <>
            <PokemonComponent pokemon={pokemon}/>
        </>
    );
};

export default PokemonPage;