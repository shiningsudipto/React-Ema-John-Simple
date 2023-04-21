import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOu = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="menu-links">
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span className='user-info'>Welcome {user.email}<button onClick={handleSignOu}>Sign out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;