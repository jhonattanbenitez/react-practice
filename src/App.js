import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: "Jhon", age: 30},
      {name: "Max", age: 29},
      {name: "Carla", age: 28},
    ]
  }
  switchNameHandler = (newName) =>{
    //console.log("clicked");
    this.setState({persons: [
      {name: newName, age: 30},
      {name: "Max", age: 29},
      {name: "Carla", age: 27},
    ]});
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm react app</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Jhonattan')}>Switch button</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Jhon!')}>My hobbies: Games
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
