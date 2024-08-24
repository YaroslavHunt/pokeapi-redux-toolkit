import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";
import FavoritesComponent from "../components/FavoritesComponent";
import { useAppSelector } from "../redux/store";
import { IPokemon } from "../models/IPokemon";

const FavoritesPage = () => {
    const { pokemons } = useAppSelector(state => state.pokemonSlice);
    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get('page') || '1';
    const [favorites, setFavorites] = useState<IPokemon[]>([]);

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

    const totalPages = Math.ceil(favorites.length / 20);

    return (
        <div>
            <FavoritesComponent data={favorites} />
            <PaginationComponent page={currentPage} total={totalPages}/>
        </div>
    );
};

export default FavoritesPage;
