import React from 'react';

const Slider = () => {

    return (
        <div className='slider'
            style={{
                backgroundImage: `url('/img/slider/homepage.png')`
            }}
        >
            <div className='col-sm-10'>
                <div className="d-flex flex-column col-md-4 col-sm-10">
                    <h1>Find Your Course</h1>
                    <h2 className='mt-2'>Brings You to The Next Level <br/>Through Certification Training</h2>
                    <button className='btn btn-lg mt-4'>
                        Trending Certification
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Slider;