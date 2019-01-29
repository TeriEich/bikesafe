import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';
import MainMap from './Map'

class App extends Component {

  constructor() {
    super();
    this.state = {
      markers:    [
        {
            "id": 1,
            "name": "Eaton Centre",
            "latitude": "43.6544",
            "longitude": "-79.3807"
        },
        {
            "id": 2,
            "name": "City Hall",
            "latitude": "43.6534",
            "longitude": "-79.3841"
        },
        {
            "id": 3,
            "name": "Trinity Bellwoods Park",
            "latitude": "43.6500",
            "longitude": "-79.4169"
        }
      ]
    }
  }

  render() {
  return (
    <div className="main-container">
      <NavBar />
      <LandingPage />
      <MapGraphAction markers={this.state.markers} />
      <footer className="footer">
        footer placeholder
      </footer>
    </div>
  );
  }
}



class LandingPage extends Component {

  render() {
    return (
      <div className="landing-media">
        <button className="show-map-btn" type="button">
          Go to map
        </button>
        <video className="video" playsInline autoPlay loop>
          <source className="video" src={require("./media/bikesafeto.webm")} type="video/webm" />
          <source className="video" src={require("./media/bikesafeto.mp4")} type="video/mp4" />
          <source src="./media/landing-page-video-substitute.png" type="img/png" />
        </video>
      </div>
      );
  }
}

class MapGraphAction extends Component {
  // contains functionality of map, filters, and graphs
  // working together.
  // e.g. MessageList from Chatty-App
  render() {
    return (
      <div className="map-container">
        <MainMap 
          markers = {this.props.markers}
          center={{lat: 43.6532, lng: -79.3832}}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <Filters />
        <Graphs />
      </div>
      );
  }
}


class Filters extends Component {
  render() {
    return (
      <div className="filter-bar">
        <div className="filter-by-type">
          <label className="incident-type">Incident Type</label>
          <br/>
          <input type="checkbox" id="filter-theft" />
          <label htmlFor="filter-theft">Theft</label>
          <br/>
          <input type="checkbox" id="filter-accident" />
          <label htmlFor="filter-accident">Accident</label>
          <br/>
          <input type="checkbox" id="filter-type-all" />
          <label htmlFor="filter-type-all">All Incident Types</label>
        </div>

        <div className="filter-by-source">
          <label className="source-types">Source of Report:</label>
          <br/>
          <input type="checkbox" id="filter-TPS" />
          <label htmlFor="filter-TPS">Toronto Police Reports</label>
          <br/>
          <input type="checkbox" id="filter-user" />
          <label htmlFor="filter-user">User Reported Incidents</label>
          <br/>
          <input type="checkbox" id="filter-sources-all" />
          <label htmlFor="filter-sources-all">All Reports</label>
        </div>

        <div className="filter-by-datetime">
          <label htmlFor="filter-datetime">Select the date to filter by:</label>
          <br/>
          <input type="datetime-local" className="filter-datetime" />
        </div>

        <div className="filter-by-road-condition">
          <label className="condition-types">Road Surface Conditions(accident):</label>
          <br/>
          <input type="checkbox" id="filter-wet-road" />
          <label htmlFor="filter-wet-road">Wet Road Surface Conditions</label>
          <br/>
          <input type="checkbox" id="filter-dry-road" />
          <label htmlFor="filter-dry-road">Dry Road Surface Conditions</label>
          <br/>
          <input type="checkbox" id="filter-road-conditions-all" />
          <label htmlFor="filter-road-conditions-all">All Road Conditions</label>
        </div>

        <div className="filter-by-light-condition">
          <label className="condition-types">Light Conditions(accident):</label>
          <br/>
          <input type="checkbox" id="filter-dark-light" />
          <label htmlFor="filter-dark-light">Dark Conditions</label>
          <br/>
          <input type="checkbox" id="filter-day-light" />
          <label htmlFor="filter-day-light">Daylight</label>
          <br/>
          <input type="checkbox" id="filter-light-conditions-all" />
          <label htmlFor="filter-light-conditions-all">All Light Conditions</label>
        </div>
      </div>
      );
  }
}

class Graphs extends Component {
  render() {
    return (
      <div className="container-graphs">
        <img className="graph" id="graph-1" src={require("./media/fake-graph.png")} alt="graph" />
        <img className="graph" id="graph-2" src={require("./media/fake-graph.png")} alt="graph" />
        <img className="graph" id="graph-3" src={require("./media/fake-graph.png")} alt="graph" />
        <img className="graph" id="graph-4" src={require("./media/fake-graph.png")} alt="graph" />
      </div>
      );
  }
}


export default App;
