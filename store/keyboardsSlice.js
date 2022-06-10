import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchKeyboards = createAsyncThunk(
    'keyboards/fetchKeyboards',
    async function () {
        const response = await axios.get('http://localhost:5000/keyboards');
        return response.data
    });


const keyboardsSlice = createSlice({
    name: "keyboards",
    initialState: {
        keyboards: [],
        status: null,
        error: null
    },
    extraReducers: {
        [fetchKeyboards.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchKeyboards.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.keyboards = action.payload;
        },
        [fetchKeyboards.rejected]: (state, action) => {
        },
    },


});
export default keyboardsSlice.reducer