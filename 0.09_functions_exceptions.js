// Exceptions
// throw statements stop the execution of a function and are used to detect errors

// TODO, spend more time on this

var add = function (a, b) {
if (typeof a !== 'number' || typeof b !== 'number') {
throw {
name: 'TypeError',
message: 'add needs numbers'
};
}
return a + b;
}


// Make a try_it function that calls the new add
// function incorrectly.
var try_it = function ( ) {
try {
	add("seven");
} catch (e) {
console.log(e.name + ': ' + e.message);
}
}
try_it( );

// A try statement has a single catch block that will catch all exceptions. 