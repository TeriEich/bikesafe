import React, {Component} from 'react';
import { Marker, InfoWindow } from 'react-google-maps'

class Markers extends Component {

  constructor() {
    this.state = {
      isOpen: false
    };
  }

  _toggleInfoWindow = () => this.setState({ this.state.isOpen: !this.state.isOpen });

	render() {
		const lat = parseFloat(this.props.lat)
		const lng = parseFloat(this.props.lng)

		console.log(this.props, lat, lng);
		return (
			<Marker
        position={{ lat, lng }}
        onClick={ () => this._toggleInfoWindow() }>
        { this.isOpen && <InfoWindow onCloseClick={ () => this._toggleInfoWindow() }>
        <p>hello</p>
        </InfoWindow> }
      </ Marker>)
	}

}

export default Markers