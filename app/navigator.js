import React from 'react'; 
import { TabNavigator, StackNavigator } from 'react-navigation'; 
import { Icon } from 'react-native-elements'; 

import Home from './containers/Home'; 
import Signup from './containers/Signup'; 
import Login from './containers/Login'; 

export const AuthStack = StackNavigator({
	Home: {
		screen: Home
	}, 
	Login: {
		screen: Login
	}
})


export const Tabs = TabNavigator({
	Feed: {
		screen: Home, 
	}, 
	Me: {
		screen: AuthStack
	}
}); 