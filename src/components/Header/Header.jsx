import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="menu-links">
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;