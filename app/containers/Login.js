import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import ReactNative from 'react-native'; 
const { ScrollView, View, TextInput, Image, Text, StyleSheet, AsyncStorage } = ReactNative; 
import { fetchUserByLoginInfo } from '../reducers/index.js'; 
import { Button } from 'react-native-elements'; 
import { NavigationActions } from 'react-navigation'; 
import { Container, Header, Left, Body, Right, Icon, Title, Content } from 'native-base';

import store from '../store.js';

class Login extends Component {
	constructor() {
		super(); 
		this.state = {
			email: '', 
			password: '', 
			error: ''
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		this.props.loginUser(this.state.email, this.state.password); 

	}

  componentWillReceiveProps(nextProps) {
  	if(Object.keys(nextProps.singleUser).length) {
  		AsyncStorage.setItem('user', JSON.stringify(nextProps.singleUser));
  		console.log(nextProps);
  		nextProps.navigation.dispatch(NavigationActions.navigate({ routeName: 'MainView'})) 
  	}
  }



  // componentDidUpdate() {
  // 	console.log("hello"); 
  // 	if(Object.keys(this.props.singleUser).length) {
  // 		this.props.navigator.dispatch(NavigationActions.navigate({ routeName: 'MainNavigator'})) 
  // 	}
  // }



	render() {
		
		
		return (
			<Container>
			<Content>
				<TextInput
					style={{height:40}}
					placeholder="Email" 
					onChangeText={(email) => this.setState({email})}
				/>
				<TextInput
					style={{height:40}}
					placeholder="Password" 
					onChangeText={(password) => this.setState({password})}
				/>
				<Button
  				title='Login' 
  				onPress={this.handleLogin}
  			/>
  			<Text> {this.state.error} </Text> 
		 	</Content>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		singleUser : state.singleUser
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loginUser: function(email, password) {
			return dispatch(fetchUserByLoginInfo(email, password)); 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); 

