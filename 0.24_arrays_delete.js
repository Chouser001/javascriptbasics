// leaves a whole but works
delete numbers[2];
// numbers is ['zero', 'one', undefined, 'shi', 'go']

// first argument is the array number to be delete
// second argument is the number of elements to be deleted. 
numbers.splice(2, 1);
// numbers is ['zero', 'one', 'shi', 'go']

// could slow down the process for large array lists