import {combineReducers} from "redux"

/**
 * Combine reducers
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript
 */
export const rootReducer = combineReducers({ // counter: counterReducer,
})

export type RootState = ReturnType < typeof rootReducer >
