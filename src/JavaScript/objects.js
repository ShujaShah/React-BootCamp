// objects in JavaScript are collection of key - value paires.
// A function defined within the object is referred to as Method.

const person = {
    name : 'Shuja',
    walk : function() {}, // Here we use a method, normal way to declare a function.
    talk() {} //another cleaner way to define a method, here we drop the colon and the function keyword. 
}

//Now there are two ways to access the objects : by dot (.) method and the Bracket ([]) method.

person.talk(); // we use the dot method when ahead of time we know what property we are going to access.
person['name'] = 'Shah'; // we use the bracket method when ahead of time we don't know what property or method we are going to access.