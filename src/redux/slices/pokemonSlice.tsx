import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {pokemonService} from "../../services/api.service";
import {AxiosError} from "axios";
import {IDataPokemon} from "../../models/IData";
import {IPokemon} from "../../models/IPokemon";


type PokemonSliceType = {
    pokemons: IPokemon[],
    pokemonsData: IDataPokemon[],
    isLoaded: boolean,
    pokemon: IPokemon
    id: string
}

const pokemonInitState: PokemonSliceType = {
    id: "",
    pokemons: [],
    pokemonsData: [],
    isLoaded: false,
    pokemon: {
        id: 1,
        name: "",
        abilities: [],
        stats: [],
        sprites: {other: {dream_world: {front_default: ""}}},
        forms: [],
        types: [],
        weight: 0
    }
}

const loadAllPokemons = createAsyncThunk(
    'pokemonSlice/loadPokemons',
    async (_, thunkAPI) => {
        try {
            const pokemons = await pokemonService.getAll();
            return thunkAPI.fulfillWithValue(pokemons);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

const loadPokemonsData = createAsyncThunk(
    'pokemonSlice/loadPokemonsData',
    async ({offset, limit}: { offset: string, limit: string }, thunkAPI) => {
        try {
            const pokemons = await pokemonService.getAllByLimit(offset, limit);
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
            const pokemon = await pokemonService.getPokemonByIdOrName(id);
            return thunkAPI.fulfillWithValue(pokemon);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

const loadIDByName = createAsyncThunk(
    'id/loadId',
    async (name: string, thunkAPI) => {
        try {
            const id = await pokemonService.getIdByName(name);
            return thunkAPI.fulfillWithValue(id);
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
            .addCase(loadAllPokemons.fulfilled,(state,action) => {
                state.pokemons = action.payload;
            })
            .addCase(loadPokemonById.fulfilled, (state, action) => {
                state.pokemon = action.payload;
            })
            .addCase(loadPokemonsData.fulfilled, (state, action) => {
                state.pokemonsData = action.payload
            })
            .addCase(loadIDByName.fulfilled, (state, action) => {
                state.id = action.payload
            })
            .addCase(loadPokemonsData.rejected, () => {
                console.log("Rejected");
            })
});

export const pokemonActions = {
    ...pokemonSlice.actions,
    loadAllPokemons,
    loadPokemons: loadPokemonsData,
    loadPokemon: loadPokemonById,
    loadId: loadIDByName
}

