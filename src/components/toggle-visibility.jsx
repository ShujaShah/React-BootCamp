import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <button onClick={this.toggleVisibility}> Click Me</button>
            <h1>Hello there, i am visibile buddy.</h1>
          </div>
          <div class="col-md-4"></div>
        </div>
      );
    } else {
      return (
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <button onClick={this.toggleVisibility}>Click Me!</button>
          </div>
          <div class="col-md-4"></div>
        </div>
      );
    }
  }
}

export default Toggle;
