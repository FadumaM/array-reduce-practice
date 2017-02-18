var data = [15, 3, 20]

// accumulator - is the item that was return last (its the previous item in te array)
// To begin with beacuse it's the very first time that the function as run, you will need to provide a value to the accumulator,

// item - is the item in the array its currently loop through

var reducer = function(accumulator, item ){
  return accumulator + item;
}

//  you will an initial value to start of with
var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log("The sum is", total)


//  This whole thing is an expression - as it evaluates to a specific value
//  Array.reduce will evaluate to te final value of the accumulator