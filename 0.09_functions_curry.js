// example from 
// http://conceptf1.blogspot.com/2014/03/currying-in-javascript.html

// For example, a function takes A, B, C arguments and returns R as result i.e
//  { A , B , C => R } currying allow you to change it to a function which 
//  takes only A  as argument and returns you a function which take B as 
//  argument and this second function takes B as argument and returns a function 
//  which takes C as arguments and this last method takes the argument C and 
//  returns you the Result R

var teacher = function(teacherName){
    return function(subject){
    console.log(teacherName+' teaches '+subject);
    }
}

var aliceTeach= teacher('Alice');

aliceTeach('JavaScript');
aliceTeach('Data Structures');



function add(x) {
    return function (y) {
        console.log('Sum is : ' + (x + y));
    }
}

var addFourTo = add(4);

addFourTo(10);
addFourTo(21);
addFourTo(83);

addFourTo(4);

// Now simply you need to pass one 
// argument after binding first argument to a fixed value of 4 to a curried function.


// var add1 = add.curry(1);
// console.log(add1(6));



// Function.method('curry', function ( ) {
// var args = arguments, that = this;
// return function ( ) {
// return that.apply(null, args.concat(arguments));
// };
// }); // Something isn't right...



// Function.method('curry', function ( ) {
// var slice = Array.prototype.slice,
// args = slice.apply(arguments),
// that = this;
// return function ( ) {
// return that.apply(null, args.concat(slice.apply(arguments)));
// };
// });