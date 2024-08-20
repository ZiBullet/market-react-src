import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import categoriesSlice from "./categories/categoriesSlice";
import categoryProductSlice from "./categoryProduct/categoryProductSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
        categoryProduct: categoryProductSlice
    }
})