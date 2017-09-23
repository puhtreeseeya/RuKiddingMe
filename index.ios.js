import React from 'react'; 
import { AppRegistry } from 'react-native'; 
import App from './app/main.js';
import { Provider } from 'react-redux';
import store from './app/store.js'; 
import {Tabs} from './app/navigator.js'; 

const ProviderNav = () => {
	return (<Provider store={store}>
		<Tabs />
	</Provider>
	)
}

AppRegistry.registerComponent('RuKiddingMe', () => ProviderNav); 

