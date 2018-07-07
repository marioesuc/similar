// These are the action creators associated to the authentication

import { 
	LOAD_SPEECH,
	UPDATE_LEARNED_SPEECH_WORDS,
	DELETE_LEARNED_SPEECH_WORDS
} from './types';

export const loadSpeechData = () => {
	return {
		type: LOAD_SPEECH
	};
};

export const updateLearnedSpeechWords = ({ eng, success }) => {
	return {
		type: UPDATE_LEARNED_SPEECH_WORDS,
		payload: { eng, success }
	};
};

export const deleteLearnedSpeechWords = () => {
	return {
		type: DELETE_LEARNED_SPEECH_WORDS
	};
};
