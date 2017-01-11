// if/else
/*var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = true;
var elevatorStuckAndWeAreOnIt = true;
var elevatorNumber = 13;


if (elevatorUp === true){
	console.log("Going up");
	console.log("Thanks for riding with us");
} else {
	console.log("Going down");
}

// Write one for 

if (elevatorBroken) {
	console.log("Man, how long have you been here?");
} else{
	console.log("It still works!");
}

if (elevatorStuckAndWeAreOnIt && elevatorBroken) {
	console.log("The stench coming from your backside is bad!");
} else {
	console.log("So glad we can get off");
}
*/
//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 3000;
var debt = 4500;
var diffMoney = bankAccount - debt;

if (diffMoney > 0) {
	console.log("You have enough to pay off your debt!");
} else {
	console.log("You need more cash fast!");
}

//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"

var islogin = true;
var hasAccount = false;
var firstName = "Cameron";


if (islogin && hasAccount){
	console.log("You have signed in " + firstName);
} else {
	console.log("Something is wrong " +firstName + ", please try again.");
}

//CHALLENGE: Bronze
//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
//Come up with a simple example

var bath = true;
var stench = true;

var clean = bath && stench;
var isstinky = bath && stench;


console.log(clean);
