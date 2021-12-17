import { createSlice } from '@reduxjs/toolkit'

export const floatSlice = createSlice({
    name: 'float',
    initialState: {
        keys: null,
        accountName: ".bab.wam",
        nfts: null,
        wax: null,
    },
    reducers: {
        logKey: (state,newItem) => {state.keys = newItem.payload},
        logNfts:(state,newItem ) => {state.nfts = newItem.payload},
        setWax: (state,newItem ) => {state.wax = newItem.payload},
        setAccountName: (state,newItem ) => {state.accountName = newItem.payload},
    }   
})

// Action creators are generated for each case reducer function
export const { logKey,logNfts, setWax,setAccountName } = floatSlice.actions

export default floatSlice.reducer