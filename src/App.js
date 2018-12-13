import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: "Jhon", age: 30},
      {name: "Max", age: 29},
      {name: "Carla", age: 28},
    ],
    showPersons: false
  }
  
  nameChangedHandler = (event) =>{
    this.setState({persons: [
      {name: "Max", age: 30},
      {name: event.target.value, age: 29},
      {name: "Carla", age: 27},
    ]});
  }
  deletePersonHandler = (personIndex) =>{
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  togglePersonsHandler = () => {
     const togglePerson = this.state.showPersons;
     this.setState({showPersons: !togglePerson});
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, i) =>{
              return (<Person 
              key={i} 
              click={() => this.deletePersonHandler(i)}
              name={person.name} 
              age={person.age}/>)
            })}
        </div>

      );
    }
    return (
      <div className="App">
        <h1>Hi, i'm react app</h1>
        <button onClick={this.togglePersonsHandler}>Switch button</button>
        {persons}
      </div>
    );
  }
}

export default App;
