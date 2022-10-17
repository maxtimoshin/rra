import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slices/cartSlice'
import authReducer from './Slices/authSlice'
import { goodsApi } from './API/query'

export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware)
})
