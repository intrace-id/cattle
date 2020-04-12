import React from 'react';

import PartnerSection from '../HomePage/components/PartnerSection';

const AboutUs = () => {

    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='about-us-header d-flex flex-column align-items-center py-4'>
                <h1>Brings You to Next  Through <br/> Certification Training</h1>
                <div className='col-sm-10 col-md-8'>
                    <p>Industry 4.0 brings opportunities and . New technologies (AR/VR, Data , Automation) emerges everyday.  that issue, Professionals who’s  on several industries (Oil & gas,
Construction, Manufacturing, etc.) need to  their skills to stay competitive.</p>
                </div>
            </div>
            <div className='col-sm-12 col-md-10'>
                <div className='d-flex flex-column align-items-center py-4 mb-4'>
                    <img className='my-4' src={process.env.PUBLIC_URL + '/logo-intrace.png'} alt="intrace-id" height='64px'/>
                    <p className='col-sm-9'>We provide you with the curated (up-to-date) industry certification training program. We partnered with dozens of certification provider/institution/industry experts from overseas, and bring them closer to you. For companies, we provide in-house certification program for your employees to increase the engagement rate and your companies brand values.</p>
                    <button className='btn btn-primary download mt-3'>
                        <h2>Download</h2>
                        <span>Our Company Profile</span>
                    </button>
                </div>
                <div className='about-us-value d-flex flex-column align-items-center p-4'>
                    <div className='my-4'>
                        <h1 className='text-primary'>Our Value</h1>
                    </div>
                    <div className='d-flex mt-4'>
                        <div className="col-4 d-flex flex-column align-items-center border-right">
                            <img src={process.env.PUBLIC_URL + '/deal.png'} alt="strategic-partnership"/>
                            <h2 className='my-2'>Strategic Partnership</h2>
                            <div className='col-8'>
                                <p> Our network of experts, certification provider, and industry associations ensure our quality to Our value proposition  the training.</p>
                            </div>
                        </div>
                        <div className="col-4 d-flex flex-column align-items-center border-right">
                            <img src={process.env.PUBLIC_URL + '/profile.png'} alt="great-user-experience"/>
                            <h2 className='my-2'>Great User Experience</h2>
                            <div className="col-8">
                                <p>From getting the information to booking the training schedule, you could do it by accessing our website, easily.</p>
                            </div>
                        </div>
                        <div className="col-4 d-flex flex-column align-items-center">
                            <img src={process.env.PUBLIC_URL + '/patent.png'} alt="strategic-partnership"/>
                            <h2 className='my-2'>Curated Certification</h2>
                            <div className="col-8">
                                <p> Our experts chose the suitable and up-to-date certification program for your specific needs in your industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-us-team d-flex flex-column align-items-center p-4'>
                    <h1 className='text-primary'>Our Team</h1>
                    <div className="d-flex justify-content-center row mt-4">
                        <div className="d-flex flex-column align-items-center card-team p-4 mx-4">
                            <img className='mb-2' src={process.env.PUBLIC_URL + '/img/profpic.png'} alt="profile-picture" width='64px' height='64px'/>
                            <h4>Haitsam Shiddiq Siregar</h4>
                            <p>President Director of Intrace.id</p>
                        </div>
                        <div className="d-flex flex-column align-items-center card-team p-4 mx-4">
                            <img className='mb-2' src={process.env.PUBLIC_URL + '/img/profpic.png'} alt="profile-picture" width='64px' height='64px'/>
                            <h4>Haitsam Shiddiq Siregar</h4>
                            <p>President Director of Intrace.id</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center row mt-4">
                        <div className="d-flex flex-column align-items-center card-team p-4 mx-4">
                            <img className='mb-2' src={process.env.PUBLIC_URL + '/img/profpic.png'} alt="profile-picture" width='64px' height='64px'/>
                            <h4>Haitsam Shiddiq Siregar</h4>
                            <p>President Director of Intrace.id</p>
                        </div>
                        <div className="d-flex flex-column align-items-center card-team p-4 mx-4">
                            <img className='mb-2' src={process.env.PUBLIC_URL + '/img/profpic.png'} alt="profile-picture" width='64px' height='64px'/>
                            <h4>Haitsam Shiddiq Siregar</h4>
                            <p>President Director of Intrace.id</p>
                        </div>
                        <div className="d-flex flex-column align-items-center card-team p-4 mx-4">
                            <img className='mb-2' src={process.env.PUBLIC_URL + '/img/profpic.png'} alt="profile-picture" width='64px' height='64px'/>
                            <h4>Haitsam Shiddiq Siregar</h4>
                            <p>President Director of Intrace.id</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2>Our Advisor</h2>
                    </div>
                    <div className="d-flex justify-content-center row mt-3" style={{ width: '100%' }}>
                        <div className="col-md-4">
                            <h4>Dr. Eng. Radon Dhelika</h4>
                            <p>Jabatan Yang Ditunjukan</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Ardiansyah, S.T., M.Eng. Ph.D</h4>
                            <p>Jabatan Yang Ditunjukan</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Dr. Ario Sunar Baskoro, M.Eng.,</h4>
                            <p>Jabatan Yang Ditunjukan</p>
                        </div>
                    </div>
                </div>
                <PartnerSection className='my-4 py-4'/>
            </div>
        </div>
    )
};

export default AboutUs;