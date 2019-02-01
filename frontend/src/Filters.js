import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, CustomInput } from 'reactstrap';
import AccidentNeighbourhoods from './AccidentNeighbourhoods';
import TheftNeighbourhoods from './TheftNeighbourhoods';
import Toggle from 'react-toggle'

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      dropdownOpen: false,
      accidentFilterShow: false,
      theftFilterShow: false,
      accidentYears: false,
      accidentSources: false,
      accidentNeighbourhoods: false,
      visibilities: false,
      roadConditions: false,
      lightConditions: false,
      injuries: false,
      theftYears: false,
      theftSources: false,
      theftNeighbourhoods: false
    };
  }

  toggleAllTheThings = (filter) => this.setState({ [filter]: !this.state[filter] });


  render() {

    return (

      <div className="filter-bar">
        <CustomInput type="switch" id="accident-filter" label="Accident Data" onChange={this.props.toggleAccidentShow} defaultChecked={this.props.showAccidents} />
        <Button color="danger" onClick={() => this.toggleAllTheThings('accidentFilterShow')}>Set Accident Filters</Button>
        <Modal isOpen={this.state.accidentFilterShow} toggle={() => this.toggleAllTheThings('accidentFilterShow')} className="filter-main-modal">
          <ModalHeader toggle={() => this.toggleAllTheThings('accidentFilterShow')}>Accident Filters</ModalHeader>
          <ModalBody>
            <CustomInput type="switch" id="year-filter-accident" label="Year" onClick={() => this.toggleAllTheThings('accidentYears')} />
            <Collapse className="year-checkboxes" isOpen={this.state.accidentYears} >
              <CustomInput type="checkbox" id="2007-accident" label="2007" />
              <CustomInput type="checkbox" id="2008-accident" label="2008" />
              <CustomInput type="checkbox" id="2009-accident" label="2009" />
              <CustomInput type="checkbox" id="2010-accident" label="2010" />
              <CustomInput type="checkbox" id="2011-accident" label="2011" />
              <CustomInput type="checkbox" id="2012-accident" label="2012" />
              <CustomInput type="checkbox" id="2013-accident" label="2013" />
              <CustomInput type="checkbox" id="2014-accident" label="2014" />
              <CustomInput type="checkbox" id="2015-accident" label="2015" />
              <CustomInput type="checkbox" id="2016-accident" label="2016" />
              <CustomInput type="checkbox" id="2017-accident" label="2017" />
              <CustomInput type="checkbox" id="2018-accident" label="2018" />
              <CustomInput type="checkbox" id="2019-accident" label="2019" />
            </Collapse>

            <CustomInput type="switch" id="source-filter-accident" label="Source" onClick={() => this.toggleAllTheThings('accidentSources')} />
            <Collapse className="source-checkboxes" isOpen={this.state.accidentSources} >
              <CustomInput type="checkbox" id="TPS-accident" label="Toronto Police Data" />
              <CustomInput type="checkbox" id="user-reports-accident" label="User Reported Data" />
            </Collapse>

            <CustomInput type="switch" id="neighbourhood-filter-accident" label="Neighbourhood" onClick={() => this.toggleAllTheThings('accidentNeighbourhoods')} />
            <AccidentNeighbourhoods accidentNeighbourhoods={this.state.accidentNeighbourhoods} />


            <CustomInput type="switch" id="visibility-filter" label="Visibility" onClick={() => this.toggleAllTheThings('visibilities')} />
            <Collapse className="source-checkboxes" isOpen={this.state.visibilities} >
              <CustomInput type="checkbox" id="clear-vis" label="Clear" />
              <CustomInput type="checkbox" id="rain-vis" label="Rain" />
              <CustomInput type="checkbox" id="other-vis" label="Other" />
            </Collapse>

            <CustomInput type="switch" id="road-conditions-filter" label="Road Conditions" onClick={() => this.toggleAllTheThings('roadConditions')} />
            <Collapse className="source-checkboxes" isOpen={this.state.roadConditions} >
              <CustomInput type="checkbox" id="dry-road" label="Dry" />
              <CustomInput type="checkbox" id="wet-road" label="Wet" />
            </Collapse>

            <CustomInput type="switch" id="light-conditions-filter" label="Light Conditions" onClick={() => this.toggleAllTheThings('lightConditions')} />
            <Collapse className="source-checkboxes" isOpen={this.state.lightConditions} >
              <CustomInput type="checkbox" id="dark-light" label="Dark" />
              <CustomInput type="checkbox" id="dark-artificial-light" label="Dark, artificial" />
              <CustomInput type="checkbox" id="daylight-light" label="Daylight" />
              <CustomInput type="checkbox" id="daylight-artificial-light" label="Daylight, artificial" />
              <CustomInput type="checkbox" id="dusk-light" label="Dusk" />
            </Collapse>

            <CustomInput type="switch" id="injury-filter" label="Severity of Injury" onClick={() => this.toggleAllTheThings('injuries')} />
            <Collapse className="source-checkboxes" isOpen={this.state.injuries} >
              <CustomInput type="checkbox" id="minor-injury" label="Minor" />
              <CustomInput type="checkbox" id="major-injury" label="Major" />
              <CustomInput type="checkbox" id="fatal-injury" label="Fatal" />
            </Collapse>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggleAllTheThings('accidentFilterShow')}>Apply Filters</Button>{' '}
            <Button color="secondary" onClick={() => this.toggleAllTheThings('accidentFilterShow')}>Cancel</Button>
          </ModalFooter>
        </Modal>


        <CustomInput type="switch" id="theft-filter" label="Theft Data" onChange={this.props.toggleTheftShow} defaultChecked={this.props.showThefts} />
        <Button color="danger" onClick={() => this.toggleAllTheThings('theftFilterShow')}>Set Theft Filters</Button>
        <Modal isOpen={this.state.theftFilterShow} toggle={() => this.toggleAllTheThings('theftFilterShow')} className="filter-main-modal">
          <ModalHeader toggle={() => this.toggleAllTheThings('theftFilterShow')}>Theft Filters</ModalHeader>
          <ModalBody>
            <CustomInput type="switch" id="year-filter-theft" label="Year" onClick={() => this.toggleAllTheThings('theftYears')} />
            <Collapse className="year-checkboxes" isOpen={this.state.theftYears} >
              <CustomInput type="checkbox" id="2014-theft" label="2014" />
              <CustomInput type="checkbox" id="2015-theft" label="2015" />
              <CustomInput type="checkbox" id="2016-theft" label="2016" />
              <CustomInput type="checkbox" id="2017-theft" label="2017" />
              <CustomInput type="checkbox" id="2018-theft" label="2018" />
              <CustomInput type="checkbox" id="2019-theft" label="2019" />
            </Collapse>

            <CustomInput type="switch" id="source-filter-theft" label="Source" onClick={() => this.toggleAllTheThings('theftSources')} />
            <Collapse className="source-checkboxes" isOpen={this.state.theftSources} >
              <CustomInput type="checkbox" id="TPS-theft" label="Toronto Police Data" />
              <CustomInput type="checkbox" id="user-reports-theft" label="User Reported Data" />
            </Collapse>

            <CustomInput type="switch" id="neighbourhood-filter-theft" label="Neighbourhood" onClick={() => this.toggleAllTheThings('theftNeighbourhoods')} />
            <TheftNeighbourhoods theftNeighbourhoods={this.state.theftNeighbourhoods} />

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggleAllTheThings('theftFilterShow')}>Apply Filters</Button>{' '}
            <Button color="secondary" onClick={() => this.toggleAllTheThings('theftFilterShow')}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      );
  }
}