import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import persistReducer from "./root-reducer"

export const store = configureStore({
  reducer: persistReducer
})
//export const store = createStore(persistReducer,applyMiddleware)

export const persistor = persistStore(store)

export default (store, persistor);