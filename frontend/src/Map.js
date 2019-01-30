import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import TheftMarkers from './TheftMarkers';
import AccidentMarkers from './AccidentMarkers'

class MainMap extends Component {

  render() {
    const accidentMarkers = this.props.accidentMarkers.map(marker => {

      return <AccidentMarkers key = {marker._id} date = {marker.date} lat = {marker.location.coordinates[1]} lng = {marker.location.coordinates[0]} injuryType = {marker.injuryType} neighbourhood = {marker.neighbourhood} roadConditions = {marker.roadConditions} visibility = {marker.visibility} street1 = {marker.street1} street2 = {marker.street2} source = {marker.source} light = {marker.light} />
    });
    // const theftMarkers = this.props.theftMarkers.map(marker => {
    //   return <TheftMarkers key = {marker._id} lat = {marker.location.coordinates[1]} lng = {marker.location.coordinates[0]} neighbourhood = {marker.neighbourhood} bikeMake = {marker.bikeMake} bikeModel = {marker.bikeModel} day = {marker.occurrenceDay} month = {marker.occurrenceMonth} year = {marker.occurrenceYear} source = {marker.source} />
    // });

    return (
      // GoogleMap must have perameters defaultZoom + defaultCenter
      <GoogleMap
        defaultZoom={14}
        defaultCenter={this.props.center}>
        {accidentMarkers}
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