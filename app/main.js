import React, { Component } from 'react'; 
import { StyleSheet, TabBarIOS, View, Text } from 'react-native'; 
import { Provider } from 'react-redux';
import Home from './containers/Home.js'; 
import Signup from './containers/Signup.js'; 
import Login from './containers/Login.js'; 
import MainView from './containers/MainView.js'; 
import firebase from './firebase.js'; 
import store, {fetchAllUsers} from './store';
import { StackNavigator, addNavigationHelpers } from 'react-navigation'; 
import Tabs from './navigator.js'; 



export default class App extends Component { 
	static navigationOptions = {
    title: 'RuStudying',
  };

	render() {
		//const { navigate } = this.props.navigation;
		return (  
				<Tabs />
		)
		
	}
}
// export default StackNavigator({
// 	Home: { screen: App }, 
// 	Signup: { screen: Signup}, 
// 	Login: { screen: Login}, 
// 	MainView: { screen: MainView }
// })
// export default App; 

// import NavigatorTHing from './main';


// export default () => (
// 	<Provider store={store}>
// 		<NavigatorTHing />
// 	</Provider>
// );
