import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'addcart',
  initialState,
  reducers: {
    addhender: (state, action) => {
      const product = { ...action.payload, quantity: 1 };
      state.items.push(product);
    },
    deletehender: (state, action) => {
      state.items = state.items.filter((e) => e.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

// Action creators
export const { addhender, deletehender, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
