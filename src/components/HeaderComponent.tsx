import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/pokemons'}>Pokemon's</Link></li>
                <li><Link to={'/favorites'}>Favorites</Link></li>
            </ul>

            <hr/>
        </div>
    );
};

export default HeaderComponent;