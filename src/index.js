import React from "react";
import ReactDOM from "react-dom";
import Food from "./components/food";
import ParentComponent from "./components/class-based-comp";
//import "bootstrap/dist/css/bootstrap.css";
import Visibility from "./components/visible";

const element = <h1>Hello World !!</h1>;

{
  /*console.log(element);*/
}

{
  /*ReactDOM.render(element, document.getElementById('root'));*/
}

ReactDOM.render(<Visibility />, document.getElementById("root"));
