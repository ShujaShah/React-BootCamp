import { Component } from "react";

const TypesOfFruits = () => {
  return (
    <div>
      <h2>Fruits: </h2>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruits />
    </div>
  );
};

class TypesOfFood extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food: </h1>
        <Fruits />
      </div>
    );
  }
}

export default TypesOfFood;
