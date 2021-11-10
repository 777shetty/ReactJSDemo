import React from 'react';
import './App.css';
import logo from './assets/img/Bridgelabzlogo.png'

class App extends React.Component{
  url='http://www.bridgelabz.com/'
constructor(){
  super()
  this.state={
    title:'Hello from Bridgelabz'
  }
}
onClick =($event)=>{
  console.log("save button is clicked!",$event);
  window.open(this.url,"_blank");
}
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}
        alt="The BridgelabzLogo: a bridge to employement through tab works"/>
      </div>
    );
  }
}

export default App;
