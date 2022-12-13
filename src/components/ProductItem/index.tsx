import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { addToCart } from '../../redux/Slices/cartSlice';
import { useDispatch } from 'react-redux'
import './style.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { IProductProps, ICardProps } from "./types"
import { useInView } from "react-intersection-observer";


const ProductItem = ({ item }: IProductProps) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })
    useEffect(() => {
        AOS.init()
        AOS.refresh();
    }, []);

    const dispatch = useDispatch()
    const cartHandler = ({ id, title, price, image }: ICardProps) => {
        dispatch(addToCart({
            "title": title,
            "id": id,
            "price": price,
            "image": image,
            "quantity": 1,
        }))
    }

    const [rating, setRating] = useState()
    const ratingChanged = (newRating: React.SetStateAction<undefined>) => {
        setRating(newRating)
    }
    return (
        <li className="list-item" >
            <Link ref={ref} to={`/products/${item.id}`} className="item-image-block">
                {/* {inView ? <img className='item-image' alt="item" src={item.image} /> : <div className="test-block"><div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>} */}
            </Link>
            <Link to={`/products/${item.id}`} className="item-title">{item.title}</Link>
            <div className="item-rating">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    activeColor="#ffd700"
                    value={rating ? +rating : +item.rating.rate.toFixed(0)}
                />
            </div>
            <Link to={`/products/${item.id}`} className="item-price">
                {item.price.toLocaleString("ru", { style: 'currency', currency: 'usd' })}
            </Link>
            <button className="add-to-cart-button" onClick={() => cartHandler(item)}>Add to Cart</button>
        </li>
    )
}

export default ProductItem