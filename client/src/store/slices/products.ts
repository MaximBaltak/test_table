import {IProduct, IProductsState} from "./type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getProductsRequest} from "../thunk/products";
import {orderSort} from "../../components/Filter/FilterValue/types";
import {colum} from "../../types/typesTable";
import {sortProducts} from "../../utils/sort";
import {pagination} from "../../utils/pagination";

const state: IProductsState = {
    filterInput: '',
    filterColumn: 2,
    filterValue: orderSort.DESCENDING,
    filterProducts: [],
    products: [],
    onePage: 10,
    pages: 1,
}
const productsSlice = createSlice({
    name: 'products',
    initialState: state,
    reducers: {
        setFilterValue(state, action: PayloadAction<orderSort>) {
            state.filterValue = action.payload
            state.filterProducts.sort((a, b) => sortProducts(a, b, state.filterColumn, state.filterValue))
        },
        setFilterColumn(state, action: PayloadAction<colum>) {
            state.filterColumn = action.payload
            state.filterProducts.sort((a, b) => sortProducts(a, b, state.filterColumn, state.filterValue))
        },
        setFilterInput(state, action: PayloadAction<string>) {
            state.filterInput = action.payload
            //ищем совпадение в таблице для фильтра
            state.filterProducts = []
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i].title.includes(state.filterInput)) {
                    state.filterProducts.unshift(state.products[i])
                }
            }
            //если фильтр для нахождения пустой, опять разделяем все данные по страницам и сортируем
            if (!state.filterInput) {
                state.filterProducts = []
                pagination(state)
                state.filterProducts.sort((a, b) => sortProducts(a, b, state.filterColumn, state.filterValue))
            }

        },
        nextPage(state, action: PayloadAction<number>) {
            //выводим диопазон данных исходя из выбранной странницы
            const lastEl: number = (state.onePage * action.payload)
            const firsEl: number = lastEl - state.onePage
            state.filterProducts = state.products.slice(firsEl, lastEl)
        }

    },
    extraReducers: {
        [getProductsRequest.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
            pagination(state)
            state.filterProducts.sort((a, b) => sortProducts(a, b, state.filterColumn, state.filterValue))
        },
        [getProductsRequest.rejected.type]: (state, action) => {
            console.log(action.payload)
        }
    }
})
export default productsSlice.reducer
export const {setFilterInput, setFilterColumn, setFilterValue, nextPage} = productsSlice.actions
