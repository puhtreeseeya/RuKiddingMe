import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import ReactNative from 'react-native'; 
const { ScrollView, View, TextInput, Image, StyleSheet } = ReactNative; 
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { updateUserLocation, fetchAllFriends } from '../reducers/index.js'; 
import { Button } from 'react-native-elements'; 
import store from '../store.js';

class FeedView extends Component {
	constructor() {
		super(); 
		this.state = {
			users : []
		}
	}

	componentDidMount() {
		const id = this.props.singleUser.id; 
		this.props.getAllFriends(id); 
		console.log("hi1"); 
	}

	componentWillReceiveProps(nextProps) {
		console.log("rerender here"); 
		console.log(nextProps)
		this.setState({ users: nextProps.users }); 
		this.forceUpdate(); 
	}

	componentWillUpdate(prevProps, prevState)  {
		console.log("ugh")
	}



	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps); 
	// 	// if(nextProps.users.length !== 0) {
	// 	// 	friends : nextProps.users
	// 	// }
	// }

	render() {
		console.log("hhi im sad", this.props); 
		let friends = this.props.users;

		const CreateTable = (friends) => {
			console.log("hi??"); 
			return (
				<Container>
	        <Header />
	        <Content>
	          <List dataArray={friends}
	            renderRow={(friend) =>
	              <ListItem>
	                <Text>{friend.friendId}</Text>
	              </ListItem>
	            }>
	          </List>
	        </Content>
	      </Container>
			)
		}
		return (
			<View> 
			{
				(this.state.users.length === 0) 
				? <Container><Header /></Container> 
				: <CreateTable friends={this.state.users}/>
			}
			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		singleUser : state.singleUser, 
		users: state.users
	}
}

function mapDispatchToProps(dispatch) {
	return { 
		getAllFriends: function(id) {
			return dispatch(fetchAllFriends(id)); 
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedView); 