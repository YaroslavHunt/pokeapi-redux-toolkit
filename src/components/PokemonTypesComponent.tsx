import React, {FC} from 'react';
import {TypeData} from "../models/IPokemon";
import '../styles/PokemonTypesAndAbilitiesComponent.css';

interface IProps {
    types: TypeData[]
}

const PokemonTypesComponent:FC<IProps> = ({types}) => {
    return (
        <div className="types-container">
            <h2>Types:</h2>
            <ul className="types-list">
                {
                    types.map((typeData, index) => (
                        <li key={index}>
                            <span className="type-slot">{typeData.slot}</span>
                            <span className="slot-name">{typeData.type.name}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PokemonTypesComponent;