import React, { Component } from 'react';
import TheftMarkers from './TheftMarkers';
import AccidentMarkers from './AccidentMarkers';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { Row, Col } from 'reactstrap';


class MainMap extends Component {


  createAccidentMarkers() {
    const showAccidents = this.props.showAccidents
    let markers

    if (showAccidents) {
      markers = this.props.accidentMarkers.map(marker => {
        return <AccidentMarkers
                  key={marker._id}
                  date={marker.date}
                  lat={marker.location.coordinates[1]}
                  lng={marker.location.coordinates[0]}
                  injuryType={marker.injuryType}
                  neighbourhood={marker.neighbourhood}
                  roadConditions={marker.roadConditions}
                  visibility={marker.visibility}
                  street1={marker.street1}
                  street2={marker.street2}
                  source={marker.source}
                  light={marker.light}
                />
      });
    }

    return markers
  }

  createTheftMarkers() {
    const showThefts = this.props.showThefts
    let markers

    if (showThefts) {
      markers = this.props.theftMarkers.map(marker => {
        return <TheftMarkers
                  key={marker._id}
                  occurrenceDay={marker.occurrenceDay}
                  occurrenceMonth={marker.occurrenceMonth}
                  occurrenceYear={marker.occurrenceYear}
                  lat={marker.location.coordinates[1]}
                  lng={marker.location.coordinates[0]}
                  neighbourhood={marker.neighbourhood}
                  bikeType={marker.bikeType}
                  bikeMake={marker.bikeMake}
                  bikeModel={marker.bikeModel}
                  source={marker.source}
                />
      });
    }

    return markers
  }

  render() {


    return (
      // GoogleMap must have perameters defaultZoom + defaultCenter
      <Row>
      <Col><GoogleMap
        defaultZoom={14}
        defaultCenter={this.props.center}>
        {this.createAccidentMarkers()}
        {this.createTheftMarkers()}
      </GoogleMap>
      </Col>
      </Row>

    )
  }
}

export default withGoogleMap(MainMap)
