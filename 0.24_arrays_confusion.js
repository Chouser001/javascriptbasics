// The rule is simple: when the property names
// are small sequential integers, you should use an array. Otherwise, use an object

// Create an array of numbers.
var data = [4, 8, 15, 16, 23, 42];
// Define two simple functions. One will add two
// numbers. The other will multiply two numbers.
var add = function (a, b) {
return a + b;
};
var mult = function (a, b) {
return a * b;
};
// Invoke the data's reduce method, passing in the
// add function.
var sum = data.reduce(add, 0); // sum is 108
// Invoke the reduce method again, this time passing
// in the multiply function.
var product = data.reduce(mult, 1);
// product is 7418880

// Give the data array a total function.
data.total = function ( ) {
return this.reduce(add, 0);
};
total = data.total( ); // total is 108
// the array now begins to be a object