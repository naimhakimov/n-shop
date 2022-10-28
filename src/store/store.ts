import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query";
import { counterReducer } from "./count/countSlice";

export const store = configureStore({
    reducer: {
        count: counterReducer
    },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
