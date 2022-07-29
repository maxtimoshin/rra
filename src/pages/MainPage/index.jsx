import React, { useState } from 'react'
import { addToCart } from '../../redux/Slices/cartSlice';
import { useDispatch } from 'react-redux'
import { useGetProductsQuery} from '../../redux/API/query';
import Header from '../../components/Header';
import ReactStars from "react-rating-stars-component";

import './style.css'
import { parse } from 'graphql';

const MainPage = () => {
    const [sortType, setSortType] = useState('desc')

    const { data, isLoading } = useGetProductsQuery()

    const dispatch = useDispatch()
    const cartHandler = (id, title, price, image) => {
        dispatch(addToCart({
            "title": title,
            "id": id,
            "price": price,
            "image": image,
            "quantity": 1,
        }))
    }
    const sortHandler = (a,b) => {
       if (sortType === 'desc') {return parseFloat(b.price) - parseFloat(a.price)}
       if (sortType === 'asc') {return parseFloat(a.price) - parseFloat(b.price)}
    }
    const [rating, setRating] = useState()
    const ratingChanged = (newRating) => {
        setRating(newRating)
    }
    const selectSortHandler = (e) => {
        setSortType(e)
    }
    return (
        <>
            <Header />
            <div className="main">    
                <div className="filters">
                <select onChange={(e)=> selectSortHandler(e.target.value)}>
                    <option value="desc">Price (expensive to cheap)</option>
                    <option value="asc">Price (cheap to expensive)</option>
                    <option value="rate-up">Rating (high to low)</option>
                    <option value="rate-down">Rating (low to high)</option>
                </select>
                </div>
                <div className='products'>
                    <ul className="list-items">
                        
                        {isLoading ? 'loading...' : [...data].sort((a,b)=> sortHandler(a,b)).map(item => (
                            <li key={item.id} className="list-item">
                                <div className="item-image-block">
                                    <img className='item-image' src={item.image} />
                                </div>
                                <div className="item-title">{item.title}</div>
                                <div className="item-rating">
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={30}
                                        activeColor="#ffd700"
                                        value={+rating || +item.rating.rate.toFixed(0)}
                                    />
                                </div>
                                <div className="item-price">
                                    {item.price.toLocaleString("ru", { style: 'currency', currency: 'usd' })}
                                </div>
                                <button className="add-to-cart-button" onClick={() => cartHandler(item.id, item.title, item.price, item.image)}>Add to Cart</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer"></div>
            <div>
            </div>
        </>
    );
}

export default MainPage