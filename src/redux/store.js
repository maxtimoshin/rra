import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './Slices/usersSlice'
import filtersReducer from './Slices/filterSlice'
import cartReducer from './Slices/cartSlice'
import { goodsApi } from './API/query'

export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    users: usersReducer,
    filters: filtersReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware)
})
