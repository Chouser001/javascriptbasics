var world = "Hello World";
console.log(world);
/*
console.log(1.2 * 5); // anything after . = is a float
console.log(56 - 12);
console.log(12 / 2);
console.log(12 % 5);
*/

//bronze 
console.log(37);
console.log(2010);
console.log("sisters =",2);
console.log("brothers =",6);

//Silver 
console.log(3%2);
console.log(5%3);
console.log(30%18);

//GOLD 
console.log(Math.round(5*3.4));
console.log(Math.pow(5,3));
console.log(3e1); // 3 x 10
console.log(3e3); // 3 x 10 x 10 x 10


var str = 'fee fi fo fum';
var myArray = str.replace(/\s/g, '');
console.log(myArray);

var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);