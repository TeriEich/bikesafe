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
import axios from 'axios';

// compose(fn, fn, fn)(pureComponent) => <Map prop/> prop => pureComponent
// (props) => <jsx>

const NEIGHBORHOODS = [
'Agincourt South-Malvern West',
'Alderwood',
'Annex',
'Banbury-Don Mills',
'Bathurst Manor',
'Bay Street Corridor',
'Bayview Village',
'Bayview Woods-Steeles',
'Bedford Park-Nortown',
'Beechborough-Greenbrook',
'Bendale',
'Birchcliffe-Cliffside',
'Black Creek',
'Blake-Jones',
'Briar Hill-Belgravia',
'Bridle Path-Sunnybrook-York Mills',
'Broadview North',
'Brookhaven-Amesbury',
'Cabbagetown-South St.James Town',
'Caledonia-Fairbank',
'Casa Loma',
'Centennial Scarborough',
'Church-Yonge Corridor',
'Clairlea-Birchmount',
'Clanton Park',
'Cliffcrest',
'Corso Italia-Davenport',
'Danforth',
'Danforth East York',
'Don Valley Village',
'Dorset Park',
'Dovercourt-Wallace Emerson-Junction',
'Downsview-Roding-CFB',
'Dufferin Grove',
'East End-Danforth',
'Edenbridge-Humber Valley',
'Eglinton East',
'Elms-Old Rexdale',
'Englemount-Lawrence',
'Eringate-Centennial-West Deane',
'Etobicoke West Mall',
'Flemingdon Park',
'Forest Hill North',
'Glenfield-Jane Heights',
'Greenwood-Coxwell',
'Guildwood',
'Henry Farm',
'High Park North',
'High Park-Swansea',
'Highland Creek',
'Hillcrest Village',
'Humber Heights-Westmount',
'Humber Summit',
'Humbermede',
'Humewood-Cedarvale',
'Ionview',
'Islington-City Centre West',
'Junction Area',
'Keelesdale-Eglinton West',
'Kennedy Park',
'Kensington-Chinatown',
'Kingsview Village-The Westway',
'Kingsway South',
'L’Amoreaux',
'Lambton Baby Point',
'Lansing-Westgate',
'Lawrence Park North',
'Leaside-Bennington',
'Little Portugal',
'Long Branch',
'Malvern',
'Maple Leaf',
'Markland Wood',
'Milliken',
'Mimnico',
'Morningside',
'Moss Park',
'Mount Dennis',
'Mount Olive-Silverstone-Jamestown',
'Mount Pleasant East',
'Mount Pleasant West',
'New Toronto',
'Newtonbrook East',
'Newtonbrook West',
'Niagara',
'North Riverdale',
'North St.James Town',
'O’Connor-Parkview',
'Oakridge',
'Oakwood Village',
'Old East York',
'Parkwoods-Donalda',
'Palmerston-Little Italy',
'Pelmo Park-Humberlea',
'Playter Estates-Danforth',
'Pleasant View',
'Princess-Rosethorn',
'Regent Park',
'Rexdale-Kipling',
'Rockcliffe-Smythe',
'Roncesvalles',
'Rosedale-Moore Park',
'Rouge',
'Runnymede-Bloor West Village',
'Rustic',
'Scarborough Village',
'South Parkdale',
'South Riverdale',
'St.Andrew-Windfields',
'Steeles',
'Stonegate-Queensway',
'Tam O’Shanter-Sullivan',
'Taylor-Massey',
'The Beaches',
'Thistletown-Beaumond Heights',
'Thorncliffe Park',
'Trinity-Bellwoods',
'University',
'Victoria Village',
'Waterfront Communities-The Island',
'West Hill',
'West Humber-Clairville',
'Weston',
'Weston-Pellam Park',
'Wexford/Maryvale',
'Willowdale East',
'Willowdale West',
'Willowridge-Martingrove-Richview',
'Woburn',
'Woodbine Corridor',
'Woodbine-Lumsden',
'Wychwood',
'Yonge-Eglinton',
'Yonge-St.Clair',
'York University Heights',
'Yorkdale-Glen Park'
]

const Map = compose(
    withStateHandlers(() => ({
	      isMarkerShown: false,
	      markerPosition: null
	    }),
    	{
        onMapClick: ({ isMarkerShown }) => (e) => ({
          markerPosition: e.latLng,
          isMarkerShown:true
        })
    	}
    ),
    withScriptjs,
    withGoogleMap
)(props => {
	function handleClick(e) {
		props.onSubmit(e);
		props.onMapClick(e)
	}

	return <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 43.653226, lng: -79.3831843 }}
    onClick={handleClick}
  >
  	{props.isMarkerShown && <Marker position={props.markerPosition} />}
  </GoogleMap>
})

export default class NavBar extends React.Component {

	constructor() {
		super()
		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false,
			showingForm: null,
			theftForm: false,
			accidentForm: false,
			theftInput: {
				id: null,
				location: {
					type: { type: "point" },
					coordinates: {lng: null, lat: null}
				},
				occurrenceYear: null,
				occurrenceMonth: null,
				occurrenceDay: null,
				occurrenceTime: null,
				bikeMake: null,
				bikeModel: null,
				neighbourhood: null,
				source: "User Submitted Data"
			},
			accidentInput: {
				id: null,
				location: {
					type: { type: "point" },
					coordinates: {lng: null, lat: null}
				},
				date: null,
				year: null,
				time: null,
				hour: null,
				street1: null,
				street2: null,
				visibility: null,
				light: null,
				roadConditions: null,
				injuryType: null,
				neighbourhood: null,
				source: "User Submitted Data"
			}
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleClickedMap = (e) => {
    let latitude = e.latLng.lat()
    let longtitude  = e.latLng.lat()
    console.log(latitude, longtitude)
    this.setState({ theftInput: {location: {coordinates: {lng: longtitude, lat: latitude} }}})
		console.log(this.state.theftInput);
	}

	handleTheftInputId = event => {this.setState({ theftInput: { id: event.target.value }})}
	// handleTheftInputLocation = event => {this.setState({ theftInput: location: {coordinates: [lng: ???, lat: ???] }})}
	handleTheftInputYear = event => {this.setState({ theftInput: { occurrenceYear: event.target.value }})}
	handleTheftInputMonth = event => {this.setState({ theftInput: { occurrenceMonth: event.target.value }})}
	handleTheftInputDay = event => {this.setState({ theftInput: { occurrenceDay: event.target.value }})}
	handleTheftInputTime = event => {this.setState({ theftInput: { occurrenceTime: event.target.value }})}
	handleTheftInputBikeMake = event => {this.setState({ theftInput: { bikeMake: event.target.value }})}
	handleTheftInputBikeModel = event => {this.setState({ theftInput: { bikeModel: event.target.value }})}
	handleTheftInputNeighbourhood = event => {this.setState({ theftInput: { neighbourhood: event.target.value }})}
	handleTheftInputSource = event => {this.setState({ theftInput: { source: event.target.value }})}

	// handleAccidentInputId = event => {this.accidentInput.setState({ id: event.target.value })}
	// handleAccidentInputLocation = event => {this.accidentInput.location.setState({ coordinates: [lng: ???, lat: ???] })}
	// handleAccidentInputDate = event => {this.accidentInput.setState({ date: event.target.value })}
	// handleAccidentInputYear = event => {this.accidentInput.setState({ year: event.target.value })}
	// handleAccidentInputTime = event => {this.accidentInput.setState({ time: event.target.value })}
	// handleAccidentInputHour = event => {this.accidentInput.setState({ hour: event.target.value })}
	// handleAccidentInputStreet1 = event => {this.accidentInput.setState({ street1: event.target.value })}
	// handleAccidentInputStreet2 = event => {this.accidentInput.setState({ street2: event.target.value })}
	// handleAccidentInputVisibility = event => {this.accidentInput.setState({ visibility: event.target.value })}
	// handleAccidentInputLight = event => {this.accidentInput.setState({ light: event.target.value })}
	// handleAccidentInputRoadConditions = event => {this.accidentInput.setState({ roadConditions: event.target.value })}
	// handleAccidentInputInjuryType = event => {this.accidentInput.setState({ injuryType: event.target.value })}
	// handleAccidentInputNeighbourhood = event => {this.accidentInput.setState({ neighbourhood: event.target.value })}
	// handleAccidentInputSource = event => {this.accidentInput.setState({ source: event.target.value })}




	// handleTheftSubmit = event => {
 //    event.preventDefault();

 //    axios.post('http://localhost:3001/api',
 //      { id: this.state.theftInput.id,
 //      	location: {
	// 				type: { type: "point" },
	// 				coordinates: [this.state.theftInput.???]
	// 			},
 //      	occurrenceYear: this.state.theftInput.occurrenceYear,
	// 			occurrenceMonth: this.state.theftInput.occurrenceMonth,
	// 			occurrenceDay: this.state.theftInput.occurrenceDay,
	// 			occurrenceTime: this.state.theftInput.occurrenceTime,
	// 			bikeMake: this.state.theftInput.bikeMake,
	// 			bikeModel: this.state.theftInput.bikeModel,
	// 			neighbourhood: this.state.theftInput.neighbourhood,
	// 			source: "User Submitted Data"
	// 		  },
	// 		)
 //      .then(res => {
 //        console.log(res);
 //        console.log(res.data);
 //      })
 //  }

 //  handleAccidentSubmit = event => {
 //    event.preventDefault();

 //    axios.post('http://localhost:3001/api',
 //      { id: this.state.theftInput.id,
 //      	location: {
	// 				type: { type: "point" },
	// 				coordinates: [this.state.theftInput.???]
	// 			},
 //      	date: this.state.accidentInput.date,
	// 			year: this.state.accidentInput.year,
	// 			time: this.state.accidentInput.time,
	// 			hour: this.state.accidentInput.hour,
	// 			street1: this.state.accidentInput.street1,
	// 			street2: this.state.accidentInput.street2,
	// 			visibility: this.state.accidentInput.visibility,
	// 			light: this.state.accidentInput.light,
	// 			roadConditions: this.state.accidentInput.roadConditions,
	// 			injuryType: this.state.accidentInput.injuryType,
	// 			neighbourhood: this.state.accidentInput.neighbourhood,
	// 			source: "User Submitted Data"
	// 		  },
	// 		)
 //      .then(res => {
 //        console.log(res);
 //        console.log(res.data);
 //      })
 //  }

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="lg" fixed="top" id="mainNav">
					<NavbarBrand href="/">bikesafeTO</NavbarBrand>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Button color="danger" onClick={this.toggle}>Incident Submission</Button>
								<Modal isOpen={this.state.isOpen} toggle={this.toggle} className="filter-main-modal">
								<ModalHeader toggle={this.toggle}>Incident Submission Forms</ModalHeader>
									<ModalBody>
										<Button color="primary" onClick={() => this.setState({ 'showingForm': 'accidentForm' })}>Report a Bike Accident</Button>{' '}
										<Button color="primary" onClick={() => this.setState({'showingForm' : 'theftForm' })}>Report a Bike Theft</Button>
										<Collapse className="accident-report-show" isOpen={this.state.showingForm === 'accidentForm'}>
											<Form onSubmit={this.handleAccidentSubmit}>
								        <FormGroup>
								          <Label for="accident-date">Date</Label>
								          <Input type="date" name="date" id="accident-date" />
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-neighbourhood">Neighbourhood</Label>
								          <Input type="select" name="neighbourhood" id="accident-neighbourhood">
								          	{NEIGHBORHOODS.map((n) => <option>{n}</option>)}
								          </Input>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-visibility">Visibility</Label>
								          <Input type="select" name="visibility" id="accident-visibility">
								            <option>Clear</option>
								            <option>Rain</option>
								            <option>Other</option>
								          </Input>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-light-conditions">Light Conditions</Label>
								          <Input type="select" name="light-conditions" id="accident-light-conditions">
								            <option>Daylight</option>
								            <option>Daylight, Artificial</option>
								            <option>Dusk</option>
								            <option>Dark</option>
								            <option>Dark, Artifical</option>
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
								            <option>Minor</option>
								            <option>Major</option>
								            <option>Fatal</option>
								          </Input>
								        </FormGroup>
							          <FormGroup>
							          	<Label for="accident-coordinates">Location of Accident</Label>
							          	<div style={{ height: '100%' }}>
						                <Map
						                	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9OTpk-gYg9nuQ7R5vsWPpmr7U7pQq6Ow"
					                    loadingElement={<div style={{ height: `100%` }} />}
					                    containerElement={<div style={{ height: `400px`, width: `475px` }} />}
					                    mapElement={<div style={{ height: `100%` }} />}
					                    onSubmit={this.handleClickedMap}
						                />
							            </div>
							          </FormGroup>
								        <Button type="submit">Submit</Button>
								      </Form>
										</Collapse>
										<Collapse className="theft-report-show" isOpen={this.state.showingForm === 'theftForm'}>
											<Form onSubmit={this.handleTheftSubmit} >
								        <FormGroup>
								          <Label for="theft-date">Date</Label>
								          <Input type="date" name="this.state.theftInput.date" id="theft-date" />
								        </FormGroup>
								        <FormGroup>
								          <Label for="theft-neighbourhood">Neighbourhood</Label>
								          <Input type="select" name="neighbourhood" id="theft-neighbourhood">
								          	{NEIGHBORHOODS.map((n) => <option>{n}</option>)}
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
						                    containerElement={<div style={{ height: `400px`, width: `475px` }} />}
						                    mapElement={<div style={{ height: `100%` }} />}
						                    onSubmit={this.handleClickedMap}
							                />
								            </div>
								        </FormGroup>
								        <Button type="submit">Submit</Button>
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