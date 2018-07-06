// These are the action creators associated to the authentication

import { 
	LOAD_VOCAB,
	UPDATE_LEARNED_VOCAB_WORDS
} from './types';

export const loadVocabData = () => {
	return {
		type: LOAD_VOCAB
	};
};

export const updateLearnedVocabWords = ({ eng, success }) => {
	console.log('Parámetros');
	console.log(eng);
	console.log(success);
	return {
		type: UPDATE_LEARNED_VOCAB_WORDS,
		payload: { eng, success }
	};
};
