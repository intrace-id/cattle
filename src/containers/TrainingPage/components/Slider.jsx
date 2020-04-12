import React from 'react';

let breadcrumbsData = [
    { text: 'Home', value: 'https://intrace.id' },
    { text: 'Trainings', value: 'https://intrace.id/trainings}' },
    { text: 'DROPS', value: 'https://intrace.id/trainings/292929'}
]

const Slider = () => {

    return (
        <div className='training-slider'>
            <div className='training-slider-content col-sm-6 d-flex justify-content-end'>
                <div className='col-sm-10'>
                    <div className='breadcrumbs'>
                        {
                            breadcrumbsData.map( (nav, index) => {
                                if (index === breadcrumbsData.length -1 ) {
                                    return <a className='active' href="#">{ nav.text }</a>
                                } else {
                                    return (
                                        <>
                                            <a href="#">{ nav.text }</a><span>/</span>
                                        </>

                                    )
                                }
                            })
                        }
                    </div>

                    <div className='mt-4 pt-4'>
                        <div className='d-flex align-items-center my-3'>
                            <img src={process.env.PUBLIC_URL + '/img/logo/logo-drops.png'} alt="logo-drops" height='56px'/>     
                            <span className='ml-2'>Dropped Object Prevention Scheme</span>
                        </div>
                        <h1>Dropped Object Prevention Scheme (DROPS) Awareness Training</h1>
                    </div>
                </div>
            </div>
            <div
                className='training-slider-image col-sm-6'
                style={{ background: `url("/img/thumbnail/thumbnail-drops.png")`}}
            >
                <div className="training-slider-triangle">

                </div>
            </div>
        </div>
    )
};

export default Slider;