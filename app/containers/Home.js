import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import ReactNative from 'react-native'; 
const { ScrollView, View, TextInput, Image, Text, StyleSheet } = ReactNative; 
import { fetchAllUsers } from '../reducers/index.js'; 
import { Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';




class Home extends Component {
	constructor() {
		super(); 
		this.state = {
			firstName: '', 
			lastName: '', 
			email: ''
		}
	}

	render() {
		console.log(this.props); 
		const navigate = this.props.navigation; 
		return (
			<Container> 
				<Container>
				   <Header>
	          <Body>
	            <Title>Ru Studying</Title>
	          </Body>
	        </Header>
				</Container>
				<Container>
				<View> 
					<Button 
						onPress={() => this.props.navigate('Signup')}
						title="Signup"
						buttonStyle={{marginBottom: 20}}
						raised
					/>
					<Button 
						onPress={() => this.props.navigation.navigate('Login')}
						title="Login" 
					/>
				</View>
				</Container> 
			</Container> 
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