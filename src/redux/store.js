import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slices/cartSlice'
import authReducer from './Slices/authSlice'
import inputsReducer from './Slices/inputsSlice'
import { goodsApi } from './API/query'

export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    auth: authReducer,
    cart: cartReducer,
    inputs: inputsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware)
})
