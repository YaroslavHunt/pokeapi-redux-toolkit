import React, {FC} from 'react';
import {IPokemon} from "../models/IPokemon";
import {useNavigate} from "react-router-dom";
import {urls} from "../constants/urls";

interface IProps {
    pokemon: IPokemon;
}

const FavoriteComponent:FC<IProps> = ({pokemon}) => {
    const id = pokemon.id.toString();
    const navigate = useNavigate();

    return (
        <div key={id}>
            <div className="pokemon-data-container">
                <img className={'pokemon-preview'} src={urls.image.byId(id)} alt={pokemon.name}/>
                <button className="pokemon-nav-button" onClick={() => {
                    navigate(`${id}`)
                }}>{pokemon.name}
                </button>
            </div>
        </div>
    );
};

export default FavoriteComponent;