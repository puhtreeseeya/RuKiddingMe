import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import ReactNative from 'react-native'; 
const { ScrollView, View, TextInput, Image, StyleSheet, TouchableOpacity, TouchableHighlight } = ReactNative; 
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import MapView from 'react-native-maps'; 
import Modal from 'react-native-animated-modal'
import { updateUserLocation, fetchAllFriends, fetchAllLocations, fetchUserById, updateUserLocationId, setNewFriend } from '../reducers/index.js'; 
import { Button, Tabs, Tab, Icon, CheckBox, FormLabel, FormInput} from 'react-native-elements'
import store from '../store.js';
import geolib from 'geolib'; 
import styles from '../style'; 


import { Router, Stack, Scene, HelpIcon} from 'react-native-router-flux'; 

class MainView extends Component {
	constructor() {
		super(); 
		this.state = {
			initialPosition: '', 
			lastPosition: '', 
			watchId: '', 
			modalVisible: null,
			addedUser: {}, 
			pickedUser: '', 
			region: { 
				latitude: 0,
  			longitude: 0,
  			latitudeDelta: 0.03,
  			longitudeDelta: 0.03
  		}, 
  		updated: false 
		}
		this.submitModal = this.submitModal.bind(this); 
		this.onUserIconPress = this.onUserIconPress.bind(this); 
		this.closeModal = this.closeModal.bind(this); 
	}
	closeModal = () => {
		this.setState({modalVisible: null}); 
	}

	componentDidMount() {
		const id = this.props.singleUser.id
		navigator.geolocation.getCurrentPosition(position => {
			let lat = position.coords.latitude; 
			let long = position.coords.longitude;
			this.props.locations.map(location => {
				const coords = {latitude: location.lat, longitude: location.long}; 
				const dist = geolib.getDistance(position.coords, coords); 				
				if(dist < 40) {
					console.log('hello'); 
					this.props.setLocationId(id, location.id)
				}
			})
			if(!this.state.updated) {
				this.props.setLocationId(id, undefined); 
			}
			this.props.setLocation(id, lat, long); 
		}, 
		(error) => alert(error.message), 
		{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}); 
		

		const watchId = navigator.geolocation.watchPosition((position) => {
      let lat = position.coords.latitude; 
      let long = position.coords.longitude; 
      this.props.locations.map(location => {
				const coords = {latitude: location.lat, longitude: location.long}; 
				const dist = geolib.getDistance(position.coords, coords); 
				if(dist < 40) {
					this.props.setLocationId(id, location.id); 
					this.setState({updated: true}); 
				}
			})
			if(!this.state.updated) {
				this.props.setLocationId(id, null); 
			}
			this.props.setLocation(id, lat, long); 
    });
    this.setState({ watchId }); 
		this.props.getAllFriends(id); 
		

	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.state.watchId);
	}

	submitModal() {
		this.setState({modalVisible: null})
		this.props.addFriend(this.props.singleUser.id, this.state.addedUser)
	}

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <FormLabel>Name</FormLabel>
			<FormInput style={styles.formContent} onChangeText={(addedUser) => this.setState({ addedUser })}/>
      <Button title="Add Buddy" raised onPress={this.submitModal}/>
    </View>
  );

  onUserIconPress = (friend) => {
  	const lat = parseFloat(friend.user.lat); 
  	const long = parseFloat(friend.user.long);
  	this.setState({ region: { latitude: lat, longitude: long, latitudeDelta:0.03, longitudeDelta:0.03 }})
  	this.setState({modalVisible: 2, pickedUser: friend})
  }

  _renderUserModalContent = (pickedUser) => {
  	const coordinate = {
  		latitude: this.state.region.latitude, 
  		longitude: this.state.region.longitude
  	}
  	return (
  	<View style={styles.modalContent}> 
  		<MapView style={{height:"100%"}} initialRegion={{
		      latitude: this.state.region.latitude,
		      longitude: this.state.region.longitude,
		      latitudeDelta: 0.0422,
		      longitudeDelta: 0.0221,
		    }}>
  		<MapView.Marker coordinate={coordinate} />
  		</MapView>
  	</View> 
  	)
  }

	render() {
		console.log(this.state); 
		return ( 
			<View>
					<CheckBox
					  center
					  title='Add Friends'
					  iconRight
					  iconType='material'
					  checkedIcon='clear'
					  uncheckedIcon='add'
					  checkedColor='red'
					  onPress={() => {this.setState({modalVisible: 1})}}
					/>
          <List dataArray={this.props.users}
            renderRow={(friend) =>
            <TouchableHighlight onPress={() => this.onUserIconPress()}>	
              <ListItem ref={friend} style={{marginLeft:0}} onPress={() => this.onUserIconPress(friend)}>
                <Body>
              		<Text style={styles.heading}>{friend.user.fullName}
              		</Text>
              		<Text note>{ (friend.user.location) ? friend.user.location.name : null}</Text>
            		</Body>
              </ListItem>
            </TouchableHighlight>
            }>
          </List>
          <Modal
          	isVisible={this.state.modalVisible === 1}
	          animationInTiming={1000}
	          animationOutTiming={0}
	          backdropTransitionInTiming={500}
         		backdropTransitionOutTiming={0}
	        >
          {this._renderModalContent()}
        	</Modal>

        	<Modal
          	isVisible={this.state.modalVisible === 2}
          	onBackdropPress={() => this.closeModal()}
	        >
          {this._renderUserModalContent(this.state.pickedUser)}
        	</Modal>
      </View>
		)
	}
}

function mapStateToProps(state) {
	return {
		singleUser : state.singleUser, 
		users: state.users, 
		locations: state.locations
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setLocation: function(id, lat, long) {
			return dispatch(updateUserLocation(id, lat, long)); 
		}, 
		setLocationId: function(id, locationId) {
			return dispatch(updateUserLocationId(id, locationId)); 
		}, 
		getAllFriends: function(id) {
			return dispatch(fetchAllFriends(id)); 
		}, 
		getAllLocations: function() {
			return dispatch(fetchAllLocations()); 
		}, 
		addFriend: function(id, email) {
			return dispatch(setNewFriend(id, email)); 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView); 