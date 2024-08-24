import React from 'react';
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";
import FavoritesComponent from "../components/FavoritesComponent";
import {useAppSelector} from "../redux/store";

const FavoritesPage = () => {

    const { pokemons} = useAppSelector(state => state.pokemonSlice);
    const [searchParams] = useSearchParams();
    const currentPage= searchParams.get('page') || '1';
    const totalPages = 20;                                  //todo

    return (
        <div>
            <FavoritesComponent data={pokemons}/>
            <PaginationComponent page={currentPage} total={totalPages}/>
        </div>
    );
};

export default FavoritesPage;