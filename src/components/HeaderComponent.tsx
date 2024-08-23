import React from 'react';
import {Link} from "react-router-dom";
import '../styles/HeaderComponent.css';

const HeaderComponent = () => {
    return (
        <div>
            <div className="header-container">
                <button className="header-button">
                    <Link to={'/'}>Home</Link>
                </button>
                <button className="header-button">
                    <Link to={'/pokemons'}>Pokemon's</Link>
                </button>
                <button className="header-button">
                    <Link to={'/favorites'}>Favorites</Link>
                </button>
            </div>
            <hr/>
        </div>
    );
};

export default HeaderComponent;
