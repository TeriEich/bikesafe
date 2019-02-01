import React from 'react';
import { Navbar,
				 NavbarBrand,
				 NavbarToggler,
				 Collapse,
				 Nav,
				 NavItem,
				 NavLink,
				 Button,
				 Modal,
				 ModalHeader,
				 ModalBody,
				 Form,
				 FormGroup,
				 Input,
				 Label,
				 FormText,
				 InputText
			 } from 'reactstrap'
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { compose, withStateHandlers } from "recompose";

const Map = compose(
    withStateHandlers(() => ({
        isMarkerShown: false,
        markerPosition: null
      }), {
        onMapClick: ({ isMarkerShown }) => (e) => ({
            markerPosition: e.latLng,
            isMarkerShown:true
        })
      }),
    withScriptjs,
    withGoogleMap
)
    (props =>
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 43.653226, lng: -79.3831843 }}
            onClick={props.onMapClick}
        >
            {props.isMarkerShown && <Marker position={props.markerPosition} />}

        </GoogleMap>
    )

export default class NavBar extends React.Component {

	constructor() {
		super()
		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false,
			theftForm: false,
			accidentForm: false
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	toggleForm = (target) => this.setState({ [target]: !this.state[target] });

	// {this.props.accidentMarkers}
	// {this.props.theftMarkers}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="lg" fixed="top" id="mainNav">
					<NavbarBrand href="/">bikesafeTO</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Button color="danger" onClick={this.toggle}>Incident Submission</Button>
								<Modal isOpen={this.state.isOpen} toggle={this.toggle} className="filter-main-modal">
								<ModalHeader toggle={this.toggle}>Incident Submission Forms</ModalHeader>
									<ModalBody>
										<Button color="primary" onClick={() => this.toggleForm('accidentForm')}>Report a Bike Accident</Button>{' '}
										<Button color="primary" onClick={() => this.toggleForm('theftForm')}>Report a Bike Theft</Button>

										<Collapse className="accident-report-show" isOpen={this.state.accidentForm}>
											<Form>
								        <FormGroup>
								          <Label for="accident-date">Date</Label>
								          <Input type="date" name="date" id="accident-date" />
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-neighbourhood">Neighbourhood</Label>
								          <Input type="select" name="neighbourhood" id="accident-neighbourhood">
								          	<option>Agincourt South-Malvern West</option>
								            <option>Annex</option>
								            <option>Bay Street Corridor</option>
								            <option>Bayview Village</option>
								            <option>Bayview Woods-Steeles</option>
								            <option>Blake-Jones</option>
								            <option>Casa Loma</option>
								            <option>Dorset Park</option>
								            <option>Downsview-Roding-CFB</option>
												    <option>Dufferin</option>
												    <option>High Park-Swansea</option>
												    <option>Islington-City Centre West</option>
												    <option>Kensington-Chinatown</option>
												    <option>Little Portugal</option>
												    <option>Moss Park</option>
												    <option>Mount Pleasant East</option>
												    <option>New Toronto</option>
												    <option>Old East York</option>
												    <option>Palmerston-Little Italy</option>
												    <option>Regent Park</option>
												    <option>South Riverdale</option>
												    <option>Steeles</option>
												    <option>The Beaches</option>
												    <option>Trinity-Bellwoods</option>
												    <option>University</option>
												    <option>Waterfront Communities-The Island</option>
												    <option>West Humber-Clairville</option>
												    <option>Woodbine Corridor</option>
												    <option>Wychwood" </option>
								           </Input>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-visibility">Visibility</Label>
								          <Input type="select" name="visibility" id="accident-visibility">
								            <option>Clear</option>
								            <option></option>
								            <option></option>
								          </Input>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-light-conditions">Light Conditions</Label>
								          <Input type="select" name="light-conditions" id="accident-light-conditions">
								            <option>Light</option>
								            <option>Dark</option>
								          </Input>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-road-conditions">Road Conditions</Label>
								          <Input type="select" name="road-conditions" id="accident-road-conditions">
								            <option>Dry</option>
								            <option>Wet</option>
								          </Input>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-injury">Injury Type</Label>
								          <Input type="select" name="injury" id="accident-injury">
								            <option>Fatal</option>
								            <option>Major</option>
								            <option>Minor</option>
								          </Input>
								        </FormGroup>
								          <FormGroup>
								          	<Label for="accident-coordinates">Location of Accident</Label>
								          	<div style={{ height: '100%' }}>
								                <Map
								                	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9OTpk-gYg9nuQ7R5vsWPpmr7U7pQq6Ow"
							                    loadingElement={<div style={{ height: `100%` }} />}
							                    containerElement={<div style={{ height: `200px` }} />}
							                    mapElement={<div style={{ height: `100%` }} />}
								                />
								            </div>
								          </FormGroup>
								        <Button>Submit</Button>
								      </Form>
										</Collapse>

										<Collapse className="theft-report-show" isOpen={this.state.theftForm}>
											<Form>
								        <FormGroup>
								          <Label for="theft-date">Date</Label>
								          <Input type="date" name="date" id="theft-date" />
								        </FormGroup>
								        <FormGroup>
								          <Label for="theft-neighbourhood">Neighbourhood</Label>
								          <Input type="select" name="neighbourhood" id="theft-neighbourhood">
								          	<option>Agincourt South-Malvern West</option>
								            <option>Annex</option>
								            <option>Bay Street Corridor</option>
								            <option>Bayview Village</option>
								            <option>Bayview Woods-Steeles</option>
								            <option>Blake-Jones</option>
								            <option>Casa Loma</option>
								            <option>Dorset Park</option>
								            <option>Downsview-Roding-CFB</option>
												    <option>Dufferin</option>
												    <option>High Park-Swansea</option>
												    <option>Islington-City Centre West</option>
												    <option>Kensington-Chinatown</option>
												    <option>Little Portugal</option>
												    <option>Moss Park</option>
												    <option>Mount Pleasant East</option>
												    <option>New Toronto</option>
												    <option>Old East York</option>
												    <option>Palmerston-Little Italy</option>
												    <option>Regent Park</option>
												    <option>South Riverdale</option>
												    <option>Steeles</option>
												    <option>The Beaches</option>
												    <option>Trinity-Bellwoods</option>
												    <option>University</option>
												    <option>Waterfront Communities-The Island</option>
												    <option>West Humber-Clairville</option>
												    <option>Woodbine Corridor</option>
												    <option>Wychwood" </option>
								           </Input>
								        </FormGroup>
								        <FormGroup>
								          <Label for="theft-bike-make">Bike Make</Label>
								          <Input type="textarea" name="bike-make" id="theft-bike-make">
								            <FormText color="muted"></FormText>
								          </Input>
								        </FormGroup>
								        <FormGroup>
								          <Label for="theft-bike-model">Bike Model</Label>
								          <Input type="textarea" name="bike-model" id="theft-bike-model">
								            <FormText color="muted"></FormText>
								          </Input>
								        </FormGroup>
								        <FormGroup>
								        	<Label for="theft-coordinates">Location of Theft</Label>
								          	<div style={{ height: '100%' }}>
								                <Map
								                	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9OTpk-gYg9nuQ7R5vsWPpmr7U7pQq6Ow"
							                    loadingElement={<div style={{ height: `100%` }} />}
							                    containerElement={<div style={{ height: `200px` }} />}
							                    mapElement={<div style={{ height: `100%` }} />}
								                />
								            </div>
								        </FormGroup>
								        <Button>Submit</Button>
								      </Form>
										</Collapse>

									</ModalBody>
								</Modal>
							</NavItem>
						</Nav>
				</Navbar>
			</div>
		)
	}

}










// constructor(props) {
//     super(props);
//     this.state = {
//       isHidden: true
//     };
//   }

//   _openForm = () => this.setState({ isHidden: !this.state.isHidden });

//   render() {
//     return (
//       <nav className="nav-bar">
//         <h2 className="nav-brand">bikesafeTO</h2>
//         <button className="report-form-btn" type="button" onClick={() => this._openForm()}>
//           Submit a Report
//         </button>
//         { !this.state.isHidden &&
//         <div id="report-form" placement="right" container={this}>
//           <form>
//             <div className="container-incident-type">
//               <p>Are you reporting a theft or an accident?</p>
//               <br/>
//               <input type="radio" id="radio-theft" name="radioGroup" inline="true" />
//               <label htmlFor="radio-theft">Theft</label>
//               {' '}
//               <input type="radio" id="radio-accident" name="radioGroup" inline="true" />
//               <label htmlFor="radio-accident">Traffic Accident</label>
//               {' '}
//             </div>
//             <div id="form-date-time">
//               <label htmlFor="form-date-time">Select the date and approximate time of the incident</label>
//               <br/>
//               <input type="datetime-local" name="incident-datetime" />
//             </div>
//             <div className="form-submit">
//               <button type="submit">Submit Report</button>
//               <p>The submission of this form *DOES NOT* send any information to the Toronto Police.</p>
//               <p>To file an official police report, please contact your local precinct for assistance.</p>
//             </div>
//           </form>
//         </div> }
//       </nav>
//       );

//   }
// }