// The file which combines all reducers. A reducer is going to get an action dispatched to them,
// it's going to process it, and return a State to the component that initially called the action creator

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
	auth: AuthReducer,

});
