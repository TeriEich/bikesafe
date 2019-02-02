import React from 'react';
import { Collapse, CustomInput } from 'reactstrap';


function TheftNeighbourhoods(props) {

  return (

  <Collapse className="source-checkboxes" isOpen={props.theftNeighbourhoods} >
    <CustomInput type="checkbox" id="agincourt-theft" label="Agincourt South-Malvern West" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Agincourt South-Malvern West")} />
    <CustomInput type="checkbox" id="alderwood-theft" label="Alderwood" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Alderwood")} />
    <CustomInput type="checkbox" id="annex-theft" label="Annex" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Annex")} />
    <CustomInput type="checkbox" id="banbury-don-mills-theft" label="Banbury-Don Mills" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Banbury-Don Mills")} />
    <CustomInput type="checkbox" id="bathurst-manor-theft" label="Bathurst Manor" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Bathurst Manor")} />
    <CustomInput type="checkbox" id="bay-street-corridor-theft" label="Bay Street Corridor" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Bay Street Corridor")} />
    <CustomInput type="checkbox" id="bayview-village-theft" label="Bayview Village" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Bayview Village")} />
    <CustomInput type="checkbox" id="bayview-woods-steeles-theft" label="Bayview Woods-Steeles" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Bayview Woods-Steeles")} />
    <CustomInput type="checkbox" id="bedford-park-nortown-theft" label="Bedford Park-Nortown" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Bedford Park-Nortown")} />
    <CustomInput type="checkbox" id="beechborough-greenbrook-theft" label="Beechborough-Greenbrook" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Beechborough-Greenbrook")} />
    <CustomInput type="checkbox" id="bendale-theft" label="Bendale" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Bendale")} />
    <CustomInput type="checkbox" id="birchcliffe-cliffside-theft" label="Birchcliffe-Cliffside" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Birchcliffe-Cliffside")} />
    <CustomInput type="checkbox" id="black-creek-theft" label="Black Creek" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Black Creek")} />
    <CustomInput type="checkbox" id="blake-jones-theft" label="Blake-Jones" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Blake-Jones")} />
    <CustomInput type="checkbox" id="briar-hill-belgravia-theft" label="Briar Hill-Belgravia" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Briar Hill-Belgravia")} />
    <CustomInput type="checkbox" id="bridle-path-sunnybrook-york-mills-theft" label="Bridle Path-Sunnybrook-York Mills" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Bridle Path-Sunnybrook-York Mills")} />
    <CustomInput type="checkbox" id="broadview-north-theft" label="Broadview North" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Broadview North")} />
    <CustomInput type="checkbox" id="brookhaven-amesbury-theft" label="Brookhaven-Amesbury" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Brookhaven-Amesbury")} />
    <CustomInput type="checkbox" id="cabbagetown-south-stjames-town-theft" label="Cabbagetown-South St.James Town" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Cabbagetown-South St.James Town")} />
    <CustomInput type="checkbox" id="caledonia-fairbank-theft" label="Caledonia-Fairbank" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Caledonia-Fairbank")} />
    <CustomInput type="checkbox" id="casa-loma-theft" label="Casa Loma" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Casa Loma")} />
    <CustomInput type="checkbox" id="centennial-scarborough-theft" label="Centennial Scarborough" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Centennial Scarborough")} />
    <CustomInput type="checkbox" id="church-yonge-corridor-theft" label="Church-Yonge Corridor" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Church-Yonge Corridor")} />
    <CustomInput type="checkbox" id="clairlea-birchmount-theft" label="Clairlea-Birchmount" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Clairlea-Birchmount")} />
    <CustomInput type="checkbox" id="clanton-park-theft" label="Clanton Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Clanton Park")} />
    <CustomInput type="checkbox" id="cliffcrest-theft" label="Cliffcrest" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Cliffcrest")} />
    <CustomInput type="checkbox" id="corso-italia-davenport-theft" label="Corso Italia-Davenport" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Corso Italia-Davenport")} />
    <CustomInput type="checkbox" id="danforth-theft" label="Danforth" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Danforth")} />
    <CustomInput type="checkbox" id="danforth-east-york-theft" label="Danforth East York" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Danforth East York")} />
    <CustomInput type="checkbox" id="don-valley-village-theft" label="Don Valley Village" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Don Valley Village")} />
    <CustomInput type="checkbox" id="dorset-park-theft" label="Dorset Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Dorset Park")} />
    <CustomInput type="checkbox" id="dovercourt-wallace-emerson-junction-theft" label="Dovercourt-Wallace Emerson-Junction" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Dovercourt-Wallace Emerson-Junction")} />
    <CustomInput type="checkbox" id="downsview-roding-cfb-theft" label="Downsview-Roding-CFB" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Downsview-Roding-CFB")} />
    <CustomInput type="checkbox" id="dufferin-grove-theft" label="Dufferin Grove" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Dufferin Grove")} />
    <CustomInput type="checkbox" id="east-end-danforth-theft" label="East End-Danforth" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "East End-Danforth")} />
    <CustomInput type="checkbox" id="edenbridge-humber-valley-theft" label="Edenbridge-Humber Valley" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Edenbridge-Humber Valley")} />
    <CustomInput type="checkbox" id="eglinton-east-theft" label="Eglinton East" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Eglinton East")} />
    <CustomInput type="checkbox" id="elms-old-rexdale-theft" label="Elms-Old Rexdale" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Elms-Old Rexdale")} />
    <CustomInput type="checkbox" id="englemount-lawrence-theft" label="Englemount-Lawrence" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Englemount-Lawrence")} />
    <CustomInput type="checkbox" id="eringate-centennial-west-deane-theft" label="Eringate-Centennial-West Deane" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Eringate-Centennial-West Deane")} />
    <CustomInput type="checkbox" id="etobicoke-west-mall-theft" label="Etobicoke West Mall" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Etobicoke West Mall")} />
    <CustomInput type="checkbox" id="flemingdon-park-theft" label="Flemingdon Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Flemingdon Park")} />
    <CustomInput type="checkbox" id="forest-hill-north-theft" label="Forest Hill North" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Forest Hill North")} />
    <CustomInput type="checkbox" id="glenfield-jane-heights-theft" label="Glenfield-Jane Heights" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Glenfield-Jane Heights")} />
    <CustomInput type="checkbox" id="greenwood-coxwell-theft" label="Greenwood-Coxwell" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Greenwood-Coxwell")} />
    <CustomInput type="checkbox" id="guildwood-theft" label="Guildwood" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Guildwood")} />
    <CustomInput type="checkbox" id="henry-farm-theft" label="Henry Farm" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Henry Farm")} />
    <CustomInput type="checkbox" id="high-park-north-theft" label="High Park North" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "High Park North")} />
    <CustomInput type="checkbox" id="high-park-swansea-theft" label="High Park-Swansea" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "High Park-Swansea")} />
    <CustomInput type="checkbox" id="highland-creek-theft" label="Highland Creek" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Highland Creek")} />
    <CustomInput type="checkbox" id="hillcrest-village-theft" label="Hillcrest Village" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Hillcrest Village")} />
    <CustomInput type="checkbox" id="humber-heights-westmount-theft" label="Humber Heights-Westmount" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Humber Heights-Westmount")} />
    <CustomInput type="checkbox" id="humber-summit-theft" label="Humber Summit" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Humber Summit")} />
    <CustomInput type="checkbox" id="humbermede-theft" label="Humbermede" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Humbermede")} />
    <CustomInput type="checkbox" id="humewood-cedarvale-theft" label="Humewood-Cedarvale" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Humewood-Cedarvale")} />
    <CustomInput type="checkbox" id="ionview-theft" label="Ionview" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Ionview")} />
    <CustomInput type="checkbox" id="islington-city-centre-west-theft" label="Islington-City Centre West" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Islington-City Centre West")} />
    <CustomInput type="checkbox" id="junction-area-theft" label="Junction Area" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Junction Area")} />
    <CustomInput type="checkbox" id="keelesdale-eglinton-west-theft" label="Keelesdale-Eglinton West" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Keelesdale-Eglinton West")} />
    <CustomInput type="checkbox" id="kennedy-park-theft" label="Kennedy Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Kennedy Park")} />
    <CustomInput type="checkbox" id="kensington-chinatown-theft" label="Kensington-Chinatown" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Kensington-Chinatown")} />
    <CustomInput type="checkbox" id="kingsview-village-the-westway-theft" label="Kingsview Village-The Westway" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Kingsview Village-The Westway")} />
    <CustomInput type="checkbox" id="kingsway-south-theft" label="Kingsway South" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Kingsway South")} />
    <CustomInput type="checkbox" id="lamoreaux-theft" label="L’Amoreaux" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "L’Amoreaux")} />
    <CustomInput type="checkbox" id="lambton-baby-point-theft" label="Lambton Baby Point" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Lambton Baby Point")} />
    <CustomInput type="checkbox" id="lansing-westgate-theft" label="Lansing-Westgate" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Lansing-Westgate")} />
    <CustomInput type="checkbox" id="lawrence-park-north-theft" label="Lawrence Park North" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Lawrence Park North")} />
    <CustomInput type="checkbox" id="leaside-bennington-theft" label="Leaside-Bennington" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Leaside-Bennington")} />
    <CustomInput type="checkbox" id="little-portugal-theft" label="Little Portugal" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Little Portugal")} />
    <CustomInput type="checkbox" id="long-branch-theft" label="Long Branch" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Long Branch")} />
    <CustomInput type="checkbox" id="malvern-theft" label="Malvern" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Malvern")} />
    <CustomInput type="checkbox" id="maple-leaf-theft" label="Maple Leaf" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Maple Leaf")} />
    <CustomInput type="checkbox" id="markland-wood-theft" label="Markland Wood" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Markland Wood")} />
    <CustomInput type="checkbox" id="milliken-theft" label="Milliken" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Milliken")} />
    <CustomInput type="checkbox" id="mimico-theft" label="Mimico (includes Humber Bay Shores)" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Mimico (includes Humber Bay Shores)")} />
    <CustomInput type="checkbox" id="morningside-theft" label="Morningside" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Morningside")} />
    <CustomInput type="checkbox" id="moss-park-theft" label="Moss Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Moss Park")} />
    <CustomInput type="checkbox" id="mount-dennis-theft" label="Mount Dennis" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Mount Dennis")} />
    <CustomInput type="checkbox" id="mount-olive-silverstone-jamestown-theft" label="Mount Olive-Silverstone-Jamestown" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Mount Olive-Silverstone-Jamestown")} />
    <CustomInput type="checkbox" id="mount-pleasant-east-theft" label="Mount Pleasant East" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Mount Pleasant East")} />
    <CustomInput type="checkbox" id="mount-pleasant-west-theft" label="Mount Pleasant West" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Mount Pleasant West")} />
    <CustomInput type="checkbox" id="new-toronto-theft" label="New Toronto" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "New Toronto")} />
    <CustomInput type="checkbox" id="newtonbrook-east-theft" label="Newtonbrook East" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Newtonbrook East")} />
    <CustomInput type="checkbox" id="newtonbrook-west-theft" label="Newtonbrook West" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Newtonbrook West")} />
    <CustomInput type="checkbox" id="niagara-theft" label="Niagara" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Niagara")} />
    <CustomInput type="checkbox" id="north-riverdale-theft" label="North Riverdale" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "North Riverdale")} />
    <CustomInput type="checkbox" id="north-stjames-town-theft" label="North St.James Town" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "North St.James Town")} />
    <CustomInput type="checkbox" id="oconnor-parkview-theft" label="O’Connor-Parkview" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "O’Connor-Parkview")} />
    <CustomInput type="checkbox" id="oakridge-theft" label="Oakridge" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Oakridge")} />
    <CustomInput type="checkbox" id="oakwood-village-theft" label="Oakwood Village" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Oakwood Village")} />
    <CustomInput type="checkbox" id="old-east-york-theft" label="Old East York" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Old East York")} />
    <CustomInput type="checkbox" id="parkwoods-donalda-theft" label="Parkwoods-Donalda" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Parkwoods-Donalda")} />
    <CustomInput type="checkbox" id="palmerston-little-italy-theft" label="Palmerston-Little Italy" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Palmerston-Little Italy")} />
    <CustomInput type="checkbox" id="pelmo-park-humberlea-theft" label="Pelmo Park-Humberlea" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Pelmo Park-Humberlea")} />
    <CustomInput type="checkbox" id="playter-estates-danforth-theft" label="Playter Estates-Danforth" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Playter Estates-Danforth")} />
    <CustomInput type="checkbox" id="pleasant-view-theft" label="Pleasant View" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Pleasant View")} />
    <CustomInput type="checkbox" id="princess-rosethorn-theft" label="Princess-Rosethorn" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Princess-Rosethorn")} />
    <CustomInput type="checkbox" id="regent-park-theft" label="Regent Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Regent Park")} />
    <CustomInput type="checkbox" id="rexdale-kipling-theft" label="Rexdale-Kipling" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Rexdale-Kipling")} />
    <CustomInput type="checkbox" id="rockcliffe-smythe-theft" label="Rockcliffe-Smythe" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Rockcliffe-Smythe")} />
    <CustomInput type="checkbox" id="roncesvalles-theft" label="Roncesvalles" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Roncesvalles")} />
    <CustomInput type="checkbox" id="rosedale-moore-park-theft" label="Rosedale-Moore Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Rosedale-Moore Park")} />
    <CustomInput type="checkbox" id="rouge-theft" label="Rouge" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Rouge")} />
    <CustomInput type="checkbox" id="runnymede-bloor-west-village-theft" label="Runnymede-Bloor West Village" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Runnymede-Bloor West Village")} />
    <CustomInput type="checkbox" id="rustic-theft" label="Rustic" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Rustic")} />
    <CustomInput type="checkbox" id="scarborough-village-theft" label="Scarborough Village" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Scarborough Village")} />
    <CustomInput type="checkbox" id="south-parkdale-theft" label="South Parkdale" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "South Parkdale")} />
    <CustomInput type="checkbox" id="south-riverdale-theft" label="South Riverdale" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "South Riverdale")} />
    <CustomInput type="checkbox" id="standrew-windfields-theft" label="St.Andrew-Windfields" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "St.Andrew-Windfields")} />
    <CustomInput type="checkbox" id="steeles-theft" label="Steeles" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Steeles")} />
    <CustomInput type="checkbox" id="stonegate-queensway-theft" label="Stonegate-Queensway" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Stonegate-Queensway")} />
    <CustomInput type="checkbox" id="tam-oshanter-sullivan-theft" label="Tam O’Shanter-Sullivan" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Tam O’Shanter-Sullivan")} />
    <CustomInput type="checkbox" id="taylor-massey-theft" label="Taylor-Massey" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Taylor-Massey")} />
    <CustomInput type="checkbox" id="the-beaches-theft" label="The Beaches" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "The Beaches")} />
    <CustomInput type="checkbox" id="thistletown-beaumond-heights-theft" label="Thistletown-Beaumond Heights" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Thistletown-Beaumond Heights")} />
    <CustomInput type="checkbox" id="thorncliffe-park-theft" label="Thorncliffe Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Thorncliffe Park")} />
    <CustomInput type="checkbox" id="trinity-bellwoods-theft" label="Trinity-Bellwoods" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Trinity-Bellwoods")} />
    <CustomInput type="checkbox" id="university-theft" label="University" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "University")} />
    <CustomInput type="checkbox" id="victoria-village-theft" label="Victoria Village" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Victoria Village")} />
    <CustomInput type="checkbox" id="waterfront-communities-the-island-theft" label="Waterfront Communities-The Island" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Waterfront Communities-The Island")} />
    <CustomInput type="checkbox" id="west-hill-theft" label="West Hill" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "West Hill")} />
    <CustomInput type="checkbox" id="west-humber-clairville-theft" label="West Humber-Clairville" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "West Humber-Clairville")} />
    <CustomInput type="checkbox" id="weston-theft" label="Weston" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Weston")} />
    <CustomInput type="checkbox" id="weston-pellam-park-theft" label="Weston-Pellam Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Weston-Pellam Park")} />
    <CustomInput type="checkbox" id="wexford-maryvale-theft" label="Wexford/Maryvale" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Wexford/Maryvale")} />
    <CustomInput type="checkbox" id="willowdale-east-theft" label="Willowdale East" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Willowdale East")} />
    <CustomInput type="checkbox" id="willowdale-west-theft" label="Willowdale West" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Willowdale West")} />
    <CustomInput type="checkbox" id="willowridge-martingrove-richview-theft" label="Willowridge-Martingrove-Richview" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Willowridge-Martingrove-Richview")} />
    <CustomInput type="checkbox" id="woburn-theft" label="Woburn" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Woburn")} />
    <CustomInput type="checkbox" id="woodbine-corridor-theft" label="Woodbine Corridor" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Woodbine Corridor")} />
    <CustomInput type="checkbox" id="woodbine-lumsden-theft" label="Woodbine-Lumsden" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Woodbine-Lumsden")} />
    <CustomInput type="checkbox" id="wychwood-theft" label="Wychwood" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Wychwood")} />
    <CustomInput type="checkbox" id="yonge-eglinton-theft" label="Yonge-Eglinton" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Yonge-Eglinton")} />
    <CustomInput type="checkbox" id="yonge-stclair-theft" label="Yonge-St.Clair" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Yonge-St.Clair")} />
    <CustomInput type="checkbox" id="york-university-heights-theft" label="York University Heights" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "York University Heights")} />
    <CustomInput type="checkbox" id="yorkdale-glen-park-theft" label="Yorkdale-Glen Park" onChange={(e) => props.toggleFilter(e, "theftNeighbourhoodChoices", "Yorkdale-Glen Park")} />

  </Collapse>
  );

}

export default TheftNeighbourhoods;