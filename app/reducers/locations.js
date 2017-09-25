const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS'; 

export function getAllLocations(locations) {
	const action = { type: GET_ALL_LOCATIONS, locations }; 
	return action; 
}

export function fetchAllLocations() {
	return function thunk(dispatch) {
		return fetch('http://172.16.23.212:1337/api/locations')
		.then(res => res.json())
		.then(resJson => {
			const action = getAllLocations(resJson); 
			dispatch(action); 
		}); 
	}
}

const reducer = (state = [], action) => {
	switch(action.type) {
		case GET_ALL_LOCATIONS: 
			return action.locations; 
		default: 
			return state; 
	}
}

export default reducer; 