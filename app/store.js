import { createStore, applyMiddleware, compose } from 'redux'; 
import rootReducer from './reducers/index.js'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger))); 

export default store;  
export * from './reducers/index.js'; 