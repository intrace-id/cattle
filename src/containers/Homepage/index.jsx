import React from 'react';

import Slider from './components/Slider';
import PartnerSection from './components/PartnerSection';
import TrainingSection from './components/TrainingSection';
import ArticleSection from './components/ArticleSection';

const Homepage = () => {

    return (
        <div className='d-flex flex-column align-items-center'>
            <Slider/>
            <PartnerSection/>
            <TrainingSection/>
            <ArticleSection/>
        </div>
    )
};

export default Homepage;