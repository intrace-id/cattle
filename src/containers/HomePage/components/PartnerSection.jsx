import React from 'react';

const PartnerSection = () => {
    const listPartners = ['iso', 'irata', 'drops',  'p2m', 'iraa']
    const partners = listPartners.map( (partner) => 
        <img 
            key={partner}
            className='m-2'
            src={process.env.PUBLIC_URL + `/img/logo/logo-${partner}.png`}
            alt={partner}
            height='80px'
        />
    );

    return (
        <div className="d-flex flex align-items-center py-4 row">
            <span className="mb-3 col-sm-12 text-align-center">Our Collaboration, Certification, and Accreditation</span>
            <div className="d-flex row col-sm-12 justify-content-center mx-0">
                {partners}
            </div>
        </div>
    )
};

export default PartnerSection;