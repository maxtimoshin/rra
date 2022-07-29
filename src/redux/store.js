import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slices/cartSlice'
import { goodsApi } from './API/query'

export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,

    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware)
})
