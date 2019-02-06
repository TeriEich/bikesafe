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

const TYPES = [
"BMX",
"Electric",
"Folding",
"Mountain",
"Other",
"Racer",
"Recumbant",
"Regular",
"Scooter",
"Tandem",
"Touring",
"Tricycle",
"Unicycle",
"Type Unknown"
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
    defaultZoom={14}
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
    this.handleTheftValidation = this.handleTheftValidation.bind(this)
    this.handleAccidentValidation = this.handleAccidentValidation.bind(this)
		this.state = {
			isOpen: false,
			showingForm: null,
			theftForm: false,
			accidentForm: false,
			theftLocation: "",
			theftDate: "",
      theftBikeType: "",
			theftBikeMake: "",
			theftBikeModel: "",
			theftNeighbourhood: "",
			accidentLocation: "",
			accidentDate: "",
			accidentYear: "",
			accidentVisibility: "",
			accidentLight: "",
			accidentRoadConditions: "",
			accidentInjuryType: "",
			accidentNeighbourhood: "",
      errors: {}
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleClickedMap = (e, input) => {
    let latitude = e.latLng.lat()
    let longtitude  = e.latLng.lng()
    console.log(latitude, longtitude)
    this.setState({
    	[input]: {lng: longtitude, lat: latitude}
    })
    console.log('after map click', this.state)
	}

	handleSelect = (e, input) => {
 		console.log('before', this.state)
 		this.setState({
 			[input]: e.target.value
 		})
 		console.log('after', this.state)
 	}

  handleTheftValidation(event) {
    let errors = {};
    let formIsValid = true;

    // theftLocation
    if(!this.state.theftLocation || this.state.theftLocation === undefined) {
      formIsValid = false;
      errors["theftLocation"] = "You must choose a location on the map";
    }
    // theftDate
    if(!this.state.theftDate || this.state.theftDate === undefined) {
      formIsValid = false;
      errors["theftDate"] = "You must select a date";
    }
    // theftBikeType
    if(!this.state.theftBikeType || this.state.theftBikeType === undefined) {
      formIsValid = false;
      errors["theftBikeType"] = "You must select a bike type";
    }
    // theftNeighbourhood
    if(!this.state.theftNeighbourhood || this.state.theftNeighbourhood === undefined) {
      formIsValid = false;
      errors["theftNeighbourhood"] = "You must select a neighbourhood";
    }

    this.setState({errors : errors})
    return formIsValid
  }

  handleAccidentValidation(event) {
    let errors = {};
    let formIsValid = true;

    //accidentLocation
    if(!this.state.accidentLocation || this.state.accidentLocation === undefined) {
      formIsValid = false;
      errors["accidentLocation"] = "You must choose a location on the map";
    }
    // accidentDate
    if(!this.state.accidentDate || this.state.accidentDate === undefined) {
      formIsValid = false;
      errors["accidentDate"] = "You must select a date";
    }
    // accidentVisibility
    if(!this.state.accidentVisibility || this.state.accidentVisibility === undefined) {
      formIsValid = false;
      errors["accidentVisibility"] = "You must select a visibility type";
    }
    // accidentLight
    if(!this.state.accidentLight || this.state.accidentLight === undefined) {
      formIsValid = false;
      errors["accidentLight"] = "You must select the light conditions";
    }
    // accidentRoadConditions
    if(!this.state.accidentRoadConditions || this.state.accidentRoadConditions === undefined) {
      formIsValid = false;
      errors["accidentRoadConditions"] = "You must select the road conditions";
    }
    // accidentInjuryType
    if(!this.state.accidentInjuryType || this.state.accidentInjuryType === undefined) {
      formIsValid = false;
      errors["accidentInjuryType"] = "You must select an injuryType";
    }
    // accidentNeighbourhood
    if(!this.state.accidentNeighbourhood || this.state.accidentNeighbourhood === undefined) {
      formIsValid = false;
      errors["accidentNeighbourhood"] = "You must select a neighbourhood";
    }

    this.setState({errors : errors})
    return formIsValid
  }

	handleTheftSubmit = event => {
    event.preventDefault();
    if(this.handleTheftValidation()) {
      axios.post('http://localhost:3001/api/theft',
        {
        	location: this.state.theftLocation,
        	date: this.state.theftDate,
          bikeType: this.state.bikeType,
        	bikeMake: this.state.theftBikeMake,
        	bikeModel: this.state.theftBikeModel,
        	neighbourhood: this.state.theftNeighbourhood
      	}
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      this.setState({
        isOpen: false
      })
    }
  }

  handleAccidentSubmit = event => {
    event.preventDefault();
    if(this.handleAccidentValidation()) {
      axios.post('http://localhost:3001/api/accident',
        {
        	location: this.state.accidentLocation,
  				date: this.state.accidentDate,
  				visibility: this.state.accidentVisibility,
  				light: this.state.accidentLight,
  				roadConditions: this.state.accidentRoadConditions,
  				injuryType: this.state.accidentInjuryType,
  				neighbourhood: this.state.accidentNeighbourhood
  			 }
  		)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      this.setState({
        isOpen: false
      })
    }
  }

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="lg" fixed="top" id="mainNav">
					<NavbarBrand href="/">bikesafeTO</NavbarBrand>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Button outline color="warning" dark expand="lg" fixed="top" onClick={this.toggle}>Incident Submission</Button>
								<Modal isOpen={this.state.isOpen} toggle={this.toggle} className="filter-main-modal">
								<ModalHeader toggle={this.toggle}>Incident Submission Forms</ModalHeader>
									<ModalBody>
										<Button color="primary" onClick={() => this.setState({ 'showingForm': 'accidentForm' })}>Report a Bike Accident</Button>{' '}
										<Button color="primary" onClick={() => this.setState({'showingForm' : 'theftForm' })}>Report a Bike Theft</Button>


                    <Collapse className="accident-report-show" isOpen={this.state.showingForm === 'accidentForm'}>
											<Form onSubmit={this.handleAccidentSubmit}>
								        <FormGroup>
								          <Label for="accident-date">Date</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
								          <Input value={this.state.accidentDate} type="date" name="date" id="accident-date" onChange={(e) => this.handleSelect(e, 'accidentDate')} />
								          <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["accidentDate"]}</span>
                        </FormGroup>
								        <FormGroup>
								          <Label for="accident-neighbourhood">Neighbourhood</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
								          <Input type="select" value={this.state.accidentNeighbourhood} name="neighbourhood" id="accident-neighbourhood" onChange={(e) => this.handleSelect(e, 'accidentNeighbourhood')}>
								          	<option value="">Please select the neighbourhood</option>
								          	{NEIGHBORHOODS.map((n) => <option>{n}</option>)}
								          </Input>
                          <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["accidentNeighbourhood"]}</span>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-visibility">Visibility</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
								          <Input type="select" value={this.state.accidentVisibility} name="visibility" id="accident-visibility" onChange={(e) => this.handleSelect(e, 'accidentVisibility')}>
								            <option value="">Please select the visibility conditions</option>
								            <option>Clear</option>
								            <option>Rain</option>
								            <option>Other</option>
								          </Input>
                          <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["accidentVisibility"]}</span>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-light-conditions">Light Conditions</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
								          <Input type="select" value={this.state.accidentLight} name="light-conditions" id="accident-light-conditions" onChange={(e) => this.handleSelect(e, 'accidentLight')}>
								            <option value="">Please select the light conditions</option>
								            <option>Daylight</option>
								            <option>Daylight, Artificial</option>
								            <option>Dusk</option>
								            <option>Dark</option>
								            <option>Dark, Artifical</option>
								          </Input>
                          <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["accidentLight"]}</span>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-road-conditions">Road Conditions</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
								          <Input type="select" value={this.state.accidentRoadConditions} name="road-conditions" id="accident-road-conditions" onChange={(e) => this.handleSelect(e, 'accidentRoadConditions')}>
								          	<option value="">Please select the road conditions</option>
								            <option>Dry</option>
								            <option>Wet</option>
								          </Input>
                          <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["accidentRoadConditions"]}</span>
								        </FormGroup>
								        <FormGroup>
								          <Label for="accident-injury">Injury Type</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
								          <Input type="select" value={this.state.accidentInjuryType} name="injury" id="accident-injury" onChange={(e) => this.handleSelect(e, 'accidentInjuryType')}>
								       		<option value="">Please select the injury type</option>
								            <option>Minor</option>
								            <option>Major</option>
								            <option>Fatal</option>
								          </Input>
                          <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["accidentInjuryType"]}</span>
								        </FormGroup>
							          <FormGroup>
							          	<Label for="accident-coordinates">Location of Accident</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
							          	<div style={{ height: '100%' }}>
						                <Map
						                	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdWQfANSIQ7xbRwkusem55-p5ydGXyyw4"
					                    loadingElement={<div style={{ height: `100%` }} />}
					                    containerElement={<div style={{ height: `400px`, width: `475px` }} />}
					                    mapElement={<div style={{ height: `100%` }} />}
					                    onSubmit={(e) => this.handleClickedMap(e, 'accidentLocation')}
						                />
							            </div>
                          <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["accidentLocation"]}</span>
							          </FormGroup>
								        <Button type="submit" onClick={this.handleAccidentSubmit}>Submit</Button>
								      </Form>
										</Collapse>



										<Collapse className="theft-report-show" isOpen={this.state.showingForm === 'theftForm'}>
											<Form onSubmit={this.handleTheftSubmit} >
								        <FormGroup>
								          <Label for="theft-date">Date</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
								          <Input type="date" value={this.state.theftDate} name="date" id="theft-date" onChange={(e) => this.handleSelect(e, 'theftDate')}/>
								          <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["theftDate"]}</span>
                        </FormGroup>
								        <FormGroup>
								          <Label for="theft-neighbourhood">Neighbourhood</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
								          <Input type="select" value={this.state.theftNeighbourhood} name="neighbourhood" id="theft-neighbourhood" onChange={(e) => this.handleSelect(e, 'theftNeighbourhood')}>
								          	<option value="">Please select the neighbourhood</option>
								          	{NEIGHBORHOODS.map((n) => <option>{n}</option>)}
								           </Input>
                           <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["theftNeighbourhood"]}</span>
								        </FormGroup>
                        <FormGroup>
                        <Label for="theft-bike-types">Bike Type</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
                          <Input type="select" value={this.state.theftBikeType} name="bike-type" id="theft-bike-type" onChange={(e) => this.handleSelect(e, 'theftBikeType')}>
                            <option value="">Please select the bike type</option>
                            {TYPES.map((n) => <option>{n}</option>)}
                           </Input>
                           <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["theftBikeType"]}</span>
                        </FormGroup>
								        <FormGroup>
								          <Label for="theft-bike-make">Bike Make</Label>
								          <Input type="textarea" value={this.state.theftBikeMake} name="bikeMake" id="theft-bike-make" onChange={(e) => this.handleSelect(e, 'theftBikeMake')} placeholder="Please input your bike make">
								            <FormText color="muted"></FormText>
								          </Input>
								        </FormGroup>
								        <FormGroup>
								          <Label for="theft-bike-model">Bike Model</Label>
								          <Input type="textarea" value={this.state.theftBikeModel} name="bikeModel" id="theft-bike-model" onChange={(e) => this.handleSelect(e, 'theftBikeModel')} placeholder="Please input your bike model">
								            <FormText color="muted"></FormText>
								          </Input>
								        </FormGroup>
								        <FormGroup>
								        	<Label for="theft-coordinates" name="coordinates">Location of Theft</Label><span style={{ color: 'red', fontSize: '11px', fontStyle: 'italic'}}> *field required</span>
								          	<div style={{ height: '100%' }}>
							                <Map
							                	googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAdWQfANSIQ7xbRwkusem55-p5ydGXyyw4"
						                    loadingElement={<div style={{ height: `100%` }} />}
						                    containerElement={<div style={{ height: `400px`, width: `475px` }} />}
						                    mapElement={<div style={{ height: `100%` }} />}
						                    onSubmit={(e) => this.handleClickedMap(e, 'theftLocation')}
							                />
								            </div>
                            <span className="error" style={{ color: 'red', fontSize: '13px', fontWeight: 'bold'}}>{this.state.errors["theftLocation"]}</span>
								        </FormGroup>
								        <Button type="submit" onClick={this.handleTheftSubmit}>Submit</Button>
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
