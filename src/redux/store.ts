import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {pokemonSlice} from "./slices/pokemonSlice";
import {dataSlice} from "./slices/dataSlice";
import {evoChainSlice} from "./slices/evoChainSlice";

export const store = configureStore({
    reducer:{
        pokemonSlice: pokemonSlice.reducer,
        dataSlice: dataSlice.reducer,
        evoChainSlice: evoChainSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

