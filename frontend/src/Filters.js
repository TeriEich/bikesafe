import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, CustomInput } from 'reactstrap';
import AccidentNeighbourhoods from './AccidentNeighbourhoods';
import TheftNeighbourhoods from './TheftNeighbourhoods';

const coralSquare = require ("./media/coral-square.svg");
const blueDot = require ("./media/blue-dot.svg");

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      dropdownOpen: false,
      accidentFilterShow: false,
      theftFilterShow: false,
      accidentYear: false,
      accidentYearChoices: [],
      accidentSource: false,
      accidentSourceChoices: [],
      accidentNeighbourhood: false,
      accidentNeighbourhoodChoices: [],
      visibility: false,
      visibilityChoices: [],
      roadCondition: false,
      roadConditionChoices: [],
      lightCondition: false,
      lightConditionChoices: [],
      injury: false,
      injuryChoices: [],
      theftYear: false,
      theftYearChoices: [],
      theftSource: false,
      theftSourceChoices: [],
      theftBikeType: false,
      theftBikeTypeChoices: [],
      theftNeighbourhood: false,
      theftNeighbourhoodChoices: []
    };
  }

  toggleAllTheThings = (filter) => this.setState({ [filter]: !this.state[filter] });

  toggleFilterCategory = (filter) => {
    this.setState({ [filter]: !this.state[filter] });
    const concatFilterChoice = filter + 'Choices';
    this.setState({ [concatFilterChoice]: [] });
  }

  toggleFilter = (event, filter, label) => {
    if (event.target.checked) {
      this.setState({
        [filter]: [...this.state[filter], label]
      })
    } else {
      this.setState({
        [filter]: this.state[filter].filter(element => {
          return element !== label
        })
      })
    }
  }


  render() {

    return (

      <div className="filters">
        <div className="filter-bar">
          <div className="filter-bar-key">
            <h3><img src={coralSquare} /> Accidents</h3>
            <h3><img src={blueDot} /> Thefts</h3>
          </div>
          <div className="filter-bar-accident">
            <CustomInput type="switch" id="accident-filter" label="Accident Data" onChange={this.props.toggleAccidentShow} defaultChecked={this.props.showAccidents} />
            <Button outline color="warning" onClick={() => this.toggleAllTheThings('accidentFilterShow')}>Set Accident Filters</Button>
          </div>
          <div className="filter-bar-theft">
            <CustomInput type="switch" id="theft-filter" label="Theft Data" onChange={this.props.toggleTheftShow} defaultChecked={this.props.showThefts} />
            <Button outline color="warning" onClick={() => this.toggleAllTheThings('theftFilterShow')}>Set Theft Filters</Button>
          </div>
          <div className="filter-bar-bikelanes">
            <CustomInput type="switch" id="bikelane-filter" label="Toggle Bike Lanes" onChange={this.props.toggleBikeLanesShow} defaultChecked={this.props.showBikeLanes} />
          </div>
        </div>

        <Modal isOpen={this.state.accidentFilterShow} toggle={() => this.toggleAllTheThings('accidentFilterShow')} className="filter-modal">
          <ModalHeader toggle={() => this.toggleAllTheThings('accidentFilterShow')}>Accident Filters</ModalHeader>
          <ModalBody className="modal-flex">
            <div className="accident-filter-selections modal-row-1">
              <div className="filter-col-1 filter-border">
                <CustomInput type="switch" id="year-filter-accident" label="Year" onClick={() => this.toggleFilterCategory('accidentYear')} defaultChecked={this.state.accidentYear} />
                <Collapse className="year-checkboxes filter-selections" isOpen={this.state.accidentYear} >
                  <div className="filter-col-1">
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2007')} id="2007-accident" label="2007" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2007')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2008')} id="2008-accident" label="2008" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2008')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2009')} id="2009-accident" label="2009" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2009')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2010')} id="2010-accident" label="2010" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2010')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2011')} id="2011-accident" label="2011" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2011')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2012')} id="2012-accident" label="2012" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2012')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2013')} id="2013-accident" label="2013" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2013')} />
                  </div>
                  <div className="filter-col-2">
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2014')} id="2014-accident" label="2014" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2014')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2015')} id="2015-accident" label="2015" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2015')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2016')} id="2016-accident" label="2016" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2016')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2017')} id="2017-accident" label="2017" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2017')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2018')} id="2018-accident" label="2018" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2018')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.accidentYearChoices.includes('2019')} id="2019-accident" label="2019" onChange={(e) => this.toggleFilter(e, 'accidentYearChoices', '2019')} />
                  </div>
                </Collapse>
              </div>

              <div className="filter-col-2 filter-border">
                <CustomInput type="switch" id="source-filter-accident" label="Source" onClick={() => this.toggleFilterCategory('accidentSource')} defaultChecked={this.state.accidentSource} />
                <Collapse className="source-checkboxes" isOpen={this.state.accidentSource} >
                  <CustomInput type="checkbox" defaultChecked={this.state.accidentSourceChoices.includes('Toronto Police Data')} id="TPS-accident" label="Toronto Police Data" onChange={(e) => this.toggleFilter(e, 'accidentSourceChoices', 'Toronto Police Services')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.accidentSourceChoices.includes('User Submitted Data')} id="user-reports-accident" label="User Submitted Data" onChange={(e) => this.toggleFilter(e, 'accidentSourceChoices', 'User Submitted Data')} />
                </Collapse>
              </div>

              <div className="filter-col-3 filter-border">
                <CustomInput type="switch" id="visibility-filter" label="Visibility" onClick={() => this.toggleFilterCategory('visibility')} defaultChecked={this.state.visibility} />
                <Collapse className="visibility-checkboxes" isOpen={this.state.visibility} >
                  <CustomInput type="checkbox" defaultChecked={this.state.visibilityChoices.includes('Clear')} id="clear-vis" label="Clear" onChange={(e) => this.toggleFilter(e, 'visibilityChoices', 'Clear')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.visibilityChoices.includes('Rain')} id="rain-vis" label="Rain" onChange={(e) => this.toggleFilter(e, 'visibilityChoices', 'Rain')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.visibilityChoices.includes('Other')} id="other-vis" label="Other" onChange={(e) => this.toggleFilter(e, 'visibilityChoices', 'Other')} />
                </Collapse>
              </div>

              <div className="filter-col-4 filter-border">
                <CustomInput type="switch" id="road-conditions-filter" label="Road Conditions" onClick={() => this.toggleFilterCategory('roadCondition')} defaultChecked={this.state.roadCondition} />
                <Collapse className="road-condition-checkboxes" isOpen={this.state.roadCondition} >
                  <CustomInput type="checkbox" defaultChecked={this.state.roadConditionChoices.includes('Dry')} id="dry-road" label="Dry" onChange={(e) => this.toggleFilter(e, 'roadConditionChoices', 'Dry')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.roadConditionChoices.includes('Wet')} id="wet-road" label="Wet" onChange={(e) => this.toggleFilter(e, 'roadConditionChoices', 'Wet')} />
                </Collapse>
              </div>

              <div className="filter-col-5 filter-border">
                <CustomInput type="switch" id="light-conditions-filter" label="Light Conditions" onClick={() => this.toggleFilterCategory('lightCondition')} defaultChecked={this.state.lightCondition} />
                <Collapse className="light-condition-checkboxes" isOpen={this.state.lightCondition} >
                  <CustomInput type="checkbox" defaultChecked={this.state.lightConditionChoices.includes('Dark')} id="dark-light" label="Dark" onChange={(e) => this.toggleFilter(e, 'lightConditionChoices', 'Dark')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.lightConditionChoices.includes('Dark, artificial')} id="dark-artificial-light" label="Dark, artificial" onChange={(e) => this.toggleFilter(e, 'lightConditionChoices', 'Dark, artificial')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.lightConditionChoices.includes('Daylight')} id="daylight-light" label="Daylight" onChange={(e) => this.toggleFilter(e, 'lightConditionChoices', 'Daylight')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.lightConditionChoices.includes('Daylight, artificial')} id="daylight-artificial-light" label="Daylight, artificial" onChange={(e) => this.toggleFilter(e, 'lightConditionChoices', 'Daylight, artificial')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.lightConditionChoices.includes('Dusk')} id="dusk-light" label="Dusk" onChange={(e) => this.toggleFilter(e, 'lightConditionChoices', 'Dusk')} />
                </Collapse>
              </div>

              <div className="filter-col-6">
                <CustomInput type="switch" id="injury-filter" label="Severity of Injury" onClick={() => this.toggleFilterCategory('injury')} defaultChecked={this.state.injury} />
                <Collapse className="injury-checkboxes" isOpen={this.state.injury} >
                  <CustomInput type="checkbox" defaultChecked={this.state.injuryChoices.includes('Minor')} id="minor-injury" label="Minor" onChange={(e) => this.toggleFilter(e, 'injuryChoices', 'Minor')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.injuryChoices.includes('Major')} id="major-injury" label="Major" onChange={(e) => this.toggleFilter(e, 'injuryChoices', 'Major')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.injuryChoices.includes('Fatal')} id="fatal-injury" label="Fatal" onChange={(e) => this.toggleFilter(e, 'injuryChoices', 'Fatal')} />
                </Collapse>
              </div>
            </div>

            <div className="modal-row-2">
              <CustomInput type="switch" id="neighbourhood-filter-accident" label="Neighbourhood" onClick={() => this.toggleFilterCategory('accidentNeighbourhood')} defaultChecked={this.state.accidentNeighbourhood} />
              <AccidentNeighbourhoods
                accidentNeighbourhood={this.state.accidentNeighbourhood}
                accidentNeighbourhoodChoices={this.state.accidentNeighbourhoodChoices}
                toggleFilter={this.toggleFilter}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={ () => {
                this.props.applyAccidentFilters(this.state, this.props.accidentMarkers.length)
                this.toggleAllTheThings('accidentFilterShow')
              } } >Apply Filters</Button>{' '}
            <Button color="secondary" onClick={() => this.toggleAllTheThings('accidentFilterShow')}>Cancel</Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.theftFilterShow} toggle={() => this.toggleAllTheThings('theftFilterShow')} className="filter-modal">
          <ModalHeader toggle={() => this.toggleAllTheThings('theftFilterShow')}>Theft Filters</ModalHeader>
          <ModalBody className="modal-flex">
            <div className="theft-filter-selections modal-row-1">
              <div className="filter-col-1 filter-border">
                <CustomInput type="switch" id="year-filter-theft" label="Year" onClick={() => this.toggleFilterCategory('theftYear')} defaultChecked={this.state.theftYear} />
                <Collapse className="year-checkboxes filter-selections" isOpen={this.state.theftYear} >
                  <div className="filter-col-1">
                    <CustomInput type="checkbox" defaultChecked={this.state.theftYearChoices.includes('2014')} id="2014-theft" label="2014" onChange={(e) => this.toggleFilter(e, 'theftYearChoices', '2014')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftYearChoices.includes('2015')} id="2015-theft" label="2015" onChange={(e) => this.toggleFilter(e, 'theftYearChoices', '2015')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftYearChoices.includes('2016')} id="2016-theft" label="2016" onChange={(e) => this.toggleFilter(e, 'theftYearChoices', '2016')} />
                  </div>
                  <div className="filter-col-2">
                    <CustomInput type="checkbox" defaultChecked={this.state.theftYearChoices.includes('2017')} id="2017-theft" label="2017" onChange={(e) => this.toggleFilter(e, 'theftYearChoices', '2017')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftYearChoices.includes('2018')} id="2018-theft" label="2018" onChange={(e) => this.toggleFilter(e, 'theftYearChoices', '2018')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftYearChoices.includes('2019')} id="2019-theft" label="2019" onChange={(e) => this.toggleFilter(e, 'theftYearChoices', '2019')} />
                  </div>
                </Collapse>
              </div>

              <div className="filter-col-2 filter-border">
                <CustomInput type="switch" id="source-filter-theft" label="Source" onClick={() => this.toggleFilterCategory('theftSource')} defaultChecked={this.state.theftSource} />
                <Collapse className="source-checkboxes" isOpen={this.state.theftSource} >
                  <CustomInput type="checkbox" defaultChecked={this.state.theftSourceChoices.includes('Toronto Police Data')} id="TPS-theft" label="Toronto Police Data" onChange={(e) => this.toggleFilter(e, 'theftSourceChoices', 'Toronto Police Services')} />
                  <CustomInput type="checkbox" defaultChecked={this.state.theftSourceChoices.includes('User Submitted Data')} id="user-reports-theft" label="User Submitted Data" onChange={(e) => this.toggleFilter(e, 'theftSourceChoices', 'User Submitted Data')} />
                </Collapse>
              </div>

              <div className="filter-col-3">
                <CustomInput type="switch" id="type-filter-theft" label="Bike Type" onClick={() => this.toggleFilterCategory('theftBikeType')} defaultChecked={this.state.theftBikeType} />
                <Collapse className="bike-type-checkboxes filter-selections" isOpen={this.state.theftBikeType} >
                  <div className="filter-col-1">
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('BMX')} id="bmx-theft" label="BMX" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'BMX')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Electric')} id="electric-theft" label="Electric" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Electric')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Folding')} id="folding-theft" label="Folding" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Folding')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Mountain')} id="mountain-theft" label="Mountain" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Mountain')} />
                  </div>
                  <div className="filter-col-2">
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Racer')} id="racer-theft" label="Racer" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Racer')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Recumbant')} id="recumbant-theft" label="Recumbant" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Recumbant')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Regular')} id="regular-theft" label="Regular" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Regular')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Scooter')} id="scooter-theft" label="Scooter" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Scooter')} />
                  </div>
                  <div className="filter-col-3">
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Tandem')} id="tandem-theft" label="Tandem" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Tandem')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Touring')} id="touring-theft" label="Touring" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Touring')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Tricycle')} id="tricycle-theft" label="Tricycle" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Tricycle')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Unicycle')} id="unicycle-theft" label="Unicycle" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Unicycle')} />
                  </div>
                  <div className="filter-col-4">
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Type Unknown')} id="unknown-theft" label="Type Unknown" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Type Unknown')} />
                    <CustomInput type="checkbox" defaultChecked={this.state.theftBikeTypeChoices.includes('Other')} id="other-theft" label="Other" onChange={(e) => this.toggleFilter(e, 'theftBikeTypeChoices', 'Other')} />
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="modal-row-2">
              <CustomInput type="switch" id="neighbourhood-filter-theft" label="Neighbourhood" onClick={() => this.toggleFilterCategory('theftNeighbourhood')} defaultChecked={this.state.theftNeighbourhood} />
              <TheftNeighbourhoods
                theftNeighbourhood={this.state.theftNeighbourhood}
                theftNeighbourhoodChoices={this.state.theftNeighbourhoodChoices}
                toggleFilter={this.toggleFilter}
              />
            </div>

          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={ () => {
                this.props.applyTheftFilters(this.state, this.props.theftMarkers.length)
                this.toggleAllTheThings('theftFilterShow')
              } } >Apply Filters</Button>{' '}
            <Button color="secondary" onClick={() => this.toggleAllTheThings('theftFilterShow')}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      );
  }
}