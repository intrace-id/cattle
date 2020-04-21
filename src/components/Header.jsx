import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="navbar justify-content-center">
            <div className="d-flex row col-md-10 col-sm-12 justify-content-between">
                <a href={process.env.PUBLIC_URL}>
                    <img className="navbar-logo" src={process.env.PUBLIC_URL + '/navbar-logo.png'} alt="intrace.id"/>
                </a>
                {/* <div className="d-flex col-sm-5 justify-content-center hidden-sm">
                    <input className="navbar-search-bar px-3" type="text" />
                    <button className="navbar-search-icon">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className="btn btn-primary">Register</button>
                    <button className="btn ml-2">Login</button>
                </div> */}
            </div>
        </div>
    )
};

export default Header;

