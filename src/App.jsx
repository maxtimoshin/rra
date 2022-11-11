import React from 'react'
import './App.css';
import MainPage from './pages/MainPage/index';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='App'>
            <Header />
            
            <MainPage />
            <Footer />
        </div>
    )
}

export default App;
