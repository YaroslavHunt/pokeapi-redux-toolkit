import React, {FC, useEffect, useState} from 'react';
import {IDataPokemon} from "../models/IData";
import {IPokemon} from "../models/IPokemon";
import FavoriteComponent from "./FavoriteComponent";

interface IProps {
    data: IDataPokemon[]
}

const FavoritesComponent: FC<IProps> = ({data}) => {
    const [favorites, setFavorites] = useState<IPokemon[]>([]);

    useEffect(() => {
        const storedFavorites: IPokemon[] = [];

        data.forEach(item => {
            const storageKey = `${item.name}`;
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                const parsed = JSON.parse(stored);
                storedFavorites.push(parsed);
            }
        });

        setFavorites(storedFavorites);
    }, [data]);

    return (
        <div className="pokemons-container">
            {
                favorites.length > 0 ? (
                    favorites.map(pokemon=> (
                        <FavoriteComponent pokemon={pokemon}/>
                    ))
            ) : (
                <p>No favorites added yet.</p>
            )}
        </div>
    );
};

export default FavoritesComponent;
