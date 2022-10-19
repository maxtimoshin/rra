import React from 'react'
import './App.css';
import MainPage from './pages/MainPage/index';
import Header from './components/Header';

const App = () => {
    return (
        <div className='App'>
            <Header />
            <MainPage />
        </div>
    )
}

export default App;
