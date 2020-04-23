import React from 'react';
import logo from './logo.svg';
import './App.css';

function Greet(props) {
  return (
    <button id = "greet">
    {props.message}
    Recipe
    </button>
  );
}

export default Greet;
