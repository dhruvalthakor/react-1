import { configureStore } from '@reduxjs/toolkit'
import cartslice from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    addcart:cartslice,
  },
})