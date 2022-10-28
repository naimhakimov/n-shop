import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query";
import { counterReducer } from "./count/countSlice";

export const store = configureStore({
    reducer: {
        count: counterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['counter/increment', 'counter/decrement'],
            },
        }),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
