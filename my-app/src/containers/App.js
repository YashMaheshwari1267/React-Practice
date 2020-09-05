import React, { Component } from 'react';
import classes from '../containers/App.css';
import Cockpit from '../components/Cockpit/cockpit';
//import Radium from 'radium';
import Persons from '../components/Persons/Persons';
//import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asd', name : 'Yash',age : 22},
      {id: 'asf', name : 'Vipul', age : 23},
      {id: 'asg', name : "Vidit", age : 21}
    ],
    showPerson: false
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
    let persons = null;

    if(this.state.showPerson){
      persons = <Persons 
            persons={this.state.persons} 
            clicked={this.deleteNamesHandler} />
        
      // style.backgroundColor = 'red';
      // style[":hover"] = {
      //   backgroundColor: 'salmon',
      //   color: 'black' 
      // }
    }

    
  
    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPerson}
          persons={this.state.persons}
          toggle={this.togglePersonHandler} />
        {persons} 
      </div> 
    )
  }
}

export default App;
