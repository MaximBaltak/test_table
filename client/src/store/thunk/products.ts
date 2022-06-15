import {createAsyncThunk} from "@reduxjs/toolkit";
import apiProducts from './../../api/requsets/requestsProducts'
//асинхронные запрос
export const getProductsRequest = createAsyncThunk(
    'products/getProductsRequest',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await apiProducts.getProducts();
            return data
        } catch (e) {
            rejectWithValue(e)
        }
    }
)
