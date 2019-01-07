import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    /* btnClass = classes.Red; */
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return(
    <div className={classes.Cockpit}>
        <h1>Hi, i'm react app</h1>
        <p className={assignedClasses.join(' ')}>Hey i'm working</p>
        <button 
            className={btnClass}
            onClick={props.clicked}>Switch button</button>
    </div>);
};
export default cockpit;