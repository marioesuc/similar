// All reducers associated to the register

import { 
	REGISTER_EMAIL_CHANGED,
	REGISTER_PASSWORD_CHANGED,
	REGISTER_CONFIRM_PASSWORD_CHANGED,
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	confirmPassword: '',
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	// Every single action is going to pass over this point, so a console.log
	// here is going to help to debug any problem related to the actions

	// Depending on the action's type, we are going to update the state in a different manner
	switch (action.type) {

	// Here in the case's clauses is where we are going to reference the variables in Types.js,
	// that way, if we type any of them with some typo, the syntax analizer is going to tell us
		case REGISTER_EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case REGISTER_PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case REGISTER_CONFIRM_PASSWORD_CHANGED:
			return { ...state, confirmPassword: action.payload };
		case REGISTER_USER:
			return { ...state, loading: true, error: '' };
		case REGISTER_USER_SUCCESS:
			return INITIAL_STATE;
		case REGISTER_USER_FAIL:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};
