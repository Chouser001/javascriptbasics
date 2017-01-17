// when a function is not the property of an object, then it is invoked as a function
// TODO , spend more time on this

var myObject = {
	value: 0,
	increment: function (inc) {//method inside of an object
		this.value += typeof inc === 'number' ? inc: 1;
	} 
};


// myObject.increment();
// document.writeln(myObject.value); //1

// myObject.increment(2);
// document.writeln(myObject.value); //3

var sum = add (3, 4); // sum is 7


// Augment myObject with a double method.
myObject.double = function ( ) {
	var that = this; // Workaround.
	var helper = function ( ) {
		that.value = add(that.value, that.value);
	};
	helper( ); // Invoke helper as a function.
};

// Invoke double as a method.
myObject.double( );
console.log(myObject.getValue( )); // 6