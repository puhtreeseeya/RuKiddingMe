const GET_ALL_USERS = 'GET_ALL_USERS'; 
const GET_ALL_FRIENDS = 'GET_ALL_FRIENDS'; 


export function getAllUsers(users) {
	const action = { type: GET_ALL_USERS, users }; 
	return action; 
}

export function getAllFriends(users) {
	const action = { type: GET_ALL_FRIENDS, users }; 
	return action
}

// export function fetchAllUsers() {
// 	return function thunk(dispatch) {
// 		return fetch('http://172.16.26.107:1337/api/users/')
// 		.then(res => res.json())
// 		.then(resJson => {
// 			const action = getAllUsers(resJson); 
// 			dispatch(action); 
// 		}).catch(err => console.log(err))
// 	}
// }

export function fetchAllFriends(id) {
	return function thunk(dispatch) {
		return fetch('http://172.16.23.212:1337/api/users/'+ id)
		.then(res => res.json())
		.then(resJson => {
			const action = getAllFriends(resJson); 
			dispatch(action); 
		}).catch(err => console.log(err))
	}
}

export function setNewFriend(id, email) {
	return function thunk(dispatch) {
		return fetch('http://172.16.23.212:1337/api/users/add/'+id, {
			method: 'POST', 
			headers: {
				'Accept': 'application/json',
    		'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"email": email
			})
		}).then(res => res.json())
		.then(succ => {
			dispatch(fetchAllFriends(id)); 
		}).catch(err => console.log(err))
	}
}

const reducer = (state = [], action) => {
	switch(action.type) {
		case GET_ALL_USERS: 
			return action.users
		case GET_ALL_FRIENDS: 
			return action.users
		default: 
			return state 
	}
}

export default reducer; 