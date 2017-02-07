// The length property is the largest integer property name in the array plus one. This is
// not necessarily the number of properties in the array:
var myArray = [];
myArray.length // 0
myArray[1000000] = true;
myArray.length // 1000001
// myArray contains one property.

// set limits to an array
numbers.length = 3;
// numbers is ['zero', 'one', 'two']

// adding to the end of the array 

numbers[numbers.length] = 'shi';
// numbers is ['zero', 'one', 'two', 'shi'

// OR

numbers.push('go');
// numbers is ['zero', 'one', 'two', 'shi', 'go']