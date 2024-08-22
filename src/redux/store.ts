import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {pokemonsSlice} from "./slices/pokemonsSlice";
import {dataSlice} from "./slices/dataSlice";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

export const store = configureStore({
    reducer:{
        pokemonSlice: pokemonsSlice.reducer,
        dataSlice: dataSlice.reducer
    }
});

