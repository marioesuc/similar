// The file which combines all reducers. A reducer is going to get an action dispatched to them,
// it's going to process it, and return a State to the component that initially
// called the action creator

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegisterReducer from './RegisterReducer';
import VocabReducer from './VocabReducer';
import SpeechReducer from './SpeechReducer';
import GrammarReducer from './GrammarReducer';

export default combineReducers({
	auth: AuthReducer,
	register: RegisterReducer,
	vocab: VocabReducer,
	speech: SpeechReducer,
	grammar: GrammarReducer
});
