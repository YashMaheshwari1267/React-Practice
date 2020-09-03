import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = (props) => {
    return (
        <div className="Person">
            <h3 onClick={props.click}>I am {props.name} and I'm {props.age} years old .!!</h3>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Radium(person);