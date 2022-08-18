import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Benefits from './pages/Benefits';
import Contacts from './pages/Contacts';
import SingleProduct from './pages/SingleProduct';
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/benefits" element={<Benefits/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/products/:productId" element={<SingleProduct/>}/>
        <Route path="*" element={
          <>
          <Header/>
          <main>
            <p>404 | Page not found</p>
          </main>
          </>
        }/>
      </Routes>
    </Provider>
  </BrowserRouter>
);

