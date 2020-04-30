import React from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ArticleSection = () => {

    return (
        <div id="article" className='article-section d-flex justify-content-between col-md-10 col-sm-12 row'>
            <div className='col-sm-12 col-md-6 d-flex flex-column mt-2'>
                <h2 className='mt-3'>Our Programs</h2>
                <CarouselProvider
                    className='mt-2'
                    naturalSlideWidth={3}
                    naturalSlideHeight={2}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}><Image src={process.env.PUBLIC_URL + `/img/slider/iso-9001.png`}/></Slide>
                    </Slider>
                </CarouselProvider>
                <h3 className="mt-2">ISO Series Training</h3>
                <p className="text-justify indent">Improve your personal branding and management skills by learning how international standard workds. 
                    We do training for ISO 9001, 14001, 45001 and 37001 (Anti Bribery Management System)</p>
                <h3 className="mt-2">Technical Training Series</h3>
                <p className="text-justify indent">Want to be an inspector? We provide everything. From introductory course on how to be an Inspector (in any industry),
                    to various of inspection certification (DROPS, NDT, etc). We also provide training services for HSE, Working at Height, etc.</p>
                <h3 className="mt-2">Leadership & Management Training</h3>
                <p className="text-justify indent">Learn leadership from proven expert using industry-approved leadership certification program? Why not!</p>
            </div>
            <div className='col-sm-12 col-md-5 mt-2'>
                <h2 className='mt-3'>Our Articles</h2>
                {
                    [1].map( (obj) => 
                        <div key={obj} className='card-article d-flex row'>
                            <div style={{maxWidth: '100px'}} className='d-flex justify-content-center align-items-center'>
                                <img src={process.env.PUBLIC_URL + `/img/logo/logo-iso.png`} alt="logo-iso"/>
                            </div>
                            <div className='col d-flex flex-column'>
                                <h4>What is ISO?</h4>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default ArticleSection;