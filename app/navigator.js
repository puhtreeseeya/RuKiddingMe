import React from 'react'; 
import { TabNavigator, StackNavigator, } from 'react-navigation'; 
import { Icon } from 'react-native-elements'; 
import { ScrollView, View, TextInput, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'; 


import Home from './containers/Home'; 
import Signup from './containers/Signup'; 
import Login from './containers/Login'; 
import MainView from './containers/MainView'; 
import FeedView from './containers/FeedView'; 
 
const AuthStack = StackNavigator({
	Home: {
		screen: Home
	}, 
	Login: {
		screen: Login
	},
	MainView: {
		screen: MainView
	}
})


// const Tabs = TabNavigator({
// 	Feed: {
// 		screen: FeedView, 
// 		navigationOptions: ({navigation}) => ({
//   		tabBarLabel: ({ tintColor }) => <TouchableOpacity onPress={()=>navigation.navigate('FeedView', {date: new Date()})} style={{flex: 1, alignItems:'center', justifyContent: 'center'}}><Text>Favorites</Text></TouchableOpacity>,
//     }),
// 	}, 
// 	Me: {
// 		screen: AuthStack
// 	}
// }, {
// 	lazy : true
// }); 

export default AuthStack; 



