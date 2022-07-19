import React, { useState } from 'react'
import './App.css';
import FiltersList from './components/FiltersList';
import InputsList from './components/InputsList'
import { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } from './redux/API/query';

const App = () => {
  const [count, setCount] = useState('')
  const [newProduct, setNewProduct] = useState('')

  const { data, isLoading } = useGetProductsQuery(count)

  const [addProduct, { }] = useAddProductMutation()
  const [deleteProduct, { }] = useDeleteProductMutation()

  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({
        "name": newProduct
      }).unwrap()
    }
  }

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id)
  }


  return (
    <div>
      <input type="text" value={newProduct} onChange={e => setNewProduct(e.target.value)} />
      <button onClick={handleAddProduct}>Add New Product</button>
      <select value={count} onChange={e => setCount(e.target.value)}>
        <option value="">All</option>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <ul>
        {isLoading ? 'loading...' : data.map(item => (
          <li key={item.id} onClick={()=> handleDeleteProduct(item.id)}>{item.name}</li>
        ))}
      </ul>
      {/* <InputsList />
      <FiltersList /> */}
    </div>
  );
}

export default App;
