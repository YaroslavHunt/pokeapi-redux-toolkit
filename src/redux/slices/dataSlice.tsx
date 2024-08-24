import {IData} from "../../models/IData";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {dataService} from "../../services/api.service";
import {AxiosError} from "axios";

type DataSliceType = {
    data: IData
}

const dataInitState: DataSliceType = {
    data: {
        count: 0,
        next: "",
        previous: "",
        results: []
    }
}

const loadData = createAsyncThunk(
    'data/loadData',
    async (_, thunkAPI) => {
        try {
            const data = await dataService.getData();
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState: dataInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(loadData.rejected, (state, action) => {
                console.log("Rejected");
            })
});

export const dataActions = {
    ...dataSlice.actions,
    loadData
}

