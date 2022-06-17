import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchKeyboards = createAsyncThunk(
//     "keyboards/fetchKeyboards",
//     async function (_, { rejectWithValue }) {
//         try {
//             const response = await axios.get("http://localhost:5000/keyboards");

//             if (response.statusText !== "OK") {
//                 throw new Error("Sever Error!");
//             }

//             return response.data;
//         } catch (e) {
//             return rejectWithValue(e.message);
//         }
//     }
// );

// const keyboardsSlice = createSlice({
//     name: "keyboards",
//     initialState: {
//         keyboards: [],
//         status: null,
//         error: null,
//     },
//     extraReducers: {
//         [fetchKeyboards.pending]: (state) => {
//             state.status = "loading";
//             state.error = null;
//         },
//         [fetchKeyboards.fulfilled]: (state, action) => {
//             state.status = "resolved";
//             state.keyboards = action.payload;
//         },
//         [fetchKeyboards.rejected]: (state, action) => {
//             state.status = "rejected";
//             state.error = action.payload;
//         },
//     },
// });

const keyboardsSlice = createSlice({
    name: "keyboards",
    initialState: {
        keyboards: [
            {
                id: 1,
                createdAt: "2022-06-10T17:22:18.356Z",
                updatedAt: "2022-06-10T17:40:23.333Z",
                title: "FL680",
                description: "Small layout, easy to carry and no worry.",
                price: "$115.99",
                img: "https://img.joomcdn.net/c6c178e175db9446805739fa9418593f7c533f7f_original.jpeg",
            },
            {
                id: 2,
                createdAt: "2022-06-10T20:58:46.114Z",
                updatedAt: "2022-06-10T20:58:46.114Z",
                title: "FL Q75",
                description: "High-gloss mirror, appearance is lit.",
                price: "$145.99",
                img: "https://hanoicomputercdn.com/media/product/65246_ban_phim_co_khong_day_fl_esport_q75_blue_haze_3_mode_jellyfish_sw_kailh_box_usbc_bluetooth_rgb_0000_1.jpg",
            },
            {
                id: 3,
                createdAt: "2022-06-10T20:59:44.296Z",
                updatedAt: "2022-06-10T20:59:44.296Z",
                title: "FL CMK87",
                description: "Color scheme aluminium alloy hit.",
                price: "$155.99",
                img: "https://product.hstatic.net/1000026716/product/61414_ban_phim_co_flesport_cmk87_ice_mint_coolmint_sw_kailh_box_0004_5_a5ce03d9b8634940b95f54346343d319.jpg",
            },
            {
                id: 4,
                createdAt: "2022-06-10T21:00:21.387Z",
                updatedAt: "2022-06-10T21:00:21.387Z",
                title: "FL 980",
                description: "98 keys to save the desktop space.",
                price: "$165.99",
                img: "https://cdn.shopify.com/s/files/1/0588/1108/9090/products/1_33c6769b-dd65-41a4-a471-a1ae88b18207_1024x1024@2x.jpg?v=1645008251",
            },
        ],
    },
    reducers: {},
});
export default keyboardsSlice.reducer;
