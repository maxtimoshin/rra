import React from "react";
import './style.css'
import Cart from "../Cart";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="logo"></div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/benefits">Benefits</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
            <Cart/>
        </div>
    )
}

export default Header