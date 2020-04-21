import React from 'react';

const TrainingSection = () => {
    return (
        <div id='training' className='training'>
            <div className='d-flex col-sm-12 col-md-10 justify-content-between align-items-center row'>
                <div className='training-about col-sm-12 col-md-3 my-2'>
                    <p>
                        Intrace memiliki keunggulan dalam mengkurasi sertifikasi yang memiliki prospek jangka panjang untuk anda.
                        <br/><br/>
                        Untuk itu, kami telah bekerjasama dengan beberapa expert, trainer, perusahaan lain dan pemerintah.
                    </p>
                </div>
                {
                    [1,2,3,4].map( (obj) => 
                        <div key={obj} className='training-detail d-flex flex-column col-sm-2 px-0'>
                            <div>
                                <img className='training-detail-image' src={process.env.PUBLIC_URL + `/img/thumbnail/thumbnail-iso-9001.png`} alt="ISO 9001:2015"/>
                            </div>
                            <div className='pt-2 pb-3 px-2 d-flex flex-column'>
                                <span className='card-title m-2'>ISO 9001:2015 Awareness Training</span>
                                <span className='card-subtitle ml-2'>M. Rosidi Tarigan S.Si.</span>
                                <div className='d-flex row justify-content-between align-items-center mx-2 mt-2'>
                                    <span className='actual-price'>Rp2.000.000</span>
                                    <span className='price'>Rp180.000</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default TrainingSection