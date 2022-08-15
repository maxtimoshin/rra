import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { addToCart } from '../../redux/Slices/cartSlice';
import { useDispatch } from 'react-redux'
import './style.css'
import AOS from "aos";
import "aos/dist/aos.css";

const ProductItem = ({ item }) => {

    useEffect(() => {
        AOS.init()
        AOS.refresh();
      }, []);

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

    const [rating, setRating] = useState()
    const ratingChanged = (newRating) => {
        setRating(newRating)
    }
    return (
        <li className="list-item" data-aos="fade-up">
            <div className="item-image-block">
                <img className='item-image' alt="item" src={item.image} />
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
    )
}

export default ProductItem