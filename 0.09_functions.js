function setLine () {
	// body...
	console.log("----------------------") 
}



function hello () {
	console.log("Hello World");
}

hello();

// making a function with greeting
function greeting(name){
	// console.log() should not be called by a console.log('')
	return "Greetings " + name;
	
}

var addGreeting = greeting("Cam") + ", how are you doing today";
console.log(addGreeting);


// adding number to function

function printNumber(){
	return 1;
}

printNumber();

// math

function sumNum(x, y){
	return x + y;
}


function divNum(x, y){
		return x / y;
} 

function mulNum(x, y){
	return x * y;
}

function subNum(x, y){
	return x - y;
}

//console.log(num1); - wont work because it is calling var inside of function - not a global var
// console.log(sumNum + divNum + mulNum + subNum); - This will print out the functions - Why?

function subTwoNum (x, y) {
	var diff = x - y;
	return diff; 
}

// subTwoNum(4,3);
// subNum(4,3);
// sumNum(4,3);
// divNum(4,3);
// mulNum(4,3);

function calculatePriceIndiana (quantity, price, tax) {
	// var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;

	return (totalPrice);
}

console.log(calculatePriceIndiana(17, 5, 0.07));


// built in Objects example
var today = new Date();
console.log(today.toDateString());

function checkOdd (num) {
	if (num % 2 === 0) {
		return "This number " + num + " is even";
	}
	else {
		return "This number " + num + " is odd";
	}
	// if odd there will be a remainder of 1
}

console.log(checkOdd(200000));

function divByThree (num) {
	if (num % 3 === 0) {
		return "This number " + num + " is 'three'ish'";
	}
	else {
		return "This number " + num + " is not 'three' friendly";
	} 
}divByThree

console.log(divByThree(36));


var name 
var adamGreet = " bummer life dude";
var samGreet = " ready for the climb?";

function greeting2 (name) {
if (name == "Adam") {
	return name + adamGreet;
} else if (name == "Sam"){
	return name + samGreet
}
}

var addGreeting = greeting2("Adam");
console.log(addGreeting)

// Write a function with two strings as parameters.
//         The function should concatenate the string.

// Write a function that will help me easily calculate monthly bills.

// Write a function that takes quantity, price, tax and an item
// The function should take the quantity, price, tax and the item name and return
// a response similar to this.
// --150 hotdogs will cost you $145 (your math may not be perfect and may
//  potentially return 145.457.  If that is the case, don’t sweat it.


// Gold
function hotDogs (quantity, price, tax, name) {
	// var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;

	return ("total price is " + Math.round(totalPrice) + " for the"+ name);
}

console.log(hotDogs(150, .92, 0.07, " hotDogs"));

// Silver
function monBills (gas, water, electric, internet, food) {
	var utility = gas + water + electric;
	var other = internet + food
	var totalsBil = utility + other;
	return totalsBil;
}

console.log(monBills(10, 10, 10, 10, 10));

// Bronze

function myName (firstName, lastName) {
	fullName = firstName +" "+ lastName
	console.log(fullName);
}
myName("Cameron", "Houser");

setLine();

function twoStings (name1, name2) {
	return name1 +" " + name2
}

console.log(twoStings("nevermore", "nevermore"))

setLine();

