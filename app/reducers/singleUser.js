const GET_USER_BY_ID = 'GET_USER_BY_ID'; 

export function getUserById(user) {
	const action = { type: GET_USER_BY_ID, user }
	return action; 
}

export function fetchUserById(id) {
	return function thunk(dispatch) {
		return fetch('http://192.168.1.247:1337/api/users/'+id)
		.then(res => res.json())
		.then(resJson => {
			const action = getUserById(resJson); 
			dispatch(action); 
		}); 
	}
}

//get userId from login 
export function fetchUserByLoginInfo(email, password) {
	return function thunk(dispatch) {
		console.log(email, password); 
		return fetch('http://192.168.1.247:1337/api/users/login', {
			method: 'POST', 
			headers: {
				'Accept': 'application/json',
    		'Content-Type': 'application/json',
			}, 
			body: JSON.stringify({
				"email": email, 
				"password": password
			})
		}).then(res => res.json())
		.then(resJson => {
			dispatch(getUserById(resJson)); 
		})
	}
}

export function updateUserLocation(id, lat, long) {
	return function thunk(dispatch) {
		console.log("inside thunky thunk"); 
		return fetch('http://192.168.1.247:1337/api/users/'+id, {
			method: 'PUT', 
			headers: {
				'Accept': 'application/json',
    		'Content-Type': 'application/json',
			}, 
			body: JSON.stringify({
				"lat": lat, 
				"long": long
			})
		}).then(() => {
			dispatch(getUserById(id)); 
		})
	}
}

const reducer = (state = {}, action) => {
	switch(action.type) {
		case GET_USER_BY_ID: 
			return action.user
		default: 
			return state
	}
}

export default reducer; 