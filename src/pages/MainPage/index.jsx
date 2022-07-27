import React, { useState } from 'react'
import FiltersList from '../../components/FiltersList';
import InputsList from '../../components/InputsList'
import { addToCart } from '../../redux/Slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } from '../../redux/API/query';
import Cart from '../../components/Cart';
import Header from '../../components/Header';


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


    return (
        <>
            <Header/>
            <div className="main">
                <ul className=''>
                    {isLoading ? 'loading...' : data.map(item => (
                        <li key={item.id} >{item.title}<button onClick={() => cartHandler(item.id, item.title, item.price)}>Add to Cart</button></li>
                    ))}
                </ul>
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