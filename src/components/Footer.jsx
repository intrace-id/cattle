import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (
        <div className="footer mt-4 d-flex flex-column align-items-center">
            <div className="footer-navigation row col-10 my-4">
                <div className="col-md-4 col-sm-12 col-md-3 mt-4 px-4">
                    <h4>Our Certificate</h4>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/indonesia-training-center_iso-90012015-certificate-for-intraceid-activity-6657650926460989440-SOlo">ISO 9001:2015 certified</a></li>
                        {/* <li><a href="#">ISO 14001:2015 certified</a></li> */}
                        {/* <li><a href="#">ISO 45001:2018 certified</a></li> */}
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 col-md-3 mt-4 px-4">
                    <h4>Contact Us</h4>
                    <ul>
                        <li className="mb-4">
                            <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" className="mr-2"/>
                            <span>faizalzul@intrace.id</span>    
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} color="#FFFFFF" className="mr-2"/>
                            <span>(+62) 821 8911 8241</span>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 col-md-3 mt-4 px-4">
                    <h4>Office Address</h4>
                    <ul>
                        <li><span>Plaza Mutiara, 8th Floor</span></li>
                        <li><span>Jl. Dr. Ide Anak Agung Gde Agung</span></li>
                        <li><span>Jakarta Selatan, 12950</span></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright d-flex flex-row justify-content-between align-items-center col-sm-12 row">
                <div className='col-md-5 col-sm-7 p-2'>
                    <span>© 2020 PT. Kompetensi Anak Bangsa. All Rights Reserved</span>
                </div>
                <div className="footer-copyright-logo col-md-5 col-sm-5">
                    {/* <a href="">
                        <img src={process.env.PUBLIC_URL + '/img/logo/facebook-circle-48px.png'} alt="facebook-icon"/>
                    </a> */}
                    <a href="https://www.instagram.com/intrace.id/" target="_blank" rel="noopener noreferrer">
                        <img src={process.env.PUBLIC_URL + '/img/logo/instagram-circle-48px.png'} alt="instagram-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/company/indonesia-training-center/" target="_blank" rel="noopener noreferrer">
                        <img src={process.env.PUBLIC_URL + '/img/logo/linkedin-circle-48px.png'} alt="linkedin-icon"/>
                    </a>
                    {/* <a href="">
                        <img src={process.env.PUBLIC_URL + '/img/logo/twitter-circle-48px.png'} alt="twitter-icon"/>
                    </a> */}
                </div>
            </div>
        </div>
    )
};

export default Footer;