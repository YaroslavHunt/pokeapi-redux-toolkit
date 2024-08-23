import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {pokemonService} from "../../services/api.service";
import {AxiosError} from "axios";
import {IDataPokemon} from "../../models/IData";
import {IPokemon} from "../../models/IPokemon";


type PokemonSliceType = {
    pokemons: IDataPokemon[],
    isLoaded: boolean,
    pokemon: IPokemon
}

const pokemonInitState: PokemonSliceType = {
    pokemons: [],
    isLoaded: false,
    pokemon: {
        id: 1,
        name: "",
        abilities: [],
        stats: [],
        sprites: {other: {dream_world: {front_default: ""}}},
        forms: [],
        types:[],
        weight: 0
    }
}

const loadPokemons = createAsyncThunk(
    'pokemonSlice/loadPokemons',
    async ({ offset, limit }: { offset: string, limit: string }, thunkAPI) => {
        try {
            const pokemons = await pokemonService.getAll(offset ,limit);
            thunkAPI.dispatch(pokemonActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(pokemons);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const loadPokemonById = createAsyncThunk(
    'pokemonSlice/loadPokemonById',
    async (id: string, thunkAPI) => {
        try {
            const pokemon = await pokemonService.getPokemonById(id);
            return thunkAPI.fulfillWithValue(pokemon);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)


export const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: pokemonInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPokemonById.fulfilled, (state, action) => {
                state.pokemon = action.payload;
            })
            .addCase(loadPokemons.fulfilled, (state, action) => {
                state.pokemons = action.payload
            })
            .addCase(loadPokemons.rejected, () => {
                console.log("Rejected");
            })
});

export const pokemonActions = {
    ...pokemonSlice.actions,
    loadPokemons,
    loadPokemon: loadPokemonById
}

