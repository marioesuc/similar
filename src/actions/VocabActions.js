// These are the action creators associated to the authentication

import { 
	LOAD_VOCAB
} from './types';

export const loadVocabData = () => {
	return {
		type: LOAD_VOCAB
	};
};
