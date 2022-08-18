import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/Slices/cartSlice';
import CartItem from '../CartItem';
import './style.css'
import EmptyCart from "../../assets/empty-cart.png"
// import {ICartProductsProps, ISingleProduct} from "./types"

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.cartProducts)
    const [cartIsOpen, cartToggler] = useState(false)
    const cartHandler = () => {
        cartToggler(cartIsOpen ? false : true)
    }

    const dispatch = useDispatch()
    const clearCartHandler = () => {
        dispatch(clearCart())
    }

    return (
        <>
            <div className="cart">
                <div className="cart-icon" onClick={() => { cartHandler() }}></div>
                <div className={cartIsOpen ? 'cart-bar visible' : 'cart-bar hide-cart-bar'}>
                    <ul className={cartProducts.length > 5 ? 'cart-items-list cart-scroll' : 'cart-items-list'}>
                        {cartProducts.length !== 0 ?
                            cartProducts.map((product) => <CartItem key={product.id} {...product} />) :
                            <div className='empty-cart'><span>Your cart is empty</span><img src={EmptyCart} alt="" /></div>}
                    </ul>
                    <div className="cart-summ">
                        Total : {cartProducts.length !== 0 ? cartProducts.reduce((acc, item) => (
                            acc += item.price * item.quantity
                        ), 0).toLocaleString("ru", { style: 'currency', currency: 'usd' }) : 0}
                    </div>
                    <div className="cart-nav">
                        <button className='clear-cart' onClick={() => clearCartHandler()}>Clear Cart</button>
                        <button className='confirm-order'>Confirm Order</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;