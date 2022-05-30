import { Component } from "react";

const TypesOfFruits = () => {
  return (
    <div>
      <div class="row">
        <div class="col-md-4">
          <Citrous />
        </div>
        <div class="col-md-4">
          <NonCitrous />
        </div>
      </div>
    </div>
  );
};

const Citrous = () => {
  return (
    <div>
      <h3>-Citrous:</h3>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grape Fruit</li>
      </ul>
    </div>
  );
};

const NonCitrous = () => {
  return (
    <div>
      <h3>-Non-Citrous:</h3>
      <ul>
        <li>Apples</li>
        <li>BlueBerries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <h2>
        <i>Fruits:</i>
      </h2>
      <TypesOfFruits />
    </div>
  );
};

const Vegetables = () => {
  return (
    <div>
      <h2>
        <i>Vegetables</i>
      </h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  );
};

class FruitsVegetables extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food: </h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}

export default FruitsVegetables;
