import React from 'react';
import { useParams } from 'react-router-dom';

import Slider from './components/Slider';
import Content from './components/Content';

const TrainingPage = () => {
    let { trainingId } = useParams()

    return (
        <>
            <Slider key={'slider-' + trainingId}/>
            <Content key={'content-' + trainingId}/>
        </>
    )
};

export default TrainingPage;