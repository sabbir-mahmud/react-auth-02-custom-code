import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='container mx-auto nav-bar'>
            <div className="banner">
                <h3><Link to="/" className='text-white text-xl'>Super Market</Link > </h3>
            </div>
            <ul className='nav-links '>
                <li><CustomLink to='/'>Home</CustomLink></li>
                <li><CustomLink to='/shop'>Shop</CustomLink></li>
                <li><CustomLink to='/order'>Order</CustomLink></li>
                <li><CustomLink to='/account'>Account</CustomLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;