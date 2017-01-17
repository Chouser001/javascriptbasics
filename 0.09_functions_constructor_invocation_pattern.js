// The Constructor Invocation Pattern
// TODO spend more time on this


// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function (string) {
this.status = string;
};
// Give all instances of Quo a public method30 | Chapter 4: Functions
// called get_status.
Quo.prototype.get_status = function ( ) {
return this.status;
};
// Make an instance of Quo.
var myQuo = new Quo("confused");
console.log(myQuo.get_status( )); // confused

// Use of this style of constructor functions is not recommended.