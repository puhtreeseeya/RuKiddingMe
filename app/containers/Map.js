import React, { Component } from 'react'; 
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import MapView from 'react-native-maps'; 

class Map extends Component {

	

	render() {
		console.log("why arent u showinggg", MapView); 

		return (
			<MapView 
			style={{height:500}} 
			initialRegion={{
		      latitude: 40.504947,
		      longitude: -74.452392,
		      latitudeDelta: 0.0922,
		      longitudeDelta: 0.0421,
		    }}
		  >
			</MapView>

		)
	}

}

// export default connect(MainView)
export default Map