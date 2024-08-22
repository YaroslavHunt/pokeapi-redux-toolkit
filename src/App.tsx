import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {pokemonActions} from "./redux/slices/pokemonSlice";
import {dataActions} from "./redux/slices/dataSlice";
import {useAppDispatch} from "./redux/store";

function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pokemonActions.loadPokemons());
        dispatch(dataActions.loadData());
    }, [dispatch]);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
}

export default App;
