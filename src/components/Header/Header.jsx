import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="menu-links">
                <a href="/order">Order</a><a href="/order Review">Order Review</a><a href="/manage Inventory">Manage Inventory</a><a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;