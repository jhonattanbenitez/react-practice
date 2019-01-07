import React, {Component} from 'react'
import Person from './Person/Person';
class Persons  extends Component {
    render(){
      return  this.props.persons.map((person, i) =>{
        return (
         <Person 
         key={person.id}
         click={() => this.props.clicked(i)}
         name={person.name} 
         age={person.age}
         changed={(event) => this.props.changed(event, person.id)}
         />
       )
     }
);
    }
}
export default Persons;
