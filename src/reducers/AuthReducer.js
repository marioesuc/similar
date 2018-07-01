// All reducers associated to Authentication

import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGOUT_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	// Every single action is going to pass over this point, so a console.log
	// here is going to help to debug any problem related to the actions
	console.log(action);

	// Depneding on the action's type, we are going to update the state in a different manner
	switch (action.type) {

	// Here in the case's clauses is where we are going to reference the variables in Types.js,
	// that way, if we type any of them with some typo, the syntax analizer is going to tell us
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state,
				user: action.payload,
				error: '',
				loading: false,
				email: '',
				password: ''
			};
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Fallo de autenticación', loading: false };
		case LOGOUT_USER_SUCCESS:
			return INITIAL_STATE;

		default:
			return state;
	}
};
