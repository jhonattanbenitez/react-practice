import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from '../containers/App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'asdas1', name: "Jhon", age: 30},
      {id: '2sweassd', name: "Max", age: 29},
      {id: '3asd', name: "Carla", age: 28},
      {id: '3ddwsd', name: "Carlos", age: 27},
    ],
    showPersons: false
  }
  
  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }
  deletePersonHandler = (personIndex) =>{
    /* const persons = this.state.persons.slice(); */
    const persons =[...this.state.persons];
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
        
           <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
          />
      );
      
      
     
    }
   
    return (
      
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons} 
            persons={this.state.persons}  
            clicked={this.togglePersonsHandler}
            />
          {persons}
        </div>
      
    );
  }
}

export default App;
