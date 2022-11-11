import React, { useState } from 'react'
import { useGetProductsQuery } from '../../redux/API/query';
import ItemLoader from '../../components/ItemLoader';
import './style.css'
import ProductItem from '../../components/ProductItem';
import { IFilters } from './types';

const MainPage = () => {
    const [sortType, setSortType] = useState('desc')
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState(false)

    const { data, isLoading } = useGetProductsQuery([])


    const sortHandler = (a: IFilters, b: IFilters) => {
        switch (sortType) {
            case 'desc':
                return parseFloat(b.price) - parseFloat(a.price)
            case 'asc':
                return parseFloat(a.price) - parseFloat(b.price)
            case 'rate-up':
                return parseFloat(b.rating.rate) - parseFloat(a.rating.rate)
            case 'rate-down':
                return parseFloat(a.rating.rate) - parseFloat(b.rating.rate)
            default:
                return parseFloat(b.price) - parseFloat(a.price)
        }
    }

    const selectSortHandler = (e: React.SetStateAction<string>) => {
        setSortType(e)
    }

    const checkboxHandler = (e: any) => {
        setChecked(!checked)
    }

    return (
        <>
            <div className="main">
                <div className="main-filters-block">
                    <div className="categories-list">
                        <label><input type="checkbox" checked={checked} onChange={(e) => checkboxHandler(e)} name="Men's clothing" />Men's clothing</label>
                        <label><input type="checkbox" checked={checked} onChange={(e) => checkboxHandler(e)} name="Women's clothing" />Women's clothing</label>
                        <label><input type="checkbox" checked={checked} onChange={(e) => checkboxHandler(e)} name="Jewelery" />Jewelery</label>
                        <label><input type="checkbox" checked={checked} onChange={(e) => checkboxHandler(e)} name="Electronics" />Electronics</label>
                    </div>
                </div>
                <div className="main-products-block">
                    <div className="filters">
                        <select onChange={(e) => selectSortHandler(e.target.value)}>
                            <option value="desc">Price (expensive to cheap)</option>
                            <option value="asc">Price (cheap to expensive)</option>
                            <option value="rate-up">Rating (high to low)</option>
                            <option value="rate-down">Rating (low to high)</option>
                        </select>
                    </div>
                    <div className='products'>
                        <ul className="list-items">
                            {isLoading
                                ? new Array(20).fill(0).map((_, id) => <ItemLoader key={id} />)
                                : [...data].sort((a, b) => sortHandler(a, b)).map(item => (
                                    <ProductItem item={item} key={item.id} />
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage