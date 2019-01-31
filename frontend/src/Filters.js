import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Toggle from 'react-toggle';

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.filters = this.filters.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      dropdownOpen: false
    };
  }

  filters() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (

      <div className="filter-bar">

      <label>
      <Toggle
        defaultChecked={this.props.showAccidents}
        onChange={this.props.toggleAccidentShow} />
       <span>Accidents</span>
      </label>

      <label>
      <Toggle
        defaultChecked={this.props.showThefts}
        onChange={this.props.toggleTheftShow} />
       <span>Thefts</span>
      </label>
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

    //     <div className="filter-by-source">
    //       <label className="source-types">Source of Report:</label>
    //       <br/>
    //       <input type="checkbox" id="filter-TPS" />
    //       <label htmlFor="filter-TPS">Toronto Police Reports</label>
    //       <br/>
    //       <input type="checkbox" id="filter-user" />
    //       <label htmlFor="filter-user">User Reported Incidents</label>
    //     </div>

    //     <div className="filter-by-datetime">
    //       <label htmlFor="filter-datetime">Select the date to filter by:</label>
    //       <br/>
    //       <input type="datetime-local" className="filter-datetime" />
    //     </div>

    //     <div className="filter-by-road-condition">
    //       <label className="condition-types">Road Surface Conditions(accident):</label>
    //       <br/>
    //       <input type="checkbox" id="filter-wet-road" />
    //       <label htmlFor="filter-wet-road">Wet Road Surface Conditions</label>
    //       <br/>
    //       <input type="checkbox" id="filter-dry-road" />
    //       <label htmlFor="filter-dry-road">Dry Road Surface Conditions</label>
    //     </div>

    //     <div className="filter-by-light-condition">
    //       <label className="condition-types">Light Conditions(accident):</label>
    //       <br/>
    //       <input type="checkbox" id="filter-dark-light" />
    //       <label htmlFor="filter-dark-light">Dark Conditions</label>
    //       <br/>
    //       <input type="checkbox" id="filter-day-light" />
    //       <label htmlFor="filter-day-light">Daylight</label>
    //     </div>
    //   </div>
    //   );
  }
}