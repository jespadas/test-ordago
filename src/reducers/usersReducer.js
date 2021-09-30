import { types } from '../types/types';

const initialState = {
	users: [],
	active: {},
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.userLoad:
			return {
				...state,
				users: [...action.payload],
			};
		case types.userActive:
			return {
				...state,
				active: {...action.payload},
			};
			case types.userRemoveActive:
				return {
					...state,
					active: {},
				};
		default:
			return state;
	}
};
