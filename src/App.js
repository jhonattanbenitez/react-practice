import React, { Component } from 'react';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'asdas1', name: "Jhon", age: 30},
      {id: '2sweassd', name: "Max", age: 29},
      {id: '3asd', name: "Carla", age: 28},
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
    const style = {
      backgroundColor: 'green',
      color: 'grey',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person, i) =>{
              return (<Person 
              key={person.id} 
              click={() => this.deletePersonHandler(i)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />)
            })}
        </div>

      );
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, i'm react app</h1>
          <p className={classes.join(' ')}>Hey i'm working</p>
          <button style={style} onClick={this.togglePersonsHandler}>Switch button</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
