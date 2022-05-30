import React, { Component } from "react";

const ChildComponent = () => {
  return (
    <div>
      <p>This is the child Component</p>
    </div>
  );
};

class ParentComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the Parent Component</h1>
        <ChildComponent />
      </div>
    );
  }
}

export default ParentComponent;
