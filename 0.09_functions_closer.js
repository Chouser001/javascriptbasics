// closer 
// TODO, learn how this works.

var myObject = function ( ) {
	var value = 0;

	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function ( ) {
		return value;
		}
	};
}( );

// We are not assigning a function to myObject. We are assigning the result of invoking
// that function.

// Create a maker function called quo. It makes an
// object with a get_status method and a private
// status property.38 | Chapter 4: Functions
var quo = function (status) {
	return {
		get_status: function ( ) {
			return status;
		}
	};
};
// Make an instance of quo.
var myQuo = quo("amazed");
console.log(myQuo.get_status( ));

// Define a function that sets a DOM node's color
// to yellow and then fades it to white.
var fade = function (node) {
	var level = 1;
	var step = function ( ) {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};

fade(document.body);


// It is important to understand that the inner function
//  has access to the actual variables of the outer functions and 
//  not copies in order to avoid the following problem:


// BAD EXAMPLE
// Make a function that assigns event handler functions to an array of nodes the
// wrong way.
// When you click on a node, an alert box is supposed to display the ordinal of the
// node.
// But it always displays the number of nodes instead.
var add_the_handlers = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (e) {
			alert(i);
		};
	}
};
// END BAD EXAMPLE


// BETTER EXAMPLE
// Make a function that assigns event handler functions to an array of nodes the
// right way.
// When you click on a node, an alert box will display the ordinal of the node.
var add_the_handlers = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (i) {
			return function (e) {
				alert(e);
			};
		}(i);
	}
};

