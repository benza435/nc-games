import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="app-header">
            <Link to="/">BIG OL' HEADER</Link>
        </div>
    );
};

export default Header;