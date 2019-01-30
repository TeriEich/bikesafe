import Filters from './Filters.js'
import MainMap from './Map'
import Graphs  from './Graphs'

class MapGraphAction extends Component {
  // contains functionality of map, filters, and graphs
  // working together.
  // e.g. MessageList from Chatty-App
  render() {
    return (
      <div className="map-container">
        <MainMap
          accidentMarkers={this.props.accidentMarkers}
          theftMarkers={this.props.theftMarkers}
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