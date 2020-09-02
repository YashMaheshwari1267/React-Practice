import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name : 'Yash',age : 22},
      {name : 'Vipul', age : 23},
      {name : "Vidit", age : 21}
    ]
  }

  switchNamesHandler = () => {
    // console.log('Was clicked');
    //NOT : this.state.persons[0].name = 'Yash Maheshwari';
    this.setState({
      persons: [
        {name : 'Yash Maheshwari',age : 22},
        {name : 'Vipul', age : 23},
        {name : "Vidit", age : 20}
      ]
    }
    )
  }

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

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button onClick={this.switchNamesHandler}> Switch Names </button>
        <p>Is this working now.??</p>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed={this.changeNameHandler}
            >My Hobbies : Cricket </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />  
      </div>
    );
  }
}

export default App;
