import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-navigation">
                <div className="col-sm-4 col-md-3 mt-4">
                    <h4>Our Certificate</h4>
                    <ul>
                        <li><a href="#">ISO 9001:2015 certified</a></li>
                        <li><a href="#">ISO 14001:2015 certified</a></li>
                        <li><a href="#">ISO 45001:2018 certified</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 mt-4">
                    <h4>Contact Us</h4>
                    <ul>
                        <li className="mb-4">
                            <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" className="mr-2"/>
                            <span>faizal@intrace.id</span>    
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} color="#FFFFFF" className="mr-2"/>
                            <span>(+62) 821 8911 8241</span>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 mt-4">
                    <h4>Office Address</h4>
                    <ul>
                        <li><span>Plaza Mutiara, 8th Floor</span></li>
                        <li><span>Jl. Dr. Ide Anak Agung Gde Agung</span></li>
                        <li><span>Jakarta Selatan, 12950</span></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <span className="col-md-5 col-xs-6">© 2020 PT. Kompetensi Anak Bangsa. All Rights Reserved</span>
                <div className="footer-copyright-logo col-md-5 col-sm-6">
                    <img src={process.env.PUBLIC_URL + '/img/logo/facebook-circle-48px.png'} alt="facebook-icon"/>
                    <img src={process.env.PUBLIC_URL + '/img/logo/instagram-circle-48px.png'} alt="instagram-icon"/>
                    <img src={process.env.PUBLIC_URL + '/img/logo/linkedin-circle-48px.png'} alt="linkedin-icon"/>
                    <img src={process.env.PUBLIC_URL + '/img/logo/twitter-circle-48px.png'} alt="twitter-icon"/>
                </div>
            </div>
        </div>
    )
};

export default Footer;