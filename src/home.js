import logo from './logo.svg';
import './App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import homePic from './homePic.png'; // Tell webpack this JS file uses this image
console.log(homePic); // /logo.84287d09.png
function Header() {
  // Import result is the URL of your image
  
  return <img id = 'pic' src={homePic} alt="Logo" />;
  
}
export default Header;




