import React, { useState } from 'react';
import '../styles/PokemonLikeButton.css';

const PokemonLikeButton = () => {

    const [like, setLike] = useState(false);

    const handleClick = () => {
        setLike(prevState => !prevState);
    };

    //todo

    return (
        <div className={'pokemon-like-button-container'}>
            <button
                onClick={handleClick}
                className={like ? 'pokemon-like-button-red' : 'pokemon-like-button-grey'}
            >
                &#x2764;
            </button>
        </div>
    );
};

export default PokemonLikeButton;
