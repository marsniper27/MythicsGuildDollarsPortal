import {combineReducers} from '@reduxjs/toolkit'
import{ persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import GlobalsReducer from './Globals'
import FloatReducer from './Float'

const rootPersistConfig = {
   key: 'root',
   storage,
}
export const rootReducer = combineReducers({
    global:  GlobalsReducer,
    float: FloatReducer,
})


export default persistReducer(rootPersistConfig, rootReducer)