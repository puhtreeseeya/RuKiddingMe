import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import ReactNative from 'react-native'; 
const { ScrollView, View, TextInput, Image, Text, StyleSheet } = ReactNative; 
import { updateUserLocation } from '../reducers/index.js'; 
import { Button } from 'react-native-elements'; 
import store from '../store.js';

class MainView extends Component {
	constructor() {
		super(); 
		this.state = {
			initialPosition: '', 
			lastPosition: ''
		}
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(position => {
			console.log(position);
			console.log(this.props.singleUser); 
			const id = this.props.singleUser.id; 
			const lat = position.coords.latitude; 
			const long = position.coords.longitude; 
			this.props.setLocation(id, lat, long); 
		})
	}

	render() {
		console.log(this.state.initialPosition);
		return (
			<View><Text>Logged in and redirected :) </Text></View> 
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
		setLocation: function(id, lat, long) {
			return dispatch(updateUserLocation(id, lat, long)); 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView); 