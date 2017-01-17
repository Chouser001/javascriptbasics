// The Method Invocation Pattern
// The pattern is an example of the ternary operator, 
// which returns the left side of the : if the condition is true, and the right side of the : if false.
// is a shorthand version of if/else.

// TODO , spend more time on this
var myObject = {
	value: 0,
	increment: function (inc) {//method inside of an object
		this.value += typeof inc === 'number' ? inc: 1;
	} 
};


myObject.increment();
console.log(myObject.value); //1

myObject.increment(2);
console.log(myObject.value); //3

