// IIFE - Immediatly Invoked Functional Expressions

// Build a function that is called greeting - it accepts a name
// and console logs "hello" + name


// Functional Expressions
var greeting = function (name) {
	console.log("Hello " + name);
}("Gary");
// greeting("Cameron");

// build a function that takes two numbers and adds them together
// and cosole.logs the total

var addNumb = (function(x, y){
	console.log(x + y);
})(1,2)

// addNumb(4,5);