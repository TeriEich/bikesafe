import React from 'react';
import { Collapse, CustomInput } from 'reactstrap';


function AccidentNeighbourhoods(props) {

  return (

  <Collapse className="source-checkboxes" isOpen={props.accidentNeighbourhoods} >

    <CustomInput type="checkbox" id="agincourt-accident" label="Agincourt South-Malvern West" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Agincourt South-Malvern West")} />
    <CustomInput type="checkbox" id="alderwood-accident" label="Alderwood" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Alderwood")} />
    <CustomInput type="checkbox" id="annex-accident" label="Annex" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Annex")} />
    <CustomInput type="checkbox" id="banbury-don-mills-accident" label="Banbury-Don Mills" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Banbury-Don Mills")} />
    <CustomInput type="checkbox" id="bathurst-manor-accident" label="Bathurst Manor" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Bathurst Manor")} />
    <CustomInput type="checkbox" id="bay-street-corridor-accident" label="Bay Street Corridor" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Bay Street Corridor")} />
    <CustomInput type="checkbox" id="bayview-village-accident" label="Bayview Village" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Bayview Village")} />
    <CustomInput type="checkbox" id="bayview-woods-steeles-accident" label="Bayview Woods-Steeles" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Bayview Woods-Steeles")} />
    <CustomInput type="checkbox" id="bedford-park-nortown-accident" label="Bedford Park-Nortown" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Bedford Park-Nortown")} />
    <CustomInput type="checkbox" id="beechborough-greenbrook-accident" label="Beechborough-Greenbrook" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Beechborough-Greenbrook")} />
    <CustomInput type="checkbox" id="bendale-accident" label="Bendale" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Bendale")} />
    <CustomInput type="checkbox" id="birchcliffe-cliffside-accident" label="Birchcliffe-Cliffside" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Birchcliffe-Cliffside")} />
    <CustomInput type="checkbox" id="black-creek-accident" label="Black Creek" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Black Creek")} />
    <CustomInput type="checkbox" id="blake-jones-accident" label="Blake-Jones" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Blake-Jones")} />
    <CustomInput type="checkbox" id="briar-hill-belgravia-accident" label="Briar Hill-Belgravia" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Briar Hill-Belgravia")} />
    <CustomInput type="checkbox" id="bridle-path-sunnybrook-york-mills-accident" label="Bridle Path-Sunnybrook-York Mills" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Bridle Path-Sunnybrook-York Mills")} />
    <CustomInput type="checkbox" id="broadview-north-accident" label="Broadview North" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Broadview North")} />
    <CustomInput type="checkbox" id="brookhaven-amesbury-accident" label="Brookhaven-Amesbury" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Brookhaven-Amesbury")} />
    <CustomInput type="checkbox" id="cabbagetown-south-stjames-town-accident" label="Cabbagetown-South St.James Town" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Cabbagetown-South St.James Town")} />
    <CustomInput type="checkbox" id="caledonia-fairbank-accident" label="Caledonia-Fairbank" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Caledonia-Fairbank")} />
    <CustomInput type="checkbox" id="casa-loma-accident" label="Casa Loma" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Casa Loma")} />
    <CustomInput type="checkbox" id="centennial-scarborough-accident" label="Centennial Scarborough" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Centennial Scarborough")} />
    <CustomInput type="checkbox" id="church-yonge-corridor-accident" label="Church-Yonge Corridor" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Church-Yonge Corridor")} />
    <CustomInput type="checkbox" id="clairlea-birchmount-accident" label="Clairlea-Birchmount" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Clairlea-Birchmount")} />
    <CustomInput type="checkbox" id="clanton-park-accident" label="Clanton Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Clanton Park")} />
    <CustomInput type="checkbox" id="cliffcrest-accident" label="Cliffcrest" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Cliffcrest")} />
    <CustomInput type="checkbox" id="corso-italia-davenport-accident" label="Corso Italia-Davenport" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Corso Italia-Davenport")} />
    <CustomInput type="checkbox" id="danforth-accident" label="Danforth" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Danforth")} />
    <CustomInput type="checkbox" id="danforth-east-york-accident" label="Danforth East York" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Danforth East York")} />
    <CustomInput type="checkbox" id="don-valley-village-accident" label="Don Valley Village" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Don Valley Village")} />
    <CustomInput type="checkbox" id="dorset-park-accident" label="Dorset Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Dorset Park")} />
    <CustomInput type="checkbox" id="dovercourt-wallace-emerson-junction-accident" label="Dovercourt-Wallace Emerson-Junction" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Dovercourt-Wallace Emerson-Junction")} />
    <CustomInput type="checkbox" id="downsview-roding-cfb-accident" label="Downsview-Roding-CFB" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Downsview-Roding-CFB")} />
    <CustomInput type="checkbox" id="dufferin-grove-accident" label="Dufferin Grove" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Dufferin Grove")} />
    <CustomInput type="checkbox" id="east-end-danforth-accident" label="East End-Danforth" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "East End-Danforth")} />
    <CustomInput type="checkbox" id="edenbridge-humber-valley-accident" label="Edenbridge-Humber Valley" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Edenbridge-Humber Valley")} />
    <CustomInput type="checkbox" id="eglinton-east-accident" label="Eglinton East" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Eglinton East")} />
    <CustomInput type="checkbox" id="elms-old-rexdale-accident" label="Elms-Old Rexdale" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Elms-Old Rexdale")} />
    <CustomInput type="checkbox" id="englemount-lawrence-accident" label="Englemount-Lawrence" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Englemount-Lawrence")} />
    <CustomInput type="checkbox" id="eringate-centennial-west-deane-accident" label="Eringate-Centennial-West Deane" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Eringate-Centennial-West Deane")} />
    <CustomInput type="checkbox" id="etobicoke-west-mall-accident" label="Etobicoke West Mall" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Etobicoke West Mall")} />
    <CustomInput type="checkbox" id="flemingdon-park-accident" label="Flemingdon Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Flemingdon Park")} />
    <CustomInput type="checkbox" id="forest-hill-north-accident" label="Forest Hill North" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Forest Hill North")} />
    <CustomInput type="checkbox" id="glenfield-jane-heights-accident" label="Glenfield-Jane Heights" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Glenfield-Jane Heights")} />
    <CustomInput type="checkbox" id="greenwood-coxwell-accident" label="Greenwood-Coxwell" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Greenwood-Coxwell")} />
    <CustomInput type="checkbox" id="guildwood-accident" label="Guildwood" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Guildwood")} />
    <CustomInput type="checkbox" id="henry-farm-accident" label="Henry Farm" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Henry Farm")} />
    <CustomInput type="checkbox" id="high-park-north-accident" label="High Park North" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "High Park North")} />
    <CustomInput type="checkbox" id="high-park-swansea-accident" label="High Park-Swansea" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "High Park-Swansea")} />
    <CustomInput type="checkbox" id="highland-creek-accident" label="Highland Creek" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Highland Creek")} />
    <CustomInput type="checkbox" id="hillcrest-village-accident" label="Hillcrest Village" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Hillcrest Village")} />
    <CustomInput type="checkbox" id="humber-heights-westmount-accident" label="Humber Heights-Westmount" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Humber Heights-Westmount")} />
    <CustomInput type="checkbox" id="humber-summit-accident" label="Humber Summit" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Humber Summit")} />
    <CustomInput type="checkbox" id="humbermede-accident" label="Humbermede" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Humbermede")} />
    <CustomInput type="checkbox" id="humewood-cedarvale-accident" label="Humewood-Cedarvale" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Humewood-Cedarvale")} />
    <CustomInput type="checkbox" id="ionview-accident" label="Ionview" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Ionview")} />
    <CustomInput type="checkbox" id="islington-city-centre-west-accident" label="Islington-City Centre West" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Islington-City Centre West")} />
    <CustomInput type="checkbox" id="junction-area-accident" label="Junction Area" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Junction Area")} />
    <CustomInput type="checkbox" id="keelesdale-eglinton-west-accident" label="Keelesdale-Eglinton West" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Keelesdale-Eglinton West")} />
    <CustomInput type="checkbox" id="kennedy-park-accident" label="Kennedy Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Kennedy Park")} />
    <CustomInput type="checkbox" id="kensington-chinatown-accident" label="Kensington-Chinatown" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Kensington-Chinatown")} />
    <CustomInput type="checkbox" id="kingsview-village-the-westway-accident" label="Kingsview Village-The Westway" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Kingsview Village-The Westway")} />
    <CustomInput type="checkbox" id="kingsway-south-accident" label="Kingsway South" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Kingsway South")} />
    <CustomInput type="checkbox" id="lamoreaux-accident" label="L’Amoreaux" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "L’Amoreaux")} />
    <CustomInput type="checkbox" id="lambton-baby-point-accident" label="Lambton Baby Point" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Lambton Baby Point")} />
    <CustomInput type="checkbox" id="lansing-westgate-accident" label="Lansing-Westgate" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Lansing-Westgate")} />
    <CustomInput type="checkbox" id="lawrence-park-north-accident" label="Lawrence Park North" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Lawrence Park North")} />
    <CustomInput type="checkbox" id="leaside-bennington-accident" label="Leaside-Bennington" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Leaside-Bennington")} />
    <CustomInput type="checkbox" id="little-portugal-accident" label="Little Portugal" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Little Portugal")} />
    <CustomInput type="checkbox" id="long-branch-accident" label="Long Branch" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Long Branch")} />
    <CustomInput type="checkbox" id="malvern-accident" label="Malvern" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Malvern")} />
    <CustomInput type="checkbox" id="maple-leaf-accident" label="Maple Leaf" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Maple Leaf")} />
    <CustomInput type="checkbox" id="markland-wood-accident" label="Markland Wood" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Markland Wood")} />
    <CustomInput type="checkbox" id="milliken-accident" label="Milliken" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Milliken")} />
    <CustomInput type="checkbox" id="mimico-accident" label="Mimico (includes Humber Bay Shores)" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Mimico (includes Humber Bay Shores)")} />
    <CustomInput type="checkbox" id="morningside-accident" label="Morningside" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Morningside")} />
    <CustomInput type="checkbox" id="moss-park-accident" label="Moss Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Moss Park")} />
    <CustomInput type="checkbox" id="mount-dennis-accident" label="Mount Dennis" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Mount Dennis")} />
    <CustomInput type="checkbox" id="mount-olive-silverstone-jamestown-accident" label="Mount Olive-Silverstone-Jamestown" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Mount Olive-Silverstone-Jamestown")} />
    <CustomInput type="checkbox" id="mount-pleasant-east-accident" label="Mount Pleasant East" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Mount Pleasant East")} />
    <CustomInput type="checkbox" id="mount-pleasant-west-accident" label="Mount Pleasant West" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Mount Pleasant West")} />
    <CustomInput type="checkbox" id="new-toronto-accident" label="New Toronto" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "New Toronto")} />
    <CustomInput type="checkbox" id="newtonbrook-east-accident" label="Newtonbrook East" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Newtonbrook East")} />
    <CustomInput type="checkbox" id="newtonbrook-west-accident" label="Newtonbrook West" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Newtonbrook West")} />
    <CustomInput type="checkbox" id="niagara-accident" label="Niagara" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Niagara")} />
    <CustomInput type="checkbox" id="north-riverdale-accident" label="North Riverdale" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "North Riverdale")} />
    <CustomInput type="checkbox" id="north-stjames-town-accident" label="North St.James Town" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "North St.James Town")} />
    <CustomInput type="checkbox" id="oconnor-parkview-accident" label="O’Connor-Parkview" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "O’Connor-Parkview")} />
    <CustomInput type="checkbox" id="oakridge-accident" label="Oakridge" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Oakridge")} />
    <CustomInput type="checkbox" id="oakwood-village-accident" label="Oakwood Village" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Oakwood Village")} />
    <CustomInput type="checkbox" id="old-east-york-accident" label="Old East York" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Old East York")} />
    <CustomInput type="checkbox" id="parkwoods-donalda-accident" label="Parkwoods-Donalda" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Parkwoods-Donalda")} />
    <CustomInput type="checkbox" id="palmerston-little-italy-accident" label="Palmerston-Little Italy" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Palmerston-Little Italy")} />
    <CustomInput type="checkbox" id="pelmo-park-humberlea-accident" label="Pelmo Park-Humberlea" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Pelmo Park-Humberlea")} />
    <CustomInput type="checkbox" id="playter-estates-danforth-accident" label="Playter Estates-Danforth" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Playter Estates-Danforth")} />
    <CustomInput type="checkbox" id="pleasant-view-accident" label="Pleasant View" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Pleasant View")} />
    <CustomInput type="checkbox" id="princess-rosethorn-accident" label="Princess-Rosethorn" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Princess-Rosethorn")} />
    <CustomInput type="checkbox" id="regent-park-accident" label="Regent Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Regent Park")} />
    <CustomInput type="checkbox" id="rexdale-kipling-accident" label="Rexdale-Kipling" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Rexdale-Kipling")} />
    <CustomInput type="checkbox" id="rockcliffe-smythe-accident" label="Rockcliffe-Smythe" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Rockcliffe-Smythe")} />
    <CustomInput type="checkbox" id="roncesvalles-accident" label="Roncesvalles" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Roncesvalles")} />
    <CustomInput type="checkbox" id="rosedale-moore-park-accident" label="Rosedale-Moore Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Rosedale-Moore Park")} />
    <CustomInput type="checkbox" id="rouge-accident" label="Rouge" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Rouge")} />
    <CustomInput type="checkbox" id="runnymede-bloor-west-village-accident" label="Runnymede-Bloor West Village" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Runnymede-Bloor West Village")} />
    <CustomInput type="checkbox" id="rustic-accident" label="Rustic" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Rustic")} />
    <CustomInput type="checkbox" id="scarborough-village-accident" label="Scarborough Village" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Scarborough Village")} />
    <CustomInput type="checkbox" id="south-parkdale-accident" label="South Parkdale" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "South Parkdale")} />
    <CustomInput type="checkbox" id="south-riverdale-accident" label="South Riverdale" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "South Riverdale")} />
    <CustomInput type="checkbox" id="standrew-windfields-accident" label="St.Andrew-Windfields" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "St.Andrew-Windfields")} />
    <CustomInput type="checkbox" id="steeles-accident" label="Steeles" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Steeles")} />
    <CustomInput type="checkbox" id="stonegate-queensway-accident" label="Stonegate-Queensway" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Stonegate-Queensway")} />
    <CustomInput type="checkbox" id="tam-oshanter-sullivan-accident" label="Tam O’Shanter-Sullivan" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Tam O’Shanter-Sullivan")} />
    <CustomInput type="checkbox" id="taylor-massey-accident" label="Taylor-Massey" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Taylor-Massey")} />
    <CustomInput type="checkbox" id="the-beaches-accident" label="The Beaches" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "The Beaches")} />
    <CustomInput type="checkbox" id="thistletown-beaumond-heights-accident" label="Thistletown-Beaumond Heights" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Thistletown-Beaumond Heights")} />
    <CustomInput type="checkbox" id="thorncliffe-park-accident" label="Thorncliffe Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Thorncliffe Park")} />
    <CustomInput type="checkbox" id="trinity-bellwoods-accident" label="Trinity-Bellwoods" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Trinity-Bellwoods")} />
    <CustomInput type="checkbox" id="university-accident" label="University" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "University")} />
    <CustomInput type="checkbox" id="victoria-village-accident" label="Victoria Village" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Victoria Village")} />
    <CustomInput type="checkbox" id="waterfront-communities-the-island-accident" label="Waterfront Communities-The Island" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Waterfront Communities-The Island")} />
    <CustomInput type="checkbox" id="west-hill-accident" label="West Hill" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "West Hill")} />
    <CustomInput type="checkbox" id="west-humber-clairville-accident" label="West Humber-Clairville" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "West Humber-Clairville")} />
    <CustomInput type="checkbox" id="weston-accident" label="Weston" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Weston")} />
    <CustomInput type="checkbox" id="weston-pellam-park-accident" label="Weston-Pellam Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Weston-Pellam Park")} />
    <CustomInput type="checkbox" id="wexford-maryvale-accident" label="Wexford/Maryvale" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Wexford/Maryvale")} />
    <CustomInput type="checkbox" id="willowdale-east-accident" label="Willowdale East" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Willowdale East")} />
    <CustomInput type="checkbox" id="willowdale-west-accident" label="Willowdale West" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Willowdale West")} />
    <CustomInput type="checkbox" id="willowridge-martingrove-richview-accident" label="Willowridge-Martingrove-Richview" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Willowridge-Martingrove-Richview")} />
    <CustomInput type="checkbox" id="woburn-accident" label="Woburn" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Woburn")} />
    <CustomInput type="checkbox" id="woodbine-corridor-accident" label="Woodbine Corridor" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Woodbine Corridor")} />
    <CustomInput type="checkbox" id="woodbine-lumsden-accident" label="Woodbine-Lumsden" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Woodbine-Lumsden")} />
    <CustomInput type="checkbox" id="wychwood-accident" label="Wychwood" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Wychwood")} />
    <CustomInput type="checkbox" id="yonge-eglinton-accident" label="Yonge-Eglinton" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Yonge-Eglinton")} />
    <CustomInput type="checkbox" id="yonge-stclair-accident" label="Yonge-St.Clair" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Yonge-St.Clair")} />
    <CustomInput type="checkbox" id="york-university-heights-accident" label="York University Heights" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "York University Heights")} />
    <CustomInput type="checkbox" id="yorkdale-glen-park-accident" label="Yorkdale-Glen Park" onChange={(e) => props.toggleFilter(e, "accidentNeighbourhoodChoices", "Yorkdale-Glen Park")} />
  </Collapse>
  );

}

    // <CustomInput type="checkbox" id="agincourt-accident" label="Agincourt South-Malvern West" />
    // <CustomInput type="checkbox" id="annex-accident" label="Annex" />
    // <CustomInput type="checkbox" id="bay-accident" label="Bay Street Corridor" />
    // <CustomInput type="checkbox" id="bayview-village-accident" label="Bayview Village" />
    // <CustomInput type="checkbox" id="bayview-woods-accident" label="Bayview Woods-Steeles" />
    // <CustomInput type="checkbox" id="birchcliffe-accident" label="Birchcliffe-Cliffside" />
    // <CustomInput type="checkbox" id="blake-accident" label="Blake-Jones" />
    // <CustomInput type="checkbox" id="casa-accident" label="Casa Loma" />
    // <CustomInput type="checkbox" id="dorset-accident" label="Dorset Park" />
    // <CustomInput type="checkbox" id="downsview-accident" label="Downsview-Roding-CFB" />
    // <CustomInput type="checkbox" id="dufferin-accident" label="Dufferin Grove" />
    // <CustomInput type="checkbox" id="high-park-accident" label="High Park-Swansea" />
    // <CustomInput type="checkbox" id="islington-accident" label="Islington-City Centre West" />
    // <CustomInput type="checkbox" id="kensington-accident" label="Kensington-Chinatown" />
    // <CustomInput type="checkbox" id="portugal-accident" label="Little Portugal" />
    // <CustomInput type="checkbox" id="moss-accident" label="Moss Park" />
    // <CustomInput type="checkbox" id="pleasant-accident" label="Mount Pleasant East" />
    // <CustomInput type="checkbox" id="new-toronto-accident" label="New Toronto" />
    // <CustomInput type="checkbox" id="east-york-accident" label="Old East York" />
    // <CustomInput type="checkbox" id="palmerston-accident" label="Palmerston-Little Italy" />
    // <CustomInput type="checkbox" id="regent-accident" label="Regent Park" />
    // <CustomInput type="checkbox" id="riverdale-accident" label="South Riverdale" />
    // <CustomInput type="checkbox" id="steeles-accident" label="Steeles" />
    // <CustomInput type="checkbox" id="beaches-accident" label="The Beaches" />
    // <CustomInput type="checkbox" id="trinity-accident" label="Trinity-Bellwoods" />
    // <CustomInput type="checkbox" id="university-accident" label="University" />
    // <CustomInput type="checkbox" id="waterfront-accident" label="Waterfront Communities-The Island" />
    // <CustomInput type="checkbox" id="humber-accident" label="West Humber-Clairville" />
    // <CustomInput type="checkbox" id="woodbine-accident" label="Woodbine Corridor" />
    // <CustomInput type="checkbox" id="wychwood-accident" label="Wychwood" />

export default AccidentNeighbourhoods;
