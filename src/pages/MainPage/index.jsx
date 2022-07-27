import React, { useState } from 'react'
import FiltersList from '../../components/FiltersList';
import InputsList from '../../components/InputsList'
import { addToCart } from '../../redux/Slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } from '../../redux/API/query';
import Cart from '../../components/Cart';
import Header from '../../components/Header';
import ReactStars from "react-rating-stars-component";

import './style.css'

const MainPage = () => {

    const [count, setCount] = useState('')
    const [newProduct, setNewProduct] = useState('')

    const { data, isLoading } = useGetProductsQuery(count)
    const dispatch = useDispatch()

    const cartHandler = (id, title, price) => {
        dispatch(addToCart({
            "title": title,
            "id": id,
            "price": price,
        }))
    }

    const [addProduct, { }] = useAddProductMutation()
    const [deleteProduct, { }] = useDeleteProductMutation()

    const handleAddProduct = async () => {
        if (newProduct) {
            await addProduct({
                "name": newProduct,
                "price": 1,
                "image": 'google.com',
            }).unwrap()
        }
    }

    const [rating , setRating] = useState()
    const ratingChanged = (newRating) => {
        setRating(newRating)
    };


    return (
        <>
            <Header />
            <div className="main">
                <div className='products'>
                    <ul className="list-items">
                        {isLoading ? 'loading...' : data.map(item => (
                            <li key={item.id} className="list-item">
                                <div className="item-image-block">
                                    <img className='item-image' src={item.image} />
                                </div>
                                <div className="item-title">{item.title}</div>
                                <div className="item-rating">
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={35}
                                    activeColor="#ffd700"
                                    value={+rating || +item.rating.rate.toFixed(0)}
                                />
                                </div>
                                <button className="add-to-cart-button" onClick={() => cartHandler(item.id, item.title, item.price)}>Add to Cart</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer"></div>
            <div>
                <input type="text" value={newProduct} onChange={e => setNewProduct(e.target.value)} />
                <button onClick={handleAddProduct}>Add New Product</button>
                <select value={count} onChange={e => setCount(e.target.value)}>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
                {/* <InputsList />
        <FiltersList /> */}
            </div>
        </>
    );
}

export default MainPage