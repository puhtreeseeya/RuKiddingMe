import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import ReactNative from 'react-native'; 
const { ScrollView, View, TextInput, Image, Text, StyleSheet } = ReactNative; 
import { fetchAllUsers } from '../reducers/index.js'; 
import { Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';




class Home extends Component {
	constructor() {
		super(); 
		this.state = {
			firstName: '', 
			lastName: '', 
			email: ''
		}
	}

	componentDidMount() {
		this.props.getAllUsers(); 
	}

	render() {
		console.log(this.props); 
		const navigate = this.props.navigation; 
		return (
			<View> 
				<Button 
					onPress={() => this.props.navigation('Signup')}
					title="Signup"
				/>
				<Button 
					onPress={() => this.props.navigation('Login')}
					title="Login" 
				/>
			</View> 
		)
	}
}

function mapStateToProps(state) {
	return {
		users : state.users
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAllUsers: function() {
			return dispatch(fetchAllUsers()); 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 