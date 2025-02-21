"use client"
import { createSlice } from "@reduxjs/toolkit"

interface Cart {
  products: Product[];
  qtd: number;
  total: number;
}

const initialState: Cart = {
  products: [],
  qtd: 0,
  total: 0
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.qtd++;
      state.products.push(action.payload.products)
      state.total += action.payload.price
    }
  }
});

export const {addProduct} = cartSlice.actions

export default cartSlice.reducer;