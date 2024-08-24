import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {pokemonSlice} from "./slices/pokemonSlice";
import {dataSlice} from "./slices/dataSlice";

export const store = configureStore({
    reducer:{
        pokemonSlice: pokemonSlice.reducer,
        dataSlice: dataSlice.reducer
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

