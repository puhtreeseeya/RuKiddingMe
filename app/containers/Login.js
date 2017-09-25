import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { ScrollView, View, TextInput, Image, Text, StyleSheet, AsyncStorage } from 'react-native'; 
import { fetchUserByLoginInfo } from '../reducers/index.js'; 
import { Button } from 'react-native-elements'; 
import { NavigationActions } from 'react-navigation'; 
import { Actions } from 'react-native-router-flux'; 
import { Container, Header, Left, Body, Right, Icon, Title, Content } from 'native-base';

import store from '../store.js';

class Login extends Component {
	constructor(props) {
		super(props); 
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
  		Actions.main() 
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
				<Container style={{backgroundColor:"#FFFFFF"}}>
					<Content>
						<TextInput
							style={{height:40, marginLeft:15, marginRight:15}}
							placeholder="Email" 
							onChangeText={(email) => this.setState({email})}
						/>
						<TextInput
							style={{height:40, marginLeft:15, marginRight:15}}
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

