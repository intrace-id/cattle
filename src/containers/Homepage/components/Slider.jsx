import React from 'react';

const Slider = () => {

    return (
        <div className='slider'
            style={{
                backgroundImage: `url('/img/slider/homepage.png')`
            }}
        >
            <div className='col-sm-10'>
                <div className="d-flex flex-column">
                    <h1>Find Your Course</h1>
                    <h2>Brings You to The Next Level <br/>Through Certification Training</h2>
                    <button className='btn btn-lg col-sm-2'>
                        Let's Join
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Slider;