import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './greet.js';
import NavbarPage from './menu.js';

import Hobby from './hobby.js';
import Button from './hobby.js';
import Button2 from './hobby.js';
import Counter from './Counter.js';
function App() {
  return (
    <div id = "app"> 
      Welcome to Tanuskitchen.com
      <div id = "row">
      <NavbarPage></NavbarPage>
      <Greet  message = " "></Greet>
     <Counter> </Counter>
      <Greet  message = " "></Greet>
      <Greet  message = " "></Greet>
      <Hobby></Hobby>
      <Button></Button>
      <Button2></Button2>
     

      </div>
    </div>
  );
}

export default App;
