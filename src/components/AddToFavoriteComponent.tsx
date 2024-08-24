import React, {FC, useEffect, useState} from 'react';
import {IPokemon} from "../models/IPokemon";
import "../styles/AddToFavoriteComponent.css"

interface IProps {
    pokemon: IPokemon
}

const AddToFavoriteComponent:FC<IProps> = ({pokemon}) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const storageKey = `${pokemon.name}`;

    useEffect(() => {
        const stored = localStorage.getItem(storageKey);
        setIsFavorite(!!stored);
    }, [storageKey]);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            localStorage.removeItem(storageKey);
        } else {
            localStorage.setItem(storageKey, JSON.stringify(pokemon));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={'favorite-button-container'}>
            <button
                className={'favorite-button'}
                onClick={handleToggleFavorite}>
                {isFavorite ? "Added" : "Add to favorite"}
            </button>
        </div>
    );
};

export default AddToFavoriteComponent;
