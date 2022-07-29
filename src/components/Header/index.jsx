import React from "react";
import './style.css'
import Cart from "../Cart";

const Header = () => {
    return (
        <div className="header">
            <div className="logo"></div>
            <nav className="nav">
                <ul>
                    <li><a href="*">Home</a></li>
                    <li><a href="*">About us</a></li>
                    <li><a href="*">Benefits</a></li>
                    <li><a href="*">Contacts</a></li>
                </ul>
            </nav>
            <Cart/>
        </div>
    )
}

export default Header