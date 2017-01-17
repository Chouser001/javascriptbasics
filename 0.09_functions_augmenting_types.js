// TODO, spend more time practicing 

// from JavaScript the Good parts

Function.prototype.method = function (name, func) {
this.prototype[name] = func;
return this;
};

// By augmenting Function.prototype with a method method, we no longer have to type
// the name of the prototype property. 


// We can fix it by adding an integer method to Number.prototype. It uses either
// Math.ceiling or Math.floor, depending on the sign of the number:

Number.method('integer', function ( ) {
return Math[this < 0 ? 'ceiling' : 'floor'](this);
});
console.log((-10 / 3).integer( )); // -3


// JavaScript lacks a method that removes spaces from the ends of a string. That is an
// easy oversight to fix:
String.method('trim', function ( ) {
return this.replace(/^\s+|\s+$/g, '');
});
console.log('"' + " neat ".trim( ) + '"');

// The prototypes of the basic types are public structures, so care must be taken when
// mixing libraries. One defensive technique is to add a method only if the method is
// known to be missing:

// Add a method conditionally.
Function.prototype.method = function (name, func) {
if (!this.prototype[name]) {
this.prototype[name] = func;
}
};