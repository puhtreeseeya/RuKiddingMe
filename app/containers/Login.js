import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import ReactNative from 'react-native'; 
const { ScrollView, View, TextInput, Image, Text, StyleSheet } = ReactNative; 
import { fetchUserByLoginInfo } from '../reducers/index.js'; 
import { Button } from 'react-native-elements'; 
import store from '../store.js';


class Login extends Component {
	constructor() {
		super(); 
		this.state = {
			email: '', 
			password: ''
		}
		this.handleLogin = this.handleLogin.bind(this); 
	}

	handleLogin() {
		console.log(this.state.email, " dfsfd", this.state.password); 
		this.props.loginUser(this.state.email, this.state.password); 
	}

	render() {
		console.log(this.state.email, " ", this.state.password); 
		return (
			<View>
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

			</View>
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
			console.log(email, "dfsds ", password);
			return dispatch(fetchUserByLoginInfo(email, password)); 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); 

