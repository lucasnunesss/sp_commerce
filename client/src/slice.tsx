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
      const exidtingProduct = state.products.find((product) => product._id === action.payload._id)
      if(exidtingProduct){
        exidtingProduct.qtd++;
      
       
        state.total += action.payload.price
      } else {
        
        state.products.push({...action.payload, qtd: 1}) 
        state.total += action.payload.price
      }
      state.qtd++
    },

    subtractProduct: (state, action) => {
      const exidtingProduct = state.products.find((product) => product._id === action.payload._id)
      if(exidtingProduct){
        if(exidtingProduct.qtd === 1){
          exidtingProduct.qtd--;
          state.total -= action.payload.price
          state.products = state.products.filter((product) => product._id !== exidtingProduct._id)
        } else {
          exidtingProduct.qtd--;
          state.total -= action.payload.price
        }
      state.qtd--
       
      } 
    }
    
  }
});

export const {addProduct, subtractProduct} = cartSlice.actions

export default cartSlice.reducer;