import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import AboutUs from './pages/AboutUs';
import Benefits from './pages/Benefits';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SingleProduct from './pages/SingleProduct';
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-clc83eij.us.auth0.com"
    clientId="czycCO6CmYB5YN0piDp9N2T6uY9xbkK7"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="*" element={
            <>
              <Header />
              <main>
                <p>404 | Page not found</p>
              </main>
            </>
          } />
        </Routes>
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
);

