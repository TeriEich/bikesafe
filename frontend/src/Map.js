import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Markers from './Markers'

class MainMap extends Component {
  
  render() {
    
    const markers = this.props.markers.map(marker => {

      return <Markers key = {marker.id} lat = {marker.latitude} lng = {marker.longitude} />
    });

    return (
      // GoogleMap must have perameters defaultZoom + defaultCenter
      <GoogleMap
        defaultZoom={14}
        defaultCenter={this.props.center}>
        {markers}
      </GoogleMap>

    )
  }
}

export default withGoogleMap(MainMap)


// // in the render
// //allows for an empty array instead of returning undefined if no markers found
// const markers = this.props.markers || []
// // in the return
// {markers.map((marker, index) => (
//             <Marker {...marker} />
//             )
//         )}