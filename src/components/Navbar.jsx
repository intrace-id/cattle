import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar justify-content-center">
            <div className="d-flex col-md-10 col-sm-12 justify-content-between">
                <img className="navbar-logo" src={process.env.PUBLIC_URL + '/navbar-logo.png'} alt="intrace.id"/>
                <div className="d-flex col-sm-5 justify-content-center">
                    <input className="navbar-search-bar px-3" type="text" />
                    <button className="navbar-search-icon">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
                <div>
                    <button className="btn btn-primary">Register</button>
                    <button className="btn ml-2">Login</button>
                </div>
            </div>
        </div>
    )
};

export default Navbar;

