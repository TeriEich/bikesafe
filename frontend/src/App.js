import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import MapContainer from './MapContainer';
import axios from 'axios'
import { Nav, NavLink } from 'reactstrap';


class App extends Component {

  constructor() {
    super();
    this.state = {
      showMap: false,
      accidentMarkers: [],
      theftMarkers: [],
      oldMarkers:    [
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

  componentDidMount(){
      axios.get('http://localhost:3001/api')
      .then(response => {
        console.log('accident data', response.data.accidentData)
        console.log('theft data', response.data.theftData)
        this.setState({ accidentMarkers: response.data.accidentData });
        this.setState({ theftMarkers: response.data.theftData });
      })
      .catch(function (error) {
        console.log(error);
      })
    }


    toggle = () => {
      this.setState({
        showMap: true
      })
    }

  render() {
    return (
      <div className="main-container">
        <NavBar accidentMarkers={this.state.accidentMarkers} theftMarkers={this.state.theftMarkers} />
        {this.state.showMap ? (
          <MapContainer accidentMarkers={this.state.accidentMarkers} theftMarkers={this.state.theftMarkers}/>
        ) : (
          <LandingPage toggle={this.toggle} />
        )}
        <footer>
          <Nav>
            <NavLink className="footer-text" id="footer-1" href="#">Contact</NavLink> <NavLink className="footer-text" id="footer-2" href="#">Privacy</NavLink>
          </Nav>
        </footer>
      </div>
    );
  }
}

export default App;
