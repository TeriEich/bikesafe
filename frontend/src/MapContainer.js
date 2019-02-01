import React, { Component } from 'react';
import Filters from './Filters'
import MainMap from './Map'
import Graphs  from './Graphs'

export default class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      showAccidents: true,
      showThefts: true,
      accidentFilters: {
        status: true,
        yearFilters: ['2014', '2015'],
        neighbourhoodFilters: null,
        roadConditionsFilters: null,
        lightConditionsFilters: null,
        injuryFilters: null,
        sourceFilters: null
      },
      theftFilters: {
        status: false,
        yearFilters: null,
        neighbourhoodFilters: null,
        sourceFilters: null
      }
    };
    this.toggleAccidentShow = this.toggleAccidentShow.bind(this)
    this.toggleTheftShow = this.toggleTheftShow.bind(this)
    this.createFilteredAccidentMarkers = this.createFilteredAccidentMarkers.bind(this)
    this.createFilteredTheftMarkers = this.createFilteredTheftMarkers.bind(this)
  }


// test sourceFilters
createFilteredTheftMarkers() {
  let theftMarkers = this.props.theftMarkers

  console.log('theft markers inside filter function', theftMarkers)

  if (this.state.theftFilters.status) {

    if (this.state.theftFilters.yearFilters) {
      theftMarkers = theftMarkers.filter(marker => {
        console.log('year', marker.occurrenceYear)
        return this.state.theftFilters.yearFilters.includes(marker.occurrenceYear)
      })
    }
    if (this.state.theftFilters.neighbourhoodFilters) {
      theftMarkers = theftMarkers.filter(marker => {
        let neighbourhood = marker.neighbourhood.substring(0, (marker.neighbourhood.indexOf("(") - 1))
        if (this.state.theftFilters.neighbourhoodFilters.includes(neighbourhood)) {
          return true
        }
      })
    }
    if (this.state.theftFilters.sourceFilters) {
      theftMarkers = theftMarkers.filter(marker => {
        if (this.state.theftFilters.sourceFilters.includes(marker.source)) {
          return true
        }
      })
    }
  }
  return theftMarkers
}

// test sourceFilters
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
    if (this.state.accidentFilters.roadConditionsFilters) {
      accidentMarkers = accidentMarkers.filter(marker => {
        if (this.state.accidentFilters.roadConditionsFilters.includes(marker.roadConditions)) {
          return true
        }
      })
    }
    if (this.state.accidentFilters.lightConditionsFilters) {
      accidentMarkers = accidentMarkers.filter(marker => {
        if (this.state.accidentFilters.lightConditionsFilters.includes(marker.light)) {
          return true
        }
      })
    }
    if (this.state.accidentFilters.injuryFilters) {
      accidentMarkers = accidentMarkers.filter(marker => {
        if (this.state.accidentFilters.injuryFilters.includes(marker.injuryType)) {
          return true
        }
      })
    }
    if (this.state.accidentFilters.sourceFilters) {
      accidentMarkers = accidentMarkers.filter(marker => {
        if (this.state.accidentFilters.sourceFilters.includes(marker.source)) {
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
    const theftMarkers = this.createFilteredTheftMarkers()
    console.log('final theft markers', theftMarkers)

    const accidentMarkers = this.createFilteredAccidentMarkers()
    return (
      <div className="map-container">
        <MainMap
          showAccidents={this.state.showAccidents}
          accidentMarkers={accidentMarkers}
          showThefts={this.state.showThefts}
          theftMarkers={theftMarkers}
          center={{lat: 43.653226, lng: -79.3831843}}
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