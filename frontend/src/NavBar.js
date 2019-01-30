import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'

export default class NavBar extends React.Component {

	constructor() {
		super()
		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false
		}
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="lg" fixed="top" id="mainNav">
					<NavbarBrand href="/">bikesafeTO</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} id="navbarResponsive" navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Option 2</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Option 3</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Option 4</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
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