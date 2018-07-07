// These are the action creators associated to the authentication

import { 
	LOAD_GRAMMAR
} from './types';

export const loadGrammarData = () => {
	return {
		type: LOAD_GRAMMAR
	};
};
