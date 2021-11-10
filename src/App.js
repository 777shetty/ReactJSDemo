import React from 'react';
import './App.css';
import logo from './assets/img/Bridgelabzlogo.png'

class App extends React.Component{
  url='http://www.bridgelabz.com/'
constructor(){
  super()
  this.state={
    userName:''
  }
}
onClick =($event)=>{
  console.log("save button is clicked!",$event);
  window.open(this.url,"_blank");
}
onNameChange=(event)=>{
  console.log("value is",event.target.value);
  this.setState({userName:event.target.value})
}
  render(){
    return(
      <>
      <div>
        <h1>Hello {this.state.userName}from bridgelabz</h1>
        <img src={logo} onClick={this.onClick}
        alt="The BridgelabzLogo: a bridge to employement through tab works"/>
      </div>
      <div>
        <input onChange={this.onNameChange}/>
      </div>
      </>
    );
  }
}

export default App;
