import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/banner.png'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="harold's games" width="70%"/>
            </Link>
        </div>
    );
};

export default Header;