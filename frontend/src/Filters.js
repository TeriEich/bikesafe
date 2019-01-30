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