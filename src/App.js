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
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm react app</h1>
        <button>Switch button</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: Games</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
