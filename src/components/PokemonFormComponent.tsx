import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch} from "../redux/store";
import {pokemonActions} from "../redux/slices/pokemonSlice";
import {urls} from "../constants/urls";
import {Link, useNavigate} from "react-router-dom";
import "../styles/PokemonFormComponent.css"

interface IProps {
    name: string
}

const PokemonFormComponent:FC<IProps> = ({name}) => {
    const dispatch = useAppDispatch();
    const [id, setId] = useState<string | null>(null);

    useEffect(() => {
        const fetchId = async () => {
            const result = await dispatch(pokemonActions.loadId(name));
            if (pokemonActions.loadId.fulfilled.match(result)) {
                setId(result.payload);
            }
        };
        fetchId();
    }, [dispatch, name]);

    return (
        <div className={"pokemon-form-container"}>
            <Link className={"form-link"} to={`/pokemons/${id}`}>
            {id !== null && (
                <img className={"form-preview"} src={urls.image.byId(id)} alt={name}/>
            )}
            {name}</Link>
        </div>
    );
};

export default PokemonFormComponent;
