import React from 'react';
import {Link} from "react-router-dom";
import '../styles/HeaderComponent.css';
import SearchComponent from "./SearchComponent";

const HeaderComponent = () => {
    return (
        <div>
            <div className="header-container">
                <button className="header-button">
                    <Link to={'/'}>Home</Link>
                </button>
                <button className="header-button">
                    <Link to={'/pokemons'}>Pok<span className={"e"}>é</span>mon's</Link>
                </button>
                <button className="header-button">
                    <Link to={'/favorites'}>Favorites</Link>
                </button>
            </div>
            <SearchComponent/>
            <hr/>
        </div>
    );
};

export default HeaderComponent;
