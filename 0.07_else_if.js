// list of conditions 
	// Voting, Drinking, Renting a car
		// three conditoins here, maybe should limit to less per if statement

var age = 26;
var isVote = "You can vote!";
var isDrink = "You can drink, but you cant vote";
var isRent = "You can rent a car for cheap."

if (age >= 18 && age < 21){
	console.log(isVote);
} else if (age >= 21 && age < 25){
	console.log(isDrink);
} else if (age => 25){
		console.log(isRent);
}else {
	console.log("You can't do nothing man");
}

//CHALLENGE: GOLD
//1. Write a program that prompts your users in the browser to enter a
//number from 1 to 5 about how optimistic they are about the Colts next year.
//2. Have a different response for each number.
//*HINT*
// you have to build this in relp.it 
//Research prompt

/*
var happyMeter = prompt("Please rate from 1-5 optimistic you are about the Colts winning big next year");

switch (happyMeter) {
 	case "1":
 		 console.log("Ok, not much faith huh?");
 		break;
 	case "2":
 		console.log("Ok, some faith in the team is good.");
 		break;
 	case "3":
 		console.log("Nice, how can we increase your optimisim?");	
 		break;
 	case "4":
 		console.log("Go Colts! We know they can do great!");	
 		break;
 	case "5":
 		console.log("Maximum faith and optimisim!!!!!!");
 		break;
 	default:
 		console.log("Error, please try again");
 		break;
 }
*/

// CHALLENGE: SILVER
/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. 
 */
 
/*
 var patriotsWins = 3
 var coltsWin = 1

 if (patriotsWins > coltsWin){
 	console.log("they are so lame, kicking a down man");
 } else if (patriotsWins < coltsWin) {
 	console.log("HA HA HA HA! Colts are better!!!");
 } else {
 	console.log("Can't beat us!!! losers!!!")
 }
 */

//CHALLENGE: BRONZE
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"


var firstName = "name";
var islogin = true;
//var isadmin = true;
//var isManager = true;
//var isemployee = true;
//var admincheck = 

if (islogin){
	if (userLogin){
		console.log("Welcome "+firstName);
	} else if (isAdmin)
}
