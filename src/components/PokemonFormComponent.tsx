import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {pokemonActions} from "../redux/slices/pokemonSlice";
import {urls} from "../constants/urls";

interface IProps {
    name: string
}

const PokemonFormComponent:FC<IProps> = ({name}) => {
    
    const dispatch = useAppDispatch();
    const id = useAppSelector(state => state.pokemonSlice.id);

 //todo
    useEffect(() => {
        dispatch(pokemonActions.loadId(name));
    }, [dispatch, name]);
    
    return (
        <div>
            <img src={urls.image.byId(id)} alt={name}/>
            <span>{name}</span>
        </div>
    );
};

export default PokemonFormComponent;