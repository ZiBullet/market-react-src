import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: null,
    status: "idle"
}

export const getProducts = createAsyncThunk("products/getProducts",
    async () => {
        let response = await axios.get("https://dummyjson.com/products?limit=100");
        const {data} = response;
        return data.products;
    }
)

export const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "ok"
            })
    }
})

export default productsSlice.reducer;

export const productsSelector = state => state.products;