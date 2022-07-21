import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [{ "title": "testproduct", "id": 32, "price": 18 }]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, product) => {
            state.cartProducts.push(product.payload)
        },
        clearCart: (state) => {
            state.cartProducts.length = 0
        },
        deleteProductFromCart: (state, id) => {
            state.cartProducts = [...state.cartProducts.filter(e => e.id !== id.payload)]
        }
    }
})

export const { addToCart, clearCart, deleteProductFromCart } = cartSlice.actions

export default cartSlice.reducer