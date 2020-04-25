
import logo from './logo.svg';
import './App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.css';


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">TastyFood</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavLink href="#features">Recipes</NavLink>
      <NavLink href="#pricing">About Us</NavLink>
      <NavDropdown title="Cuisines" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Asian</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">American</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Mexican</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Italian</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <NavLink href="#deets">Contact Us</NavLink>
      <NavLink href="#memes">
        Herbs
      </NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    );
  }
}

export default NavbarPage;