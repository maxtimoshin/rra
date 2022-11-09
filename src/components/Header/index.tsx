import React from "react";
import './style.css'
import Cart from "../Cart";
import { Link } from "react-router-dom";
import AuthBar from "../AuthBar";
import { useAuth0 } from "@auth0/auth0-react";

const Header: React.FC = () => {

    const { loginWithRedirect } = useAuth0()
    return (
        <div className="header">
            <Link to="/" className="logo"></Link>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/benefits">Benefits</Link></li>
                    <li><Link to="/benefits">Contacts</Link></li>
                </ul>
            </nav>
            <AuthBar />
            <Cart />
        </div>
    )
}

export default Header