const GET_ALL_USERS = 'GET_ALL_USERS'; 


export function getAllUsers(users) {
	const action = { type: GET_ALL_USERS, users }; 
	return action; 
}

export function fetchAllUsers() {
	return function thunk(dispatch) {
		return fetch('http://172.16.26.107:1337/api/users/')
		.then(res => res.json())
		.then(resJson => {
			const action = getAllUsers(resJson); 
			dispatch(action); 
		}).catch(err => console.log(err))
	}
}

const reducer = (state = [], action) => {
	switch(action.type) {
		case GET_ALL_USERS: 
			return action.users
		default: 
			return state 
	}
}

export default reducer; 