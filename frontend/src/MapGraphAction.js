import React, { Component } from 'react';
import Filters from './Filters.js'
import MainMap from './Map'
import Graphs  from './Graphs'

export default class MapGraphAction extends Component {


  render() {
    return (
      <div className="map-container">
        <MainMap
          accidentMarkers={this.props.accidentMarkers}
          theftMarkers={this.props.theftMarkers}
          center={{lat: 43.6532, lng: -79.3832}}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `700px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`}} />}
        />
        <Filters
          accidentMarkers={this.props.accidentMarkers}
          theftMarkers={this.props.theftMarkers}
        />
        <Graphs />
      </div>
    );
  }
}