import { createSlice } from '@reduxjs/toolkit'

export const globalsSlice = createSlice({
    name: 'global',
    initialState: {
        keys: null,
        user: null,
        wax: null,
        nfts: null
    },
    reducers: {
        logKey: (state,newItem) => {state.keys = newItem.payload},
        logUser: (state,newItem) => {state.user = newItem.payload},
        logNfts:(state,newItem ) => {state.nfts = newItem.payload},
        setWax: (state,newItem ) => {state.wax = newItem.payload},
    }   
})

// Action creators are generated for each case reducer function
export const { logKey,logUser,logNfts, setWax } = globalsSlice.actions

export default globalsSlice.reducer