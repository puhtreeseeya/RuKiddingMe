const GET_USER_BY_ID = 'GET_USER_BY_ID'; 

export function getUserById(user) {
	const action = { type: GET_USER_BY_ID, user }
	return action; 
}

export function fetchUserById(id) {
	return function thunk(dispatch) {
		fetch('http://172.16.26.107:1337/api/users/'+id)
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
		fetch('http://172.16.26.107:1337/api/users/login', {
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

const reducer = (state = {}, action) => {
	switch(action.type) {
		case GET_USER_BY_ID: 
			return action.user
		default: 
			return state
	}
}

export default reducer; 