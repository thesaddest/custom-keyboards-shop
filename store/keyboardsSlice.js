import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchKeyboards = createAsyncThunk(
    'keyboards/fetchKeyboards',
    async function (_, {rejectWithValue}) {
        try {
            const response = await axios.get('http://localhost:5000/keyboards');
            console.log(response)

            if(response.statusText !== 'OK') {
                throw new Error('Sever Error!')
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(e.message)
        }

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
            state.status = 'rejected';
            state.error = action.payload;
        },
    },


});
export default keyboardsSlice.reducer