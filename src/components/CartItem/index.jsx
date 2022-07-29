import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductFromCart ,addQuantity,decreaseQuantity } from '../../redux/Slices/cartSlice';

const CartItem = () => {
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()
    const deleteHandler = (id) => {
        dispatch(deleteProductFromCart(id))
    }
    const addCount = (id) => {
        dispatch(addQuantity(id))
    }

    const decreaseCount = (id) => {
        dispatch(decreaseQuantity(id))
    }

    return (
        <>
            {
                cartProducts.length !== 0 ? cartProducts.map(product => (
                    <li className='cart-item' key={product.id}>
                        <img className='cart-item-image' alt="cart-icon" src={product.image} />
                        <div className="product-title">{product.title}</div>
                        <div className="item-counter">
                            <button onClick={() => decreaseCount(product.id)}>-</button>
                            {product.quantity}
                            <button onClick={() => addCount(product.id)}>+</button></div>
                        <div className='product-price'> {(product.price*product.quantity).toLocaleString("ru", { style: 'currency', currency: 'usd' })}</div>
                        <button className='cart-delete-button' onClick={() => deleteHandler(product.id)}>delete</button>
                    </li>
                )) : <div className='empty-cart'>Your cart is empty</div>
            }
        </>
    )
}

export default CartItem