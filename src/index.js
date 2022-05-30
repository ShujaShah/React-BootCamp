import React from "react";
import  ReactDOM  from "react-dom";
import Food from "./components/food";

const element = <h1>Hello World !!</h1>

{/*console.log(element);*/}

{/*ReactDOM.render(element, document.getElementById('root'));*/}

ReactDOM.render(<Food/>, document.getElementById('root'));