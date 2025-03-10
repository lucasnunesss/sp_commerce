"use client"
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./slice"

const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>