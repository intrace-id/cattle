import { combineReducers } from 'redux';
import trainings from './training-reducers';

const reducers = combineReducers({
    trainings
});

export default reducers;