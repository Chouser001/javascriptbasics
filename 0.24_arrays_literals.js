var empty = [];
var numbers = [
'zero', 'one', 'two', 'three', 'four',
'five', 'six', 'seven', 'eight', 'nine'
];
empty[1] // undefined
numbers[1] // 'one'
empty.length // 0
numbers.length // 10

// numbers inherits from Array.prototype, whereas
// number_object inherits from Object.prototype, so numbers inherits a larger set of useful methods. 
// Also, numbers gets the mysterious length property, while number_object
// does not
// The object literal:
var numbers_object = {
'0': 'zero', '1': 'one', '2': 'two',
'3': 'three', '4': 'four', '5': 'five',
'6': 'six', '7': 'seven', '8': 'eight',
'9': 'nine'
};

var misc = [
'string', 98.6, true, false, null, undefined,
['nested', 'array'], {object: true}, NaN,
Infinity
];
misc.length // 10