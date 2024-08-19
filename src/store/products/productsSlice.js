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

export const getData = createAsyncThunk("products/getProducts", async (_, {
    fulfillWithValue,
    rejectWithValue
}) => {
    try {
        const result = await axios.get("https://dummyjson.com/products?limit=100")

        const data = result.data.products;

        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message)
    }
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        sortProducts: (state, action) => {
            state.value?.sort((a, b) => {
                const key = action.payload.value;
                if (key === "title") {
                    return a.title.localeCompare(b.title);
                } else {
                    if (a[key] > b[key]) {
                        return -1;
                    } else if (a[key] < b[key]) {
                        return 1;
                    }

                    return 0
                }
            })
        }
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

export const {
    sortProducts
} = productsSlice.actions

export default productsSlice.reducer