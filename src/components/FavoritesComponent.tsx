import React, { FC } from 'react';
import { IPokemon } from "../models/IPokemon";
import FavoriteComponent from "./FavoriteComponent";

interface IProps {
    data: IPokemon[];
}

const FavoritesComponent: FC<IProps> = ({ data }) => {

    return (
        <div className="pokemons-container">
            {data.length > 0 ? (
                data.map(pokemon => (
                    <FavoriteComponent key={pokemon.name} pokemon={pokemon} />
                ))
            ) : (
                <p>No favorites added yet.</p>
            )}
        </div>
    );
};

export default FavoritesComponent;

