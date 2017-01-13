//Reference 
// Objects are passed around by reference. They are never copied
// (definitions from developer.mozilla.org)

var stooge = {
    "first-name": "Cameron",  
    "last-name": "Houser"
};

console.log(stooge);

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
    // nick is 'Curly' because x and stooge
    // are references to the same object
var a = {}, b = {}, c = {};
    // a, b, and c each refer to a
    // different empty object
a = b = c = {};
    // a, b, and c all refer to
    // the same empty object

//see for yourself
console.log(stooge);
console.log(x);
console.log(stooge.nickname);