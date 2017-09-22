import React from 'react'; 
import { AppRegistry } from 'react-native'; 
import App from './app/main.js';
import { Provider } from 'react-redux';
import store from './app/store.js'; 

const ProviderNav = () => {
	return (<Provider store={store}>
		<App />
	</Provider>
	)
}

AppRegistry.registerComponent('RuKiddingMe', () => ProviderNav); 

