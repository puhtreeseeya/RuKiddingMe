import { combineReducers } from 'redux';  
import users from './users'; 
import singleUser from './singleUser'; 

const rootReducer = combineReducers({
	users, 
	singleUser
}); 

export default rootReducer; 
export * from './users'; 
export * from './singleUser'; 
