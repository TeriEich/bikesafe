import React, {Component} from 'react';
import { Marker, InfoWindow } from 'react-google-maps'

class Markers extends Component {

  constructor() {
    super()

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render() {
		const lat = parseFloat(this.props.lat)
		const lng = parseFloat(this.props.lng)

		return (
			<Marker
        position={{ lat, lng }}
        onClick={ () => this.toggle() }>
        { this.state.isOpen && <InfoWindow onCloseClick={ () => this.toggle() }>
        <p>hello</p>
        </InfoWindow> }
      </ Marker>)
	}

}

export default Markers