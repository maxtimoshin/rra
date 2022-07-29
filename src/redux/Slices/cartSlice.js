import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, product) => {
            if (state.cartProducts.length > 0) {
                if (state.cartProducts.find(item => item.id === product.payload.id)) {
                    if (state.cartProducts.find(item => item.id === product.payload.id).quantity > 9) {
                        state.cartProducts.find(item => item.id === product.payload.id).quantity = 10 
                    } else {
                        state.cartProducts.find(item => item.id === product.payload.id).quantity ++
                    }
                    
                } else {
                    state.cartProducts.push(product.payload)
                }
            } else {
                state.cartProducts.push(product.payload)
            }
        },
        clearCart: (state) => {
            state.cartProducts.length = 0
        },
        deleteProductFromCart: (state, id) => {
            state.cartProducts = state.cartProducts.filter(e => e.id !== id.payload)
        },
        addQuantity: (state, id) => {
            if (state.cartProducts.find(product => product.id === id.payload).quantity > 9) {
                state.cartProducts.find(product => product.id === id.payload).quantity = 10
            } else {
                state.cartProducts.find(product => product.id === id.payload).quantity ++
            }
        },
        decreaseQuantity: (state, id) => {
            if (state.cartProducts.find(product => product.id === id.payload).quantity <= 1) {
                state.cartProducts.find(product => product.id === id.payload).quantity = 1
                state.cartProducts = state.cartProducts.filter(e => e.id !== id.payload)
            } else {
                state.cartProducts.find(product => product.id === id.payload).quantity--
            }
        }
    }
})

export const { addToCart, clearCart, deleteProductFromCart, addQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer