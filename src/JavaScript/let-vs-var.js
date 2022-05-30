
// When we use the var keyword the variable is accessible within the block of function. That is it is scoped to the function. ->i.e., Scoped to Function 
// When we use the let keyword the variable is accessible only within the block of the code. That is it is scoped to the block. -> i.e., Scoped to Block
// There is another keyword known as Const for defining the constants. These are also scoped to the Block.
// We are always expected to use the let / const keyword while defining variables or constants. We only use var unless we have a valid reason to use it.

function MyFunction(){
    
    for (var i=0; i<=10; i++){
        console.log(i);
    }
    console.log(i); //here since console.log is defined outside the for block, still the variable 'i' it is accessible. 
}

MyFunction();



function MyFunction(){
    
    for (let i=0; i<=10; i++){
        console.log(i);
    }
    console.log(i); //here since console.log is defined outside the for block, 'i' is not accessible and hence we get error. 
}

MyFunction();