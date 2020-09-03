import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';
//import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asd', name : 'Yash',age : 22},
      {id: 'asf', name : 'Vipul', age : 23},
      {id: 'asg', name : "Vidit", age : 21}
    ]
  }

  // switchNamesHandler = () => {
  //   // console.log('Was clicked');
  //   //NOT : this.state.persons[0].name = 'Yash Maheshwari';
  //   this.setState({
  //     persons: [
  //       {name : 'Yash Maheshwari',age : 22},
  //       {name : 'Vipul', age : 23},
  //       {name : "Vidit", age : 20}
  //     ],
  //     showPerson : false
  //   }
  //   )
  // }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name : 'Yash Maheshwari',age : 22},
        {name : event.target.value , age : 23},
        {name : "Vidit", age : 20}
      ]
    }
    )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState(
      {showPerson: !doesShow}
    );
  }

  deleteNamesHandler = (id) => {
    const persons = [...this.state.persons];
    persons.splice(id, 1);
    this.setState({persons: persons});
  }


  render() {

    const style = {
        backgroundColor : 'green',
        color : 'white',
        font : 'inherit',
        border : '1px solid blue',
        padding : '8px',
        cursor : 'pointer',
        margin : '10px',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        } 
    };

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              key={person.id} 
              click={() => this.deleteNamesHandler(index)} />    
            })
          }
        </div>
      )

      style.backgroundColor = 'red';
      style[":hover"] = {
        backgroundColor: 'salmon',
        color: 'black' 
      }
    }

    const classes=[];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button style={style} onClick={this.togglePersonHandler}> Toggle Persons </button>
        <p className={classes.join(' ')}>Is this working now.??</p>
        { persons }  
      </div>
    );
  }
}

export default Radium(App);
