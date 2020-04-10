import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ArticleSection = () => {

    return (
        <div className='article-section d-flex col-md-10 col-sm-12'>
            <div className='col-sm-7 d-flex flex-column justify-content-between'>
                <h2>Our Programs</h2>
                <CarouselProvider
                    naturalSlideWidth={3}
                    naturalSlideHeight={2}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}><Image src={process.env.PUBLIC_URL + `/img/slider/iso-9001.png`}/></Slide>
                    </Slider>
                </CarouselProvider>
            </div>
            <div className='col-sm-5'>
                <h2>Our Articles</h2>
                {
                    [1,2,3,4,5].map( (obj) => 
                        <div className='card-article'>
                            <img src={process.env.PUBLIC_URL + `/img/logo/logo-iso.png`} alt="logo-iso"/>
                            <div className='mx-4 d-flex flex-column'>
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