// We start by making a function that will produce objects. We will give it a name that
// starts with a lowercase letter because it will not require the use of the new prefix. The
// function contains four steps:
// 1. It creates a new object. There are lots of ways to make an object. It can make an
// object literal, or it can call a constructor function with the new prefix, or it can
// use the Object.create method to make a new instance from an existing object,
// or it can call any function that returns an object.
// 2. It optionally defines private instance variables and methods. These are just ordinary vars of the function.
// 3. It augments that new object with methods. Those methods will have privileged
// access to the parameters and the vars defined in the second step.
// 4. It returns that new object.
var constructor = function (spec, my) {
// var that, other private instance variables;
my = my || {};
// Add shared variables and functions to my
// that = a new object;
// Add privileged methods to that
return that;
};
// my.member = value;

var methodical = function ( ) {
// ...
};
// that.methodical = methodical;
// can call using methodical() ------- dont need to use this.methodical()
// (A simplification is to replace spec with a single value. This is useful when
// the object being constructed does not need a whole spec object.)
var mammal = function (spec) {
var that = {};
that.get_name = function ( ) {
return spec.name;
};
that.says = function ( ) {
return spec.saying || '';
};
return that;
};
var myMammal = mammal({name: 'Herb'});

// Cat constructor will call the Mammal constructor, letting Mammal do most of
// the work of object creation, so Cat only has to concern itself with the differences:
var cat = function (spec) {
spec.saying = spec.saying || 'meow';
var that = mammal(spec);
that.purr = function (n) {
var i, s = '';
for (i = 0; i < n; i += 1) {
if (s) {
s += '-';
}
s += 'r';
}
return s;
};
that.get_name = function ( ) {
return that.says( ) + ' ' + spec.name +
' ' + that.says( );
return that;
};
}
var myCat = cat({name: 'Henrietta'});
console.log();

// Super method
Object.method('superior', function (name) {
var that = this,
method = that[name];
return function ( ) {
return method.apply(that, arguments);
};
});
//Example
var coolcat = function (spec) {
var that = cat(spec),
super_get_name = that.superior('get_name');
that.get_name = function (n) {
return 'like ' + super_get_name( ) + ' baby';
};
return that;
};
var myCoolCat = coolcat({name: 'Bix'});
var name = myCoolCat.get_name( );
// 'like meow Bix meow baby