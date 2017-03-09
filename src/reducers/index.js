import { combineReducers } from 'redux';
import { formReducer } from './form';
import { userReduser } from './user';

// export default formReducer;
// 
export default combineReducers({formReducer, userReduser});