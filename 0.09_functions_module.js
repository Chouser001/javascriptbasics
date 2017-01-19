//A module is a function or object
//that presents an interface but that hides its state and implementation. 
//By using functions to produce modules, we can almost completely eliminate our use of global variables

// TODO - Learn what is going on here

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

String.method('deentityify', function ( ) {
// The entity table. It maps entity names to
// characters.
var entity = {
quot: '"',
lt: '<',
gt: '>'
};
// Return the deentityify method.
return function ( ) {
// This is the deentityify method. It calls the string
// replace method, looking for substrings that start
// with '&' and end with ';'. If the characters in
// between are in the entity table, then replace the
// entity with the character from the table. It uses
// a regular expression (Chapter 7).
return this.replace(/&([^&;]+);/g,
function (a, b) {
var r = entity[b];
return typeof r === 'string' ? r : a;
}
);
};
}( ));

// 
console.log(
'&lt;&quot;&gt;'.deentityify( )); // <">

// ------------------------------------------------

var serial_maker = function ( ) {
// Produce an object that produces unique strings. A
// unique string is made up of two parts: a prefix
// and a sequence number. The object comes with
// methods for setting the prefix and sequence

// number, and a gensym method that produces unique
// strings.
var prefix = '';
var seq = 0;
return {
set_prefix: function (p) {
prefix = String(p);
},
set_seq: function (s) {
seq = s;
},
gensym: function ( ) {
var result = prefix + seq;
seq += 1;
return result;
}
};
};
var seqer = serial_maker( );
seqer.set_prefix = ('Q');
seqer.set_seq = (1000);
var unique = seqer.gensym( ); // unique is "Q1000"

// TODO - work on getting the output printed out

console.log();
