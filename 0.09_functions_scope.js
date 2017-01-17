// limits visibility and lifetimes of variables and parameters

var foo = function ( ) {
var a = 3, b = 5;
var bar = function ( ) {
var b = 7, c = 11;
// At this point, a is 3, b is 7, and c is 11
a += b + c;
// At this point, a is 21, b is 7, and c is 11
};
// At this point, a is 3, b is 5, and c is not defined
bar( );
// At this point, a is 21, b is 5
};

// JavaScript does not have block scope (list of statements wrapped in {} braces)
// JavaScript does have function scope / parameters in functions can be hidden

// So instead, it is best to declare all of the variables used
// in a function at the top of the function body