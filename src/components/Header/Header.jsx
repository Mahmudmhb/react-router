import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Active from '../Active/Active';

const Header = () => {
    return (
        <nav className='nav'>
            <Active to="/friends"> Friends</Active>
            <Active to="/posts"> Posts</Active>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;