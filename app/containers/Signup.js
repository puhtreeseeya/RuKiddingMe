import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import ReactNative from 'react-native'; 
const { ScrollView, View, TextInput, Image, Text, StyleSheet } = ReactNative; 
import { fetchAllUsers } from '../reducers/index.js'; 
import { Button } from 'react-native-elements'



class Signup extends Component {
	constructor() {
		super(); 
		this.state = {
			firstName: '', 
			lastName: '', 
			email: '', 
			password: ''
		}
	}

	render() {
		return (
			<View>
				<TextInput
					style={{height:40}}
					placeholder="First Name" 
					onChangeText={(firstName) => this.setState({firstName})}
				/>
				<TextInput
					style={{height:40}}
					placeholder="Last Name" 
					onChangeText={(lastName) => this.setState({lastName})}
				/>
				<TextInput
					style={{height:40}}
					placeholder="Password" 
					onChangeText={(password) => this.setState({password})}
				/>
				<TextInput
					style={{height:40}}
					placeholder="Email" 
					onChangeText={(email) => this.setState({email})}
				/>
				<Button
  				title='Sign Up' 
  			/>

			</View>
		)
	}
}

export default Signup