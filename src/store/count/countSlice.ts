import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        },
    }
})

export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer

