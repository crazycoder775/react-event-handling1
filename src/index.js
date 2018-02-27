import React, { Component } from "react";
import { render } from "react-dom";
import Person from "./Person";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  state = {
    showPerson: false
  };
  toggleState = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };
  render() {
    return (
      <div style={styles}>
        <button onClick={this.toggleState}>toggle</button>
        {this.state.showPerson === true ? <Person /> : null}
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
