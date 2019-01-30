import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Markers from './Markers'

class MainMap extends Component {

  render() {
    const accidentMarkers = this.props.accidentMarkers.map(marker => {
      return <Markers key={marker._id} lat={marker.location.coordinates[1]} lng={marker.location.coordinates[0]} />
    });
    const theftMarkers = this.props.theftMarkers.map(marker => {
      return <Markers key={marker._id} lat={marker.location.coordinates[1]} lng={marker.location.coordinates[0]} />
    });

    return (
      // GoogleMap must have perameters defaultZoom + defaultCenter
      <GoogleMap
        defaultZoom={14}
        defaultCenter={this.props.center}>
        {accidentMarkers}
        {theftMarkers}
      </GoogleMap>

    )
  }
}

export default withGoogleMap(MainMap)
