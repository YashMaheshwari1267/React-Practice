import React from 'react';
import persons from './Person.css'
//import styled from 'styled-components';
//import Radium from 'radium';

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }

    return (
        <div className={persons.Person} >    
            <h3 onClick={props.click}>I am {props.name} and I'm {props.age} years old .!!</h3>
            <p>{props.children}</p>
            <input type="text"  defaultValue={props.name}></input>
        </div>
    )
}

export default person;