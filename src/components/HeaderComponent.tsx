import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <hr/>
            <Link to={'/pokemons'}>Pokemon's</Link>
            <hr/>
            <Link to={'/favorites'}>Favorites</Link>
            <hr/>
            <hr/>
            <hr/>
        </div>
    );
};

export default HeaderComponent;