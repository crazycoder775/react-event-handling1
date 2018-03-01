import React, { Component } from "react";
import { render } from "react-dom";
import Person from "./Person";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  state = {
    persons: [
      { id: "12as", name: "Regina", age: "25" },
      { id: "12af", name: "Kajal", age: "21" },
      { id: "12ag", name: "Rakul", age: "27" }
    ],
    showPerson: false
  };
  toggleState = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };
  render() {
    return (
      <div style={styles}>
        <button className="btn btn-primary m-5" onClick={this.toggleState}>
          toggle
        </button>
        {this.state.showPerson === true ? 
        <div>
        {this.state.persons.map(person=>{
          return <Person name={person.name} age={person.age} />})}</div> : null}
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
