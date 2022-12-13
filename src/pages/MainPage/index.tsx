import React, { useState, useEffect } from 'react'
import { useGetProductsQuery } from '../../redux/API/query';
import ItemLoader from '../../components/ItemLoader';
import './style.css'
import ProductItem from '../../components/ProductItem';
import { IFilters, ICheckboxInputs } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { setInputStatus } from '../../redux/Slices/inputsSlice';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
}

const MainPage = () => {

    const [value, setValue] = React.useState<number[]>([0, 1000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    const dispatch = useDispatch()
    const inputs = useSelector((state: any) => state.inputs)
    const [sortType, setSortType] = useState('desc')

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

    const checkboxInputHandler = (e: ICheckboxInputs) => {
        dispatch(setInputStatus(e))
    }

    return (
        <>
            <div className="main">
                <div className="main-filters-block">
                    <div className="categories-list">
                        {inputs.map((el: ICheckboxInputs) => <label key={el.id}><input onClick={() => checkboxInputHandler(el)} defaultChecked={el.isChecked} type="checkbox" name={el.title} />{el.title}</label>)}
                        <Box sx={{ width: 150 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                min={0}
                                max={1000}
                            />
                        </Box>
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
                        <div className="filter-tags">
                            <div className="price-tag">{value[0]}$ - {value[1]}$</div>
                            {inputs.filter((e: { isChecked: any; }) => e.isChecked).map((el: { title: string, id: number }) => <div className="category-tag" key={el.id}>{el.title}</div>)}
                        </div>
                    </div>
                    <div className='products'>
                        <ul className="list-items">
                            {isLoading
                                ? new Array(20).fill(0).map((_, id) => <ItemLoader key={id} />)
                                : [...data].filter(el => inputs.filter((e: { isChecked: any; }) => e.isChecked).map((e: { title: any; }) => e.title.toLowerCase()).includes(el.category) && el.price >= value[0] && el.price <= value[1]).sort((a, b) => sortHandler(a, b)).map(item => (
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