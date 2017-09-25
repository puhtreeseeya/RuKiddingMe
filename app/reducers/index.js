import { combineReducers } from 'redux';  
import users from './users'; 
import singleUser from './singleUser'; 
import locations from './locations'; 

const rootReducer = combineReducers({
	users, 
	singleUser, 
	locations
}); 

export default rootReducer; 
export * from './users'; 
export * from './singleUser'; 
export * from './locations'; 
