import React, { Component } from 'react';
import Filters from './Filters'
import MainMap from './Map'
import Graphs  from './Graphs'

export default class MapGraphAction extends Component {
  constructor() {
    super();
    this.state = {
      showAccidents: true,
      showThefts: true,
      accidentFilters: {
        status: true,
        yearFilters: null,
        neighbourhoodFilters: null,
        roadConditionsFilters: null,
        lightConditionsFilters: null,
        injuryFilters: null,
        sourceFilters: null
      },
      theftFilters: {
        status: false,
        yearFilters: [],
        neighbourhoodFilters: [],
        makeFilters: [],
        modelFilters: [],
        sourceFilters: []
      }
    };
    this.toggleAccidentShow = this.toggleAccidentShow.bind(this)
    this.toggleTheftShow = this.toggleTheftShow.bind(this)
  }

setAccidentFilters() {

}

createFilteredAccidentMarkers() {
  let accidentMarkers = this.props.accidentMarkers

  if (this.state.accidentFilters.status) {
    if (this.state.accidentFilters.yearFilters) {
      accidentMarkers = accidentMarkers.filter(marker => {
        if (this.state.accidentFilters.yearFilters.includes(marker.date.substring(0,4))) {
          return true
        }
      })
    }
    if (this.state.accidentFilters.neighbourhoodFilters) {
      accidentMarkers = accidentMarkers.filter(marker => {
        let neighbourhood = marker.neighbourhood.substring(0, (marker.neighbourhood.indexOf("(") - 1))
        if (this.state.accidentFilters.neighbourhoodFilters.includes(neighbourhood)) {
          return true
        }
      })
    }
  }
  return accidentMarkers
}

toggleAccidentShow() {
  this.setState({
    showAccidents: !this.state.showAccidents
  })
}

toggleTheftShow() {
  this.setState({
    showThefts: !this.state.showThefts
  })
}

  render() {

    const accidentMarkers = this.createFilteredAccidentMarkers()
    console.log(accidentMarkers)
    return (
      <div className="map-container">
        <MainMap
          showAccidents={this.state.showAccidents}
          accidentMarkers={accidentMarkers}
          showThefts={this.state.showThefts}
          theftMarkers={this.props.theftMarkers}
          center={{lat: 43.6532, lng: -79.3832}}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `700px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`}} />}
        />
        <Filters
          showAccidents={this.state.showAccidents}
          toggleAccidentShow={this.toggleAccidentShow}
          showThefts={this.state.showThefts}
          toggleTheftShow={this.toggleTheftShow}
        />
        <Graphs />
      </div>
    );
  }
}