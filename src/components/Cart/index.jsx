import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, deleteProductFromCart } from '../../redux/Slices/cartSlice';
import './style.css'

const Cart = () => {
    const [cartIsOpen , cartToggler] = useState(false)
    const cartHandler = () => {
        cartToggler(cartIsOpen ? false : true)
    }
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
            <div className="cart">
                <div className="cart-icon" onClick={() => {cartHandler()}}>CART</div>
                <div className={cartIsOpen ? 'cart-bar visible' : 'cart-bar'}>
                    <ul className='cart-items-list'>
                        {cartProducts.length !== 0 ? cartProducts.map(product => (
                            <li className='cart-item' key={product.id}>{product.title}| {product.price}<button onClick={() => deleteHandler(product.id)}>delete</button></li>
                        )) : 'Cart is empty'}
                    </ul>
                    <div className="sum">
                        {cartProducts.length !== 0 ? cartProducts.reduce((acc, item) => (
                            acc += item.price
                        ), 0) : 0}
                    </div>
                    <button onClick={() => clearCartHandler()}>Clear Cart</button>
                </div>
            </div>
        </>
    );
};

export default Cart;