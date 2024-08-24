import React from 'react';
import PokemonsComponent from "../components/PokemonsComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";
import {useAppSelector} from "../redux/store";

const PokemonsPage = () => {

    const [searchParams] = useSearchParams();
    const currentPage= searchParams.get('page') || '1';
    const data = useAppSelector(state => state.dataSlice.data);
    const totalPages = Math.ceil(data.count / 20);

    return (
        <>
            <PokemonsComponent/>
            <PaginationComponent page={currentPage} total={totalPages}/>
        </>
    );
};

export default PokemonsPage;