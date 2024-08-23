import React, {FC} from 'react';
import {StatData} from "../models/IPokemon";
import '../styles/PokemonStatsComponent.css';

interface IProps {
    stats: StatData[];
}

const PokemonStatsComponent:FC<IProps> = ({stats}) => {
    return (
        <div className="stats-container">
            <h2>Stats:</h2>
            <ul className="stats-list">
                {
                    stats.map((statData, index) => (
                        <li key={index}>
                            <span className="stat-name">{statData.stat.name}: <span
                                className="stat-effort">(effort - {statData.effort})</span></span>
                            <h3>{statData.base_stat}</h3>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PokemonStatsComponent;