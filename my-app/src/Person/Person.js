import React from 'react';

const person = (props) => {
    return (
        <div>
            <h3>I am {props.name} and I'm {props.age} years old .!!</h3>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;