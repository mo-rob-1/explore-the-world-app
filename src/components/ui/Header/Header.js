import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link className="header__link" to="/"><h1 className="header__title">Explore the World</h1></Link>
        </header>
    )
}

export default Header;