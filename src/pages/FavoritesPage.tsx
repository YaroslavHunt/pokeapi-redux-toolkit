import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";
import FavoritesComponent from "../components/FavoritesComponent";
import { useAppSelector } from "../redux/store";
import { IPokemon } from "../models/IPokemon";

const FavoritesPage = () => {
    const { pokemons } = useAppSelector(state => state.pokemonSlice);
    const [searchParams] = useSearchParams();
    const [favorites, setFavorites] = useState<IPokemon[]>([]);
    const pageSize = 20;
    const currentPage = parseInt(searchParams.get('page') || '1', 10);


    useEffect(() => {
        const storedFavorites: IPokemon[] = [];

        pokemons.forEach(item => {
            const storageKey = `${item.name}`;
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                const parsed = JSON.parse(stored);
                storedFavorites.push(parsed);
            }
        });

        setFavorites(storedFavorites);
    }, [pokemons]);

    const totalPages = Math.ceil(favorites.length / pageSize);
    const offset = (currentPage - 1) * pageSize;
    const paginatedFavorites = favorites.slice(offset, offset + pageSize);

    return (
        <div>
            <FavoritesComponent data={paginatedFavorites} />
            <PaginationComponent page={currentPage.toString()} total={totalPages}/>
        </div>
    );
};

export default FavoritesPage;


