import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.cartProducts.length > 0) {
                let currentItem = state.cartProducts.find(item => item.id === action.payload.id)
                if (currentItem) {
                    currentItem.quantity > 9 ? currentItem.quantity = 10 : currentItem.quantity++
                } else {
                    state.cartProducts.push(action.payload)
                }
            } else {
                state.cartProducts.push(action.payload)
            }
        },
        clearCart: (state) => {
            state.cartProducts.length = 0
        },
        deleteProductFromCart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(e => e.id !== action.payload)
        },
        addQuantity: (state, action) => {
            let currentItem = state.cartProducts.find(product => product.id === action.payload)
            currentItem.quantity > 9 ? currentItem.quantity = 10 : currentItem.quantity++
        },
        decreaseQuantity: (state, action) => {
            let currentItem = state.cartProducts.find(product => product.id === action.payload)
            if (currentItem.quantity <= 1) {
                currentItem.quantity = 1
                state.cartProducts = state.cartProducts.filter(e => e.id !== action.payload)
            } else {
                currentItem.quantity--
            }
        }
    }
})

export const { addToCart, clearCart, deleteProductFromCart, addQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer