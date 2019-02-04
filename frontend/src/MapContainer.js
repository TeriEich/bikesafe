import React, { Component } from 'react';
import Filters from './Filters';
import MainMap from './Map';
import Graphs  from './Graphs';
import { Button, ButtonGroup, Container, Row } from 'reactstrap';
import './App.css';



export default class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      showAccidents: true,
      showThefts: true,
      accidentYear: false,
      accidentYearChoices: [],
      accidentSource: false,
      accidentSourceChoices: [],
      accidentNeighbourhood: false,
      accidentNeighbourhoodChoices: [],
      visibility: false,
      visibilityChoices: [],
      roadCondition: false,
      roadConditionChoices: [],
      lightCondition: false,
      lightConditionChoices: [],
      injury: false,
      injuryChoices: [],
      theftYear: false,
      theftYearChoices: [],
      theftSource: false,
      theftSourceChoices: [],
      theftBikeType: false,
      theftBikeTypeChoices: [],
      theftNeighbourhood: false,
      theftNeighbourhoodChoices: [],
      initialAccidentCount: 0,
      initialTheftCount: 0
    };
    this.toggleAccidentShow = this.toggleAccidentShow.bind(this)
    this.toggleTheftShow = this.toggleTheftShow.bind(this)
    this.createFilteredAccidentMarkers = this.createFilteredAccidentMarkers.bind(this)
    this.createFilteredTheftMarkers = this.createFilteredTheftMarkers.bind(this)
    this.applyAccidentFilters = this.applyAccidentFilters.bind(this)
    this.applyTheftFilters = this.applyTheftFilters.bind(this)
  }


applyAccidentFilters(filters, initialCount) {
  console.log('apply filters function called');
  this.setState({
    initialAccidentCount: initialCount,
    accidentYear: filters.accidentYear,
    accidentYearChoices: filters.accidentYearChoices,
    accidentSource: filters.accidentSource,
    accidentSourceChoices: filters.accidentSourceChoices,
    accidentNeighbourhood: filters.accidentNeighbourhood,
    accidentNeighbourhoodChoices: filters.accidentNeighbourhoodChoices,
    visibility: filters.visibility,
    visibilityChoices: filters.visibilityChoices,
    roadCondition: filters.roadCondition,
    roadConditionChoices: filters.roadConditionChoices,
    lightCondition: filters.lightCondition,
    lightConditionChoices: filters.lightConditionChoices,
    injury: filters.injury,
    injuryChoices: filters.injuryChoices
  })
};

applyTheftFilters(filters, initialCount) {
  console.log('apply filters function called');
  this.setState({
    initialTheftCount: initialCount,
    theftYear: filters.theftYear,
    theftYearChoices: filters.theftYearChoices,
    theftSource: filters.theftSource,
    theftSourceChoices: filters.theftSourceChoices,
    theftBikeType: filters.theftBikeType,
    theftBikeTypeChoices: filters.theftBikeTypeChoices,
    theftNeighbourhood: filters.theftNeighbourhood,
    theftNeighbourhoodChoices: filters.theftNeighbourhoodChoices
  })
};

// test sourceFilters
createFilteredTheftMarkers() {
  let theftMarkers = this.props.theftMarkers;

  if (this.state.theftYear && this.state.theftYearChoices.length > 0) {
    theftMarkers = theftMarkers.filter(marker => {
      return this.state.theftYearChoices.includes(marker.occurrenceYear.toString())
    })
  }
  if (this.state.theftNeighbourhood && this.state.theftNeighbourhoodChoices.length > 0) {
    theftMarkers = theftMarkers.filter(marker => {
      let neighbourhood = marker.neighbourhood.substring(0, (marker.neighbourhood.indexOf("(") - 1));
      if (this.state.theftNeighbourhoodChoices.includes(neighbourhood)) {
        return true
      }
    })
  }
  if (this.state.theftBikeType && this.state.theftBikeTypeChoices.length > 0) {
    theftMarkers = theftMarkers.filter(marker => {
      if (this.state.theftBikeTypeChoices.includes(marker.bikeType)) {
        return true
      }
    })
  }
  if (this.state.theftSource && this.state.theftSourceChoices.length > 0) {
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

  if (this.state.accidentYear && this.state.accidentYearChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.accidentYearChoices.includes(marker.date.substring(0,4))) {
        return true
      }
    })
  }
  if (this.state.accidentNeighbourhood && this.state.accidentNeighbourhoodChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (marker.source == "User Submitted Data") {
        return this.state.accidentNeighbourhoodChoices.includes(marker.neighbourhood)
      } else {
        let neighbourhood = marker.neighbourhood.substring(0, (marker.neighbourhood.indexOf("(") - 1))
        return this.state.accidentNeighbourhoodChoices.includes(neighbourhood)
      }
    })
  }
  if (this.state.roadCondition && this.state.roadConditionChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.roadConditionChoices.includes(marker.roadConditions)) {
        return true
      }
    })
  }
  if (this.state.lightCondition && this.state.lightConditionChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.lightConditionChoices.includes(marker.light)) {
        return true
      }
    })
  }
  if (this.state.injury && this.state.injuryChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.injuryChoices.includes(marker.injuryType)) {
        return true
      }
    })
  }
  if (this.state.visibility && this.state.visibilityChoices.length > 0) {
    accidentMarkers = accidentMarkers.filter(marker => {
      if (this.state.visibilityChoices.includes(marker.visibility)) {
        return true
      }
    })
  }

  if (this.state.accidentSource && this.state.accidentSourceChoices.length > 0) {
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
    console.log('MapContainer rendered');
    const theftMarkers = this.createFilteredTheftMarkers();
    const accidentMarkers = this.createFilteredAccidentMarkers();

    return (
      <Container className="container-full">
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
          applyTheftFilters={this.applyTheftFilters}
          applyAccidentFilters={this.applyAccidentFilters}
          accidentMarkers={accidentMarkers}
          theftMarkers={theftMarkers}
        />
        
        <Graphs
          accidentMarkers={accidentMarkers}
          theftMarkers={theftMarkers}
          initialAccidentCount={this.state.initialAccidentCount}
          initialTheftCount={this.state.initialTheftCount}
          showAccidents={this.state.showAccidents}
          showThefts={this.state.showThefts}
        />
      </Container>
    );
  }
}