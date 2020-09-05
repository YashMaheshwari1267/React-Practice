import React from 'react';
import classes from './cockpit.css';

const cockpit = (props) => {

    let btnClass = [classes.Button];
    
    if(props.showPersons){ 
        btnClass.push(classes.Red);
    }

    const assignedClasses=[];
    if(props.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>Hi, I am React App</h1>
            <button className={btnClass.join(' ')} onClick={props.toggle}> Toggle Persons </button>
            <p className={assignedClasses.join(' ')}>Is this working now.??</p>
        </div>
    )
} 

export default cockpit;