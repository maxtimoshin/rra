import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, deleteProductFromCart } from '../../redux/Slices/cartSlice';

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()
    const clearCartHandler = () => {
        dispatch(clearCart())
    }
    const deleteHandler = (id) => {
        dispatch(deleteProductFromCart(id))
    }
    return (
        <>
            <ul>
                { cartProducts.length !== 0? cartProducts.map(product => (
                    <li key={product.id}>{product.title}<button onClick={() => deleteHandler(product.id) }>delete</button></li>
                )) : 'Cart is empty'}
            </ul>
            <button onClick={()=> clearCartHandler()}>Clear Cart</button>
        </>
    );
};

export default Cart;