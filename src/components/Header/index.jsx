import React from "react";
import './style.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo"></div>
            <nav className="nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
            </nav>
            <div className="cart"></div>
        </div>
    )
}

export default Header