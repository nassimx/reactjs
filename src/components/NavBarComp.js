/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import logo from '../logo.png'
import Navbar from 'react-bootstrap/Navbar'

//* React fontawesome //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';

export default class NavBarComp extends Component {
    render() {
        return (
           
<Navbar bg="light" expand="sm">
<div className="container">
  <Navbar.Brand href="#"><img className="logo" src={logo} alt="Digital Future" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ml-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Services">Services</Nav.Link>
      <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
      
     
    </Nav>
  </Navbar.Collapse>
  </div>

</Navbar>
        )
    }
}
