import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {IDataPokemon} from "../models/IData";
import PokemonImgComponent from "./PokemonImgComponent";
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
                <PokemonImgComponent imgUrl={urls.image.byId(id)}/>
                <button className="pokemon-nav-button" onClick={() => {
                    navigate(`${id}`)
                }}>{pokemon.name}
                </button>
                <LikeComponent/>
            </div>
        </div>
    );
};

export default PokemonDataComponent;