import react from 'react'
import './App.css';
import logo from './assets/img/Bridgelabzlogo.png'

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
        <img src={logo}
        alt="The BridgelabzLogo: a bridge to employement through tab works"/>
      </div>
    );
  }
}

export default App;
