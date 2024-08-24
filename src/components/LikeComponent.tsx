import React, {FC, useEffect, useState} from 'react';
import '../styles/LikeComponent.css';
import {IDataPokemon} from "../models/IData";

interface IProps {
    data: IDataPokemon,
}

const LikeComponent:FC<IProps> = ({data}) => {

    const [like, setLike] = useState(false);

    const storageKey = `${data.name}`;

    useEffect(() => {
        const stored = localStorage.getItem(storageKey);
        setLike(!!stored);
    }, [storageKey]);

    return (
        <div className={'pokemon-like-container'}>
            <span
                className={like ? 'pokemon-like-red' : 'pokemon-like-grey'}
            >
                &#x2764;
            </span>
        </div>
    );
};

export default LikeComponent;

