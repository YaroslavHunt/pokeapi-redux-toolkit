import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {IDataPokemon} from "../models/IData";
import {urls} from "../constants/urls";
import '../styles/PokemonDataComponent.css'
import LikeComponent from "./LikeComponent";

interface IProps {
    pokemon: IDataPokemon
}

const PokemonDataComponent: FC<IProps> = ({pokemon}) => {
    const url = pokemon.url;
    const parts = url.split('/');
    const id = parts[parts.length - 2];
    const navigate = useNavigate();

    return (
        <div key={id}>
            <div className="pokemon-data-container">
                <img className={'pokemon-preview'} src={urls.image.byId(id)} alt={pokemon.name}/>
                <button className="pokemon-nav-button" onClick={() => {
                    navigate(`${id}`)
                }}>{pokemon.name}
                </button>
                <LikeComponent data={pokemon}/>
            </div>
        </div>
    );
};

export default PokemonDataComponent;