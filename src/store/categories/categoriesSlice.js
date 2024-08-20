import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle',
    isLoading: false,
    value: null,
    error: null
}

export const getData = createAsyncThunk("categories/getCategories", async (_, {
    fulfillWithValue,
    rejectWithValue
}) => {
    try {
        const result = await axios.get("https://dummyjson.com/products/categories")
        const data = result.data;
        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message)
    }
})

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.isLoading = true;
            state.value = null;
            state.error = null;
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.value = action.payload;
            state.status = action.meta.requestStatus;
            state.error = null;
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.isLoading = false;
            state.value = null;
            state.error = action.payload;
        })
    }
})


export default categoriesSlice.reducer