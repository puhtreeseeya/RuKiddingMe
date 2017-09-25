import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import ReactNative from 'react-native'; 
const { ScrollView, View, TextInput, Text, StyleSheet } = ReactNative; 
import { fetchAllLocations } from '../reducers/index.js'; 
import { Button, Card, Image} from 'react-native-elements'
import { StackNavigator, NavigationActions } from 'react-navigation';
import { Actions } from 'react-native-router-flux'; 
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

	componentDidMount() {
		this.props.getAllLocations(); 
	}

	render() {
		
		return (
			<Container style={{backgroundColor:"#FFFFFF"}}> 
				<View style={{paddingTop: 100}}> 
					<Card 
						title="Study With Friends"
						image={require('../../study.jpg')}
					>
					<Button 
						onPress={() => Actions.signup()}
						title="Signup"
						buttonStyle={{marginBottom: 20}}
						backgroundColor="#FA8072"
						raised
					/>
					<Button 
						onPress={() => Actions.login()}
						title="Login" 
						backgroundColor="#FA8072"
						raised
					/>
					</Card> 
				</View>
			</Container> 
		)
	}
}

function mapStateToProps(state) {
	return {
		locations : state.locations
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAllLocations: function() {
			return dispatch(fetchAllLocations()); 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 