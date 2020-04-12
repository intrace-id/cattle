import React from 'react';

const TrainingSection = () => {

    return (
        <div className='training'>
            <div className='d-flex col-sm-12 col-md-10 justify-content-between align-items-center'>
                <div className='training-about col-sm-4'>
                    <h2>Curated trainings for your needs</h2>
                    <p>
                        Industry 4.0 brings opportunities and challenges. New technologies (AR/VR, Data Analytics, Automation) emerges everyday.
                        <br/><br/>
                        Facing that issue, Professionals who’s working on several industries (Oil & gas, Construction, Manufacturing, etc.) need to upgrade their skills to stay competitive.
                    </p>
                </div>
                {
                    [1,2,3,4].map( (obj) => 
                        <div className='training-detail d-flex flex-column'>
                            <div>
                                <img className='training-detail-image' src={process.env.PUBLIC_URL + `/img/thumbnail/thumbnail-iso-9001.png`} alt="ISO 9001:2015"/>
                            </div>
                            <span className='card-title m-2'>ISO 9001:2015 Awareness Training</span>
                            <span className='card-subtitle ml-2'>M. Rosidi Tarigan S.Si.</span>
                            <div className='d-flex flex-row-reverse justify-content-between align-items-center mx-2 mt-2'>
                                <span className='price'>Rp180.000</span>
                                <span className='actual-price'>Rp2.000.000</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default TrainingSection