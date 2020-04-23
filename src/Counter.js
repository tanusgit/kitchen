import React from 'react'; 
class Counter extends React.Component{ 
constructor()
{ 	
	super(); 
	this.name = "tanuskitchen.com";
	this.counter = 0; 
	this.showCount = this.showCount.bind(this); 
  	this.increaseCount = this.increaseCount.bind(this); 
 	 this.decrease = this.decrease.bind(this); 
 } 
 
 showCount()
 {
	 alert(this.counter); 
 } 
 
 increaseCount()
 {
 	this.counter++;
 	this.forceUpdate();
 }
 
  decrease()
 {
 	this.counter--;
 	this.forceUpdate();
 }
 
 render()
 { 
 return( 
 <div id="counter">Hello  
 <h1> {this.name}</h1>
  counter ={this.counter} 
 <button onClick = {this.showCount}>Click</button>
 
  <button onClick = {this.increaseCount}>Increase</button>
  
   <button onClick = {this.decrease}>Decrease</button>
 </div> 
 )
 

 
  } } export default Counter; 
