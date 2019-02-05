import React, {Component} from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

const blueDot = require ("./media/blue-dot.svg");


class TheftMarkers extends Component {

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

        // icon={{ url: "./media/map-icon-light-blue.svg"}}
    return (
      <Marker
        icon={{ url: blueDot }}
        position={{ lat, lng }}
        onClick={ () => this.toggle() }>
        { this.state.isOpen && <InfoWindow options={{maxWidth: 150}} onCloseClick={ () => this.toggle() }>
          <div><h5>Theft</h5>
          <p><strong>Date: </strong>{this.props.occurrenceMonth}/{this.props.occurrenceDay}/{this.props.occurrenceYear}</p>
          <p><strong>Neighbourhood:</strong> {this.props.neighbourhood}</p>
          <p><strong>Location:</strong> ({lat}, {lng})</p>
          <p><strong>Bike Type:</strong> {this.props.bikeType}</p>
          <p><strong>Make:</strong> {this.props.bikeMake}</p>
          <p><strong>Model:</strong> {this.props.bikeModel}</p>
          <p><strong>Source: </strong>{this.props.source}</p></div>
        </InfoWindow> }
      </Marker>)
	}

}

export default TheftMarkers

