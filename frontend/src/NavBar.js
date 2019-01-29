import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  _openForm = () => this.setState({ isHidden: !this.state.isHidden });

  render() {
    return (
      <Navbar fixed="top">
        <Navbar.Brand href="/">bikesafeTO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#">Option 1</Nav.Link>
            <Nav.Link href="#">Option 2</Nav.Link>
            <Nav.Link href="#">Option 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );

  }
}

export default NavBar 