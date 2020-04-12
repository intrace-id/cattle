import React from 'react';

const Content = () => {

    return (
        <div className='article-content d-flex justify-content-center my-4 py-4'>
            <div className='col-sm-8 col-md-6'>
                <h1>Top 10 Most Popular ISO Standards</h1>
                <div className='d-flex mt-4 justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <img src={process.env.PUBLIC_URL + '/img/profpic.png'} alt="profile-picture" width='48px' height='48px'/>
                        <div className='ml-2'>
                            <h4>Haitsam Shiddiq Siregar</h4>
                            <span>President Director of Intrace.id</span>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={process.env.PUBLIC_URL + '/img/logo/facebook-black.png'} alt="facebook"/>
                        <img src={process.env.PUBLIC_URL + '/img/logo/twitter-black.png'} alt="twitter"/>
                        <img src={process.env.PUBLIC_URL + '/img/logo/linkedin-black.png'} alt="linkedin"/>
                    </div>
                </div>
                <div className='mt-4'>
                    <img src={process.env.PUBLIC_URL + '/img/slider/iso-9001.png'} alt="article-picture" width='100%' height='100%'/>
                </div>
                <div className="mt-4 article-content">
                    <p className='article-paragraph'>    There are many different ISO Standards out there, sometimes it can be hard to understand which ones are the most suitable for your business. While some are industry-specific, many of the most popular standards are generic and can be implemented into an organization no matter what sector it is in. If you are not certified to any ISO standards and are interested in a certification, or want to add more, we have outlined the ten most popular standards below. Read on to learn about their history, what they entail, and their impact on the businesses that employ them.</p>
<br></br>
<b>ISO 9001</b>
<br></br>
    <p className='article-paragraph'>
        By far the most popular family is that of ISO 9000. A family of quality management standards, there are fourteen in total. Of these, ISO 9001:2015 is the only one that can be certified to. It was first published in 1987, and has since been updated about every 7 years. The standard details how to put a Quality Management System (QMS) in place to better prepare your organization to produce quality products and services. It is customer focused, and places an emphasis on continuous improvement and top management processes that extended throughout the organization.
    The standard was updated in 2015, and now places a greater emphasis on risk management. The standard is generic, and can be used in any organization in any sector. Over 1,000,000 ISO certifications have been given out in over 170 countries according to the ISO Survey of Management System Standard Certifications.
    </p>
<br></br>
<b>ISO 14001</b>
<br></br>
    <p className='article-paragraph'>
    ISO 14000 is a family of standards relating to the environment. It includes multiple standards, similar to ISO 9000. ISO 14001:2015 is the most popular in the family, and is the only one in which an organization can be certified.
    It establishes requirements for an Environmental Management System (EMS) and is based on the continuous improvement model PDCA (Plan-Do-Check-Act). It is a voluntary standard, put in place by companies who want to improve their processes, and is very popular, with over 300,000 certifications in 171 countries worldwide.
    </p>
<br></br>
<b>ISO 27000</b>
<br></br>
    <p className='article-paragraph'>
    This family of standards concerns information technology, with the goal of improving security and protecting company assets. Started in 2005, the two most popular standards are ISO 27001:2013 and 27002:2013. 27001 is management-based system, whereas 27002 is a technical document, focused on the individual and putting a code of conduct in place.
    Organizations can choose either standard; ISO 27001 has over 22,000 certifications worldwide. It is a broad standard, and for this reason the certification can be customized to fit the needs of the organization, and is not mandatory.

...</p>
                </div>
            </div>
        </div>
    )
};

export default Content;