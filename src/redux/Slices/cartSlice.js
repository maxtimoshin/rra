import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartProducts: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, product) => {
            if (state.cartProducts.length > 0) {
                let currentItem = state.cartProducts.find(item => item.id === product.payload.id)
                if (currentItem) {
                    currentItem.quantity > 9 ? currentItem.quantity = 10 : currentItem.quantity ++        
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
            console.log(id)
            state.cartProducts = state.cartProducts.filter(e => e.id !== id.payload)
        },
        addQuantity: (state, id) => {
            let currentItem = state.cartProducts.find(product => product.id === id.payload)
            currentItem.quantity > 9 ? currentItem.quantity = 10 : currentItem.quantity ++
        },
        decreaseQuantity: (state, id) => {
            let currentItem = state.cartProducts.find(product => product.id === id.payload)
            if (currentItem.quantity <= 1) {
                currentItem.quantity = 1
                state.cartProducts = state.cartProducts.filter(e => e.id !== id.payload)
            } else {
                currentItem.quantity--
            }
        }
    }
})

export const { addToCart, clearCart, deleteProductFromCart, addQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer