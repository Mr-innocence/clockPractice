import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Components />
        <Clock />
        
        
      </div>
    );
  }
}

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      comment: "Hello"
    };
  }

  componentDidMount(){
    this.timeId = setInterval(
      ()=>{this.tick()}
      , 1000)
  }

  tick(){
    this.setState({
      date: new Date(),
      comment: this.state.comment
    })
  }


  componentWillUnmount(){
    clearInterval(this.timeId);
  }



  render(){
    return(
      <div>
        <h1>The time now is : {this.state.date.toLocaleTimeString()}</h1>
        <p>{this.state.comment}</p>

      </div>

    );
  }
}





class Head extends Component{
  render(){
    return(
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
    )
  }
}

class Components extends Component{
  render(){
    return(
      <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!!!
        </p>
    )
  }
}

export default App;
