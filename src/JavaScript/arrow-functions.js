
// old javascript code to defing the function.
const square = function(number){
    return number * number;
}

// arrow function of the above function.

const squares = () => {         //arrow function syntax
    return number * number;
}  

const cube = (number)  => number * number * number;  // Simplified arrow funciton if we are having just one line of statement.
console.log(cube(5));

// general example to use arrow function.
const jobs = [
    {id : 1 , isActive : true},
    {id : 2 , isActive : true},
    {id : 3 , isActive : false}
]

const ActiveJobs = jobs.filter(function(job){return job.isActive;}); //using normal function.
const ActiveJob = jobs.filter(job => job.isActive ); //using arrow function.