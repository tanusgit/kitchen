import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
  function Button() {
    return (
      <AwesomeButtonSocial
        cssModule={AwesomeButtonStyles}
        type="facebook"
        url="https://facebook.com">
        Social media
      </AwesomeButtonSocial>
    );
  }
function Hobby() {
  return (
    <button id = "hobby">
      About us
    </button>
  );
}
function Button2() {
  return (<AwesomeButton type="default">Button</AwesomeButton>);
}

export default Button2;

