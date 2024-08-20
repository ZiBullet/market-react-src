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

export const getCategoryProduct = createAsyncThunk("categoryProduct/getCategoryProduct", async (category, {
    fulfillWithValue,
    rejectWithValue
}) => {
    try {
        const result = await axios.get(`https://dummyjson.com/products/category/${category}`)

        const data = result.data.products;

        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data.message : error.message)
    }
})

export const categoryProductSlice = createSlice({
    name: "categoryProduct",
    initialState,
    reducers: {
        sortCategoryProduct: (state, action) => {
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
        builder.addCase(getCategoryProduct.pending, (state) => {
            state.isLoading = true;
            state.value = null;
            state.error = null;
        })
        builder.addCase(getCategoryProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.value = action.payload;
            state.status = action.meta.requestStatus;
            state.error = null;
        })
        builder.addCase(getCategoryProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.value = null;
            state.error = action.payload;
        })
    }
})

export const {
    sortCategoryProduct
} = categoryProductSlice.actions

export default categoryProductSlice.reducer