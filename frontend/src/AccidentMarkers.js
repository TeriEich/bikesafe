import React, {Component} from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

const coralSquare = require ("./media/coral-square.svg");


class AccidentMarkers extends Component {

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

  // **SAVE FOR LATER**
  // animation={window.google.maps.Animation.DROP}
    return (
      <Marker
        icon={{ url: coralSquare }}
        position={{ lat, lng }}
        onClick={ () => this.toggle() }>
        { this.state.isOpen && <InfoWindow options={{maxWidth: 150}} onCloseClick={ () => this.toggle() }>
          <div>
          <h5>Accident</h5>
          <p><strong>Date: </strong>{this.props.date}</p>
          <p><strong>Neighbourhood:</strong> {this.props.neighbourhood}</p>
          <p><strong>Location:</strong> {this.props.street1} &amp; {this.props.street2} ({lat}, {lng})</p>
          <p><strong>Road Conditions:</strong> {this.props.roadConditions}</p>
          <p><strong>Light Conditions:</strong> {this.props.light}</p>
          <p><strong>Injury Type:</strong> {this.props.injuryType}</p>
          <p><strong>Source: </strong>{this.props.source}</p>
          </div>
        </InfoWindow> }
      </Marker>
      )
	}

}

export default AccidentMarkers
