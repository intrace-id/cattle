import { 
	REQUEST_TRAININGS,
	RECEIVE_TRAININGS,
	INVALIDATE_TRAININGS,
	REQUEST_ONE_TRAINING,
	RECEIVE_ONE_TRAINING,
	INVALIDATE_ONE_TRAINING
} from '../actions/types';

const initialState = {
	trainings: [],
	training: {},
	isFetching: false,
	didInvalidate: false,
	errorMessage: ''
};

export default function training(state = initialState, action){
	switch(action.type){
		case REQUEST_TRAININGS:
			return {
				...state,
				isFetching: true,
				didInvalidate: false,
				errorMessage: ''
			};
		case RECEIVE_TRAININGS:
			return {
				...state,
				trainings: action.trainings,
				isFetching: false,
				keyword: action.keyword
			};
		case INVALIDATE_TRAININGS:
			return {
				...state,
				isFetching: false,
				didInvalidate: true,
				errorMessage: action.message,
				trainings: []
			};
		case REQUEST_ONE_TRAINING:
			return {
				...state,
				isFetching: true,
				didInvalidate: false,
			};
		case RECEIVE_ONE_TRAINING:
			return {
				...state,
				training: action.training,
				isFetching: false,
			};
		case INVALIDATE_ONE_TRAINING:
			return {
				...state,
				isFetching: false,
				didInvalidate: true,
			};
		default:
			return state;
	}
}