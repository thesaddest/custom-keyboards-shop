import {configureStore} from "@reduxjs/toolkit";
import keyboardReducer from './keyboardsSlice'


export default configureStore({
    reducer: {
        keyboards: keyboardReducer
    }
})