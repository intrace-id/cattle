import { 
	REQUEST_TRAININGS,
	RECEIVE_TRAININGS,
	INVALIDATE_TRAININGS,
	REQUEST_ONE_TRAINING,
	RECEIVE_ONE_TRAINING,
	INVALIDATE_ONE_TRAINING
} from './types';

import serpentAPI from '../../utils/apis/serpent';

export const fetchTrainings = (page = 1) => {
	return dispatch => {
		dispatch(requestTrainings())
		serpentAPI.get('/trainings')
			.then(({ data }) => {
				dispatch(receiveTrainings(data))
			})
			.catch( err => {
				dispatch(invalidateTrainings(err))
			})
	}
};

export const requestTrainings = () => {
	return {
		type: REQUEST_TRAININGS,
	}
};

export const receiveTrainings = (data) => {
	return {
		type: RECEIVE_TRAININGS,
		trainings: data.results,
		pages: data.info.pages,
		keyword: data.keyword,
		onPage: data.onPage
	};
};

export const invalidateTrainings = (error) => {
	return {
		type: INVALIDATE_TRAININGS,
		message: error.message,
		keyword: error.keyword,
	}
}

export const fetchOneTraining = (id) => {
	return (state, dispatch) => {
		dispatch(requestOneTraining())

		dispatch(receiveOneTraining('data'))

		// serpentAPI.get('/trainings/' + id)
		// 	.then(({ data }) => {
		// 		dispatch(receiveOneTraining(data))
		// 	})
		// 	.catch( err => {
		// 		dispatch(invalidateOneTraining(err))
		// 	})
	}
}

export const requestOneTraining = () => {
	return {
		type: REQUEST_ONE_TRAINING,
	}
}

export const receiveOneTraining = (data) => {
	return {
		type: RECEIVE_ONE_TRAINING,
		Training: data
	}
}

export const invalidateOneTraining = (error) => {
	return {
		type: INVALIDATE_ONE_TRAINING,
		error
	}
}