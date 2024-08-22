import React, {FC} from 'react';
import '../styles/PokemonImgComponent.css';


interface IProps {
    imgUrl: string
}


const PokemonImgComponent:FC<IProps> = ({imgUrl}) => {
    return (
        <div className="pokemon-image-container">
            <img src={imgUrl} alt={"Pokemon"} className="pokemon-image"/>
        </div>
    );
};

export default PokemonImgComponent;