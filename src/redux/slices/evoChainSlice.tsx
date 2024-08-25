import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {evoChainService} from "../../services/api.service";
import {AxiosError} from "axios";

type evoChainType = {
    urls: string[];
    url: string;
    forms: string[]; // Тепер масив рядків
};

const evoChainInit: evoChainType = {
    urls: [],
    url: "",
    forms: []
};

const loadChain = createAsyncThunk(
    'chain/loadChain',
    async (_, thunkAPI) => {
        try {
            const data = await evoChainService.getEvolutions();
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

const loadSpecies = createAsyncThunk(
    'species/loadSpecies',
    async (id:string, thunkAPI) => {
        try {
            const data = await evoChainService.getSpeciesById(id);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

const loadForms = createAsyncThunk(
    'forms/loadForms',
    async (url:string, thunkAPI) => {
        try {
            const data = await evoChainService.getFormsByUrl(url);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const evoChainSlice = createSlice({
    name: "evolutionChain",
    initialState: evoChainInit,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadForms.fulfilled, (state, action) => {
                state.forms = action.payload
            })
            .addCase(loadSpecies.fulfilled, (stae, action) => {
                stae.url = action.payload
            })
            .addCase(loadChain.fulfilled, (state, action) => {
                state.urls = action.payload
            })
            .addCase(loadChain.rejected, () => {console.log("Rejected")})
            .addCase(loadSpecies.rejected, () => {console.log("Rejected")})
            .addCase(loadForms.rejected, () => {console.log("Rejected")})
});

export const evoChainActions = {
    ...evoChainSlice.actions,
    loadChain,
    loadSpecies,
    loadForms
}
