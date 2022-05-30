//we use map method to render the lists in react.

const colors = ['red', 'green', 'blue'];
var items = colors.map( color => '<li>' + color + '</li>'); // this map method returns a new array. Used var to not get error.
const items = colors.map (color => `<li> ${color} </li>`); // same as above line but here we are using template literal to make our code cleaner. 
console.log(items);