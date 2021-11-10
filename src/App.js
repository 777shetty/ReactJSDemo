import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
constructor(){
  super()
  this.state={
    title:'Hello from Bridgelabz'
  }
}
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo192.png}
        alt="The BridgelabzLogo: a bridge to employement through tab works"/>
      </div>
    );
  }
}

export default App;
