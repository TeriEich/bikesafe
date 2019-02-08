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
      theftMarkers: []
    }
  }

  componentDidMount(){
      axios.get('http://localhost:3001/api')
      .then(response => {
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
          <LandingPage clickAnywhere={this.toggle} />
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
