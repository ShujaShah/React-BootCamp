import React from "react";
import ReactDOM from "react-dom";
import Food from "./components/food";
import ParentComponent from "./components/class-based-comp";
import TypesOfFood from "./components/nestedComponents";
import "bootstrap/dist/css/bootstrap.css";
import FruitsVegetables from "./components/fruits-veg";
import Toggle from "./components/toggle-visibility";

const element = <h1>Hello World !!</h1>;

{
  /*console.log(element);*/
}

{
  /*ReactDOM.render(element, document.getElementById('root'));*/
}

//ReactDOM.render(<ParentComponent />, document.getElementById("root"));
//ReactDOM.render(<TypesOfFood />, document.getElementById("root"));
ReactDOM.render(<Toggle />, document.getElementById("root"));
