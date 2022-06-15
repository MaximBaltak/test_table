import {configureStore} from "@reduxjs/toolkit";
import reducerProducts from './slices/products'

export const store = configureStore({
    reducer: {
        reducerProducts,
    },
    devTools: true,
})
export type appDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;

