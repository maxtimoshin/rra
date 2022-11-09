import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/Slices/cartSlice';
import CartItem from '../CartItem';
import './style.css'
import EmptyCart from "../../assets/empty-cart.png"
import { CartProps } from '../CartItem/types';

const Cart = () => {
    const cartProducts = useSelector((state: any) => state.cart.cartProducts)
    const [cartIsOpen, cartToggler] = useState(false)
    const [cartCounter, setCartCounter] = useState()

    useEffect(() => {
        setCartCounter(cartProducts.map((e: { quantity: any; }) => e.quantity).reduce((prev: any, product: any) => prev + product, 0))
    }, [cartProducts])

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
                <div className='cart-counter'>{cartCounter}</div>
                <div className="cart-icon" onClick={() => { cartHandler() }}></div>
                <div className={cartIsOpen ? 'cart-bar visible' : 'cart-bar hide-cart-bar'}>

                    {cartProducts.length !== 0 ?
                        <ul className={cartProducts.length > 5 ? 'cart-items-list cart-scroll' : 'cart-items-list'}>
                            {cartProducts.map((product: JSX.IntrinsicAttributes & CartProps) => <CartItem key={product.id} {...product} />)}
                        </ul> :
                        <div className='empty-cart'><span>Your cart is empty</span><img src={EmptyCart} alt="" /></div>
                    }

                    <div className="cart-summ">
                        Total : {cartProducts.length !== 0 ? cartProducts.reduce((acc: number, item: { price: number; quantity: number; }) => (
                            acc += item.price * item.quantity
                        ), 0).toLocaleString("ru", { style: 'currency', currency: 'usd' }) : 0}
                    </div>
                    <div className="promo">
                        <input type="number" placeholder='Enter your promo code here' />
                        <button className='promo-button'>Confirm</button>
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