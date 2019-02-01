import React, { Component } from 'react';
import { Button, ButtonGroup, Collapse, CustomInput } from 'reactstrap';


function AccidentNeighbourhoods(props) {

  return (

  <Collapse className="source-checkboxes" isOpen={props.accidentNeighbourhoods} >
    <CustomInput type="checkbox" id="agincourt-accident" label="Agincourt South-Malvern West" />
    <CustomInput type="checkbox" id="annex-accident" label="Annex" />
    <CustomInput type="checkbox" id="bay-accident" label="Bay Street Corridor" />
    <CustomInput type="checkbox" id="bayview-village-accident" label="Bayview Village" />
    <CustomInput type="checkbox" id="bayview-woods-accident" label="Bayview Woods-Steeles" />
    <CustomInput type="checkbox" id="birchcliffe-accident" label="Birchcliffe-Cliffside" />
    <CustomInput type="checkbox" id="blake-accident" label="Blake-Jones" />
    <CustomInput type="checkbox" id="casa-accident" label="Casa Loma" />
    <CustomInput type="checkbox" id="dorset-accident" label="Dorset Park" />
    <CustomInput type="checkbox" id="downsview-accident" label="Downsview-Roding-CFB" />
    <CustomInput type="checkbox" id="dufferin-accident" label="Dufferin Grove" />
    <CustomInput type="checkbox" id="high-park-accident" label="High Park-Swansea" />
    <CustomInput type="checkbox" id="islington-accident" label="Islington-City Centre West" />
    <CustomInput type="checkbox" id="kensington-accident" label="Kensington-Chinatown" />
    <CustomInput type="checkbox" id="portugal-accident" label="Little Portugal" />
    <CustomInput type="checkbox" id="moss-accident" label="Moss Park" />
    <CustomInput type="checkbox" id="pleasant-accident" label="Mount Pleasant East" />
    <CustomInput type="checkbox" id="new-toronto-accident" label="New Toronto" />
    <CustomInput type="checkbox" id="east-york-accident" label="Old East York" />
    <CustomInput type="checkbox" id="palmerston-accident" label="Palmerston-Little Italy" />
    <CustomInput type="checkbox" id="regent-accident" label="Regent Park" />
    <CustomInput type="checkbox" id="riverdale-accident" label="South Riverdale" />
    <CustomInput type="checkbox" id="steeles-accident" label="Steeles" />
    <CustomInput type="checkbox" id="beaches-accident" label="The Beaches" />
    <CustomInput type="checkbox" id="trinity-accident" label="Trinity-Bellwoods" />
    <CustomInput type="checkbox" id="university-accident" label="University" />
    <CustomInput type="checkbox" id="waterfront-accident" label="Waterfront Communities-The Island" />
    <CustomInput type="checkbox" id="humber-accident" label="West Humber-Clairville" />
    <CustomInput type="checkbox" id="woodbine-accident" label="Woodbine Corridor" />
    <CustomInput type="checkbox" id="wychwood-accident" label="Wychwood" />
  </Collapse>
  );

}

export default AccidentNeighbourhoods;
