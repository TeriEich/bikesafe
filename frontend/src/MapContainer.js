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
      accidentYears: false,
      accidentYearChoices: [],
      accidentSources: false,
      accidentSourceChoices: [],
      accidentNeighbourhoods: false,
      accidentNeighbourhoodChoices: [],
      visibilities: false,
      visibilityChoices: [],
      roadConditions: false,
      roadConditionChoices: [],
      lightConditions: false,
      lightConditionChoices: [],
      injuries: false,
      injuryChoices: [],
      theftYears: false,
      theftYearChoices: [],
      theftSources: false,
      theftSourceChoices: [],
      theftNeighbourhoods: false,
      theftNeighbourhoodChoices: []
    };
    this.toggleAccidentShow = this.toggleAccidentShow.bind(this)
    this.toggleTheftShow = this.toggleTheftShow.bind(this)
    this.createFilteredAccidentMarkers = this.createFilteredAccidentMarkers.bind(this)
    this.createFilteredTheftMarkers = this.createFilteredTheftMarkers.bind(this)
    this.applyFilters = this.applyFilters.bind(this)
  }


applyFilters(filters) {
  console.log('apply filters function called')
  this.setState({
    accidentYears: filters.accidentYears,
    accidentYearChoices: filters.accidentYearChoices,
    accidentSources: filters.accidentSources,
    accidentSourceChoices: filters.accidentSourceChoices,
    accidentNeighbourhoods: filters.accidentNeighbourhoods,
    accidentNeighbourhoodChoices: filters.accidentNeighbourhoodChoices,
    visibilities: filters.visibilities,
    visibilityChoices: filters.visibilityChoices,
    roadConditions: filters.roadConditions,
    roadConditionChoices: filters.roadConditionChoices,
    lightConditions: filters.lightConditions,
    lightConditionChoices: filters.lightConditionChoices,
    injuries: filters.injuries,
    injuryChoices: filters.injuryChoices,
    theftYears: filters.theftYears,
    theftYearChoices: filters.theftYearChoices,
    theftSources: filters.theftSources,
    theftSourceChoices: filters.theftSourceChoices,
    theftNeighbourhoods: filters.theftNeighbourhoods,
    theftNeighbourhoodChoices: filters.theftNeighbourhoodChoices
  })
}

// test sourceFilters
createFilteredTheftMarkers() {
  let theftMarkers = this.props.theftMarkers

  if (this.state.theftYears && this.state.theftYearChoices.length > 0) {
    theftMarkers = theftMarkers.filter(marker => {
      return this.state.theftYearChoices.includes(marker.occurrenceYear.toString())
    })
  }
  if (this.state.theftNeighbourhoods && this.state.theftNeighbourhoodChoices.length > 0) {
    theftMarkers = theftMarkers.filter(marker => {
      let neighbourhood = marker.neighbourhood.substring(0, (marker.neighbourhood.indexOf("(") - 1))
      if (this.state.theftNeighbourhoodChoices.includes(neighbourhood)) {
        return true
      }
    })
  }
  if (this.state.theftSources && this.state.theftSourceChoices.length > 0) {
    theftMarkers = theftMarkers.filter(marker => {
      if (this.state.theftSourceChoices.includes(marker.source)) {
        return true
      }
    })
  }
  return theftMarkers
}

// test sourceFilters
createFilteredAccidentMarkers() {
  let accidentMarkers = this.props.accidentMarkers

  if (this.state.accidentYears && this.state.accidentYearChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.accidentYearChoices.includes(marker.date.substring(0,4))) {
        return true
      }
    })
  }
  if (this.state.accidentNeighbourhoods && this.state.accidentNeighbourhoodChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (marker.source == "User Submitted Data") {
        return this.state.accidentNeighbourhoodChoices.includes(marker.neighbourhood)
      } else {
        let neighbourhood = marker.neighbourhood.substring(0, (marker.neighbourhood.indexOf("(") - 1))
        return this.state.accidentNeighbourhoodChoices.includes(neighbourhood)
      }
    })
  }
  if (this.state.roadConditions && this.state.roadConditionChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.roadConditionChoices.includes(marker.roadConditions)) {
        return true
      }
    })
  }
  if (this.state.lightConditions && this.state.lightConditionChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.lightConditionChoices.includes(marker.light)) {
        return true
      }
    })
  }
  if (this.state.injuries && this.state.injuryChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.injuryChoices.includes(marker.injuryType)) {
        return true
      }
    })
  }
  if (this.state.visibilities && this.state.visibilityChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.visibilityChoices.includes(marker.visibility)) {
        return true
      }
    })
  }

  if (this.state.accidentSources && this.state.accidentSourceChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.accidentSourceChoices.includes(marker.source)) {
        return true
      }
    })
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
          applyFilters={this.applyFilters}
        />
        <Graphs />
      </div>
    );
  }
}