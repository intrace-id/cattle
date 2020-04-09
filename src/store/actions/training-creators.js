import { 
	REQUEST_TRAINING,
	RECEIVE_TRAINING,
	INVALIDATE_TRAINING,
	REQUEST_ONE_TRAINING,
	RECEIVE_ONE_TRAINING,
	INVALIDATE_ONE_TRAINING
} from './types';

import serpentAPI from '../../utils/apis/serpent';

export const fetchtrainings = (page = 1) => {
	return dispatch => {
		dispatch(requesttrainings())
		serpentAPI.get('/trainings')
			.then(({ data }) => {
				dispatch(receiveTrainings(data))
			})
			.catch( err => {
				dispatch(invalidateTrainings(err))
			})
	}
};

export const requesttrainings = () => {
	return {
		type: REQUEST_TRAINING,
	}
};

export const receivetrainings = (data) => {
	return {
		type: RECEIVE_TRAINING,
		trainings: data.results,
		pages: data.info.pages,
		keyword: data.keyword,
		onPage: data.onPage
	};
};

export const invalidatetrainings = (error) => {
	return {
		type: INVALIDATE_TRAINING,
		message: error.message,
		keyword: error.keyword,
	}
}

export const fetchOneTraining = (id) => {
	return dispatch => {
		dispatch(requestOneTraining())
		serpentAPI.get('/trainings/' + id)
			.then(({ data }) => {
				dispatch(receiveOneTraining(data))
			})
			.catch( err => {
				dispatch(invalidateOneTraining(err))
			})
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