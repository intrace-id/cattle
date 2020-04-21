import React, { ReactDOM } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navigation d-flex justify-content-center">
            <div className="d-flex row col-md-10 col-sm-12 justify-content-center">
                <Link to="/about-us">About Us</Link>
                <a href="/#training">Our Training</a>
                <a href="/#article">Article</a>
            </div>
        </div>
    )
};

export default Navbar;