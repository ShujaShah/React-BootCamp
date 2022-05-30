
//this always returns the reference to the current object in other programming languages.

const person ={
    name: 'Shuja',
    walk () {
        console.log(this); // here you will see the person object on the console i.e., name and function.
    }
}

person.walk();

const walk = person.walk.bind(person); // we use bind method to set the value of 'this' permanently.
walk();