import React from 'react';

const PartnerSection = () => {
    const listPartners = ['iso', 'irata', 'drops',  'p2m', 'asnt']
    const partners = listPartners.map( (partner) => 
        <img 
            className='mx-2'
            src={process.env.PUBLIC_URL + `/img/logo/logo-${partner}.png`}
            alt={partner}
            height='80px'
            width='100%'
        />
    );

    return (
        <div className="d-flex flex-column align-items-center py-4">
            <span className="mb-3">We collaborate with many companies and organizations</span>
            <div className="d-flex">
                {partners}
            </div>
        </div>
    )
};

export default PartnerSection;