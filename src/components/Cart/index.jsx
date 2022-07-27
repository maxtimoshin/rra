import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, deleteProductFromCart } from '../../redux/Slices/cartSlice';
import './style.css'

const Cart = () => {
    const [cartIsOpen, cartToggler] = useState(false)
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
                <div className="cart-icon" onClick={() => { cartHandler() }}></div>
                <div className={cartIsOpen ? 'cart-bar visible' : 'cart-bar'}>
                    <ul className={cartProducts.length >= 5 ? 'cart-items-list cart-scroll' : 'cart-items-list'}>
                        {cartProducts.length !== 0 ? cartProducts.map(product => (
                            <li className='cart-item' key={product.id}><div className="product-title">{product.title}</div><div className='product-price'> {product.price.toLocaleString("ru", { style: 'currency', currency: 'usd' })}</div><button className='cart-delete-button' onClick={() => deleteHandler(product.id)}>delete</button></li>
                        )) : <div className='empty-cart'>Your cart is empty</div>}
                    </ul>
                    <div className="cart-summ">
                        {cartProducts.length !== 0 ? cartProducts.reduce((acc, item) => (
                            acc += item.price
                        ), 0).toLocaleString("ru", { style: 'currency', currency: 'usd' }) : 0}
                    </div>
                    <button className='clear-cart' onClick={() => clearCartHandler()}>Clear Cart</button>
                </div>
            </div>
        </>
    );
};

export default Cart;