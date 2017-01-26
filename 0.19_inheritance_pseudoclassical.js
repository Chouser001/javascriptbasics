// Pseudoclassical

// A what if look

// this.prototype = {constructor: this};
// Function.method('new', function ( ) {
// // Create a new object that inherits from the
// // constructor's prototype.
// var that = Object.create(this.prototype);
// // Invoke the constructor, binding –this- to
// // the new object.
// var other = this.apply(that, arguments);
// // If its return value isn't an object,
// // substitute the new object.
// return (typeof other === 'object' && other) || that;
// });

// var Mammal = function (name) {
// this.name = name;
// };
// Mammal.prototype.get_name = function ( ) {
// return this.name;
// };

// Mammal.prototype.says = function ( ) {
// return this.saying || '';
// };

// Function.method('inherits', function (Parent) {
// this.prototype = new Parent( );
// return this;
// });
// var Cat = function (name) {
// this.name = name;
// this.saying = 'meow';
// }.
// inherits(Mammal).
// method('purr', function (n) {
// var i, s = '';
// for (i = 0; i < n; i += 1) {
// if (s) {
// s += '-';
// }
// s += 'r';
// }
// return s;
// }).
// method('get_name', function ( ) {
// return this.says( ) + ' ' + this.name +
// ' ' + this.says( );
// });