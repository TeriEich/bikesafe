import React, {Component} from 'react';
import { Marker } from 'react-google-maps'

class Markers extends Component {

	render() {
		const lat = parseFloat(this.props.lat)
		const lng = parseFloat(this.props.lng)

		console.log(this.props, lat, lng);
		return (
			<Marker
	        position={{ lat, lng }}
	        />)
	}

}

export default Markers