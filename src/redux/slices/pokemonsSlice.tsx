import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {pokemonService} from "../../services/api.service";
import {AxiosError} from "axios";
import {IDataPokemon} from "../../models/IData";

type PokemonSliceType = {
    pokemons: IDataPokemon[],
    isLoaded: boolean
}

const pokemonInitState: PokemonSliceType = {
    pokemons: [],
    isLoaded: false
}


const loadPokemons = createAsyncThunk(
    'pokemons/loadPokemons',
    async (_, thunkAPI) => {
        try {
            let pokemons = await pokemonService.getAll();
            thunkAPI.dispatch(pokemonActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(pokemons);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);


export const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState: pokemonInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPokemons.fulfilled, (state, action) => {
                state.pokemons = action.payload
            })
            .addCase(loadPokemons.rejected, (state, action) => {
                console.log("Rejected");
            })
});

export const pokemonActions = {
    ...pokemonsSlice.actions,
    loadPokemons
}

