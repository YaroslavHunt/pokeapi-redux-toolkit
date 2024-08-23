import React, {FC} from 'react';
import {AbilityData} from "../models/IPokemon";
import '../styles/PokemonTypesAndAbilitiesComponent.css';

interface IProps {
    abilities: AbilityData[]
}

const PokemonAbilitiesComponent: FC<IProps> = ({abilities}) => {
    return (
        <div className="abilities-container">
            <h2>Abilities:</h2>
            <ul className="abilities-list">
                {
                    abilities.map((abilityData, index) => (
                        <li key={index}>
                            <span className="ability-name">{abilityData.ability.name}</span>
                            <span className="is-hidden">(is hidden: {abilityData.is_hidden ? "yes" : "no"})</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PokemonAbilitiesComponent;