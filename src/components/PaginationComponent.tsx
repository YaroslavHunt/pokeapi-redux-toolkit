import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import '../styles/PaginationComponent.css';
import {pokemonActions} from "../redux/slices/pokemonSlice";
import {dataActions} from "../redux/slices/dataSlice";

interface IProps {
    page: string
    total: number
}

const PaginationComponent: FC<IProps> = ({page, total}) => {


    const pageNum = parseInt(page);
    const prev = pageNum > 1 ? pageNum - 1 : null;
    const next = pageNum <= total ? pageNum + 1 : null;
    const offset = (pageNum - 1) * 20;


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pokemonActions.loadPokemons({offset: offset.toString(), limit: '20'}));
        dispatch(dataActions.loadData());
    }, [dispatch, offset]);

    return (
        <div className="pagination-container">
            {prev && (
                <Link to={`?page=${prev}`} className="pagination-link">
                    <button className="pagination-button">prev</button>
                </Link>
            )}
            <span className="pagination-text">{page} of {total}</span>
            {next && (
                <Link to={`?page=${next}`} className="pagination-link">
                    <button className="pagination-button">next</button>
                </Link>
            )}
        </div>
    );
};

export default PaginationComponent;
