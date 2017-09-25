import React, { Component } from 'react'; 
import { StyleSheet, TabBarIOS, View, Text } from 'react-native'; 
import { Provider } from 'react-redux';
import Home from './containers/Home.js'; 
import Signup from './containers/Signup.js'; 
import Login from './containers/Login.js'; 
import MainView from './containers/MainView.js'; 
import Map from './containers/Map.js'; 
import firebase from './firebase.js'; 
import store, {fetchAllUsers} from './store';
import { StackNavigator, addNavigationHelpers } from 'react-navigation'; 
import Navigator from './navigator.js'; 
import { Router, Stack, Scene, HelpIcon} from 'react-native-router-flux'; 
// returns a component navigator with props naviation that takes
class App extends Component {

render() {
	return (

			<Router>
					<Stack key="home" title="RuStudying">						
			      <Scene key="home" component={Home} />
			      <Scene key="login" component={Login} back={true}/>
			      <Scene key="signup" component={Signup} back={true}/>
			      <Scene key="main" component={MainView} back={false}/>
			    </Stack>
		  </Router>
	); 
}
}




export default App; 