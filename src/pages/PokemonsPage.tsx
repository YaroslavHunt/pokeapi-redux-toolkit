import React from 'react';
import PokemonsComponent from "../components/PokemonsComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";

const PokemonsPage = () => {

    const [searchParams] = useSearchParams();
    const currentPage= searchParams.get('page') || '1';


    return (
        <>
            <PokemonsComponent/>
            <PaginationComponent page={currentPage}/>
        </>
    );
};

export default PokemonsPage;