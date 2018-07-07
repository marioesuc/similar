// All reducers associated to Authentication

import { 
	LOAD_SPEECH_SUCCESS,
	UPDATE_LEARNED_SPEECH_WORDS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { 
	progress: 0,
	wordsList: [],
	currentCard: {}
};

export default (state = INITIAL_STATE, action) => {
	// Every single action is going to pass over this point, so a console.log
	// here is going to help to debug any problem related to the actions

	// Depending on the action's type, we are going to update the state in a different manner
	switch (action.type) {


	// Here in the case's clauses is where we are going to reference the variables in Types.js,
	// that way, if we type any of them with some typo, the syntax analizer is going to tell us
		case LOAD_SPEECH_SUCCESS:
			return {
				progress: action.payload.progress,
				wordsList: action.payload.wordsList,
				currentCard: action.payload.currentCard
			};
		case UPDATE_LEARNED_SPEECH_WORDS_SUCCESS:
			return { ...state };

		default:
			return state;
	}
};
