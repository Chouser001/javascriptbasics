// example 1

// Make a regular expression object that matches
// a JavaScript string.
var my_regexp = /"(?:\\.|[^\\\"])*"/g;

// Flag =g - means : Global (match multiple times; the precise meaning of this varies with the method)
 // Flag = i - means : Insensitive (ignore character case)
// Flag = m - means : Multiline (^ and $ can match line-ending characters)


// example 2

// RegExp constructor
// Make a regular expression object that matches
// a JavaScript string.
var my_regexp = /"(?:\\.|[^\\\"])*"/g;

// RegExp objects contain the properties listed 

// global -true if the g flag was used
// ignoreCase -true if the i flag was used
// lastIndex -The index at which to start the next exec match. Initially it is zero.
// multiline -true if the m flag was used
// source -The source text of the regular expression

// RegExp objects made by regular expression literals share a single instance:
function make_a_matcher( ) {
return /a/gi;
}
var x = make_a_matcher( );
var y = make_a_matcher( );
// Beware: x and y are the same object!
x.lastIndex = 10;
console.log(y.lastIndex); // 10