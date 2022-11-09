import React, { FC, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteProductFromCart, addQuantity, decreaseQuantity } from '../../redux/Slices/cartSlice';
import "./style.css"

import { CartProps } from "./types"


const CartItem: FC<CartProps> = ({ id, image, title, price, quantity }) => {
    const [deleteAnimation, setDeleteAnimation] = useState(false)
    useEffect(() => {

    }, [])
    const dispatch = useDispatch()
    const deleteHandler = (id: number) => {
        dispatch(deleteProductFromCart(id))
    }
    const addCount = (id: number) => {
        
        dispatch(addQuantity(id))
    }

    const decreaseCount = (id: number) => {
        dispatch(decreaseQuantity(id))
    }

    return (
        <>
            <li className='cart-item' key={id}>
                <img className='cart-item-image' alt="cart-icon" src={image} />
                <div className="product-title">{title}</div>
                <div className="item-counter">
                    <button onClick={() => decreaseCount(id)}>-</button>
                    {quantity}
                    <button onClick={() => addCount(id)}>+</button></div>
                <div className='product-price'> {(price * quantity).toLocaleString("ru", { style: 'currency', currency: 'usd' })}</div>
                <button className='cart-delete-button' onClick={() => deleteHandler(id)}>delete</button>
            </li>
        </>
    )
}

export default CartItem