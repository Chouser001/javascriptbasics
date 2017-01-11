//booleans express either
//true or false
//on or off
var tired = false;
var hungry = true;

// = assigns information into a variable
// == compares value is equal true? (returns true or false)
// === evaluates both value and type of variable
var isTrue = 1 == "1";
var compare = "3" === 3;

//console.log(compare);

/*
Operator 	Meaning
= 			Equality
==			Equality
===			Strict equality
!=			Inequality
!==			Strict inequality
>			greater than
<			lesser than
>=			Greater than or equal
<= 			Less than or equal
*/
/*
var num1 = 35;
var num2 = "35";
console.log(num1 !== num2);

var foo = true;

console.log(!foo);
*/

/*CHALLENGE: Gold 
I want to order some Colts gear online(Jona, go ahead with the Bengals(boo)), and I'm not sure 
which courier service to use yet. I want to know which one to use
for Next Day Air, 2 day air, 3 day ground, and whenever. Can you write
an if/else statement that helps me pick the best one? It's just your opinion here.
*/
 
var orColtsGe = false
var orBenGe = true 
var nexDayAir = 1
var twoDayAir = 2
var threDayAir = 3

if (orColtsGe == true && orBenGe == true) {
	if  (nexDayAir === 1){
		console.log("Gear will be here tomorrow!");
	}
	else if (twoDayAir === 2) {
			console.log("Gear will be in in two days");
	} else {
		console.log("Gear will be here in three days");
	}
}
else if (orColtsGe == true && orBenGe == false){
		if (nexDayAir === 1) {
			console.log("You get Colts tomorrow");
		}
		else if (twoDayAir === 2) {
			console.log("You get Colts in two days");
		} else { 
			console.log("Colts gear in three days");
		}
}
else if (orColtsGe == false && orBenGe == true){
		if (nexDayAir === 1) {
			console.log("You get Bengals tomorrow");
		}
		else if (twoDayAir === 2) {
			console.log("You get Bengals in two days");
		} else { 
			console.log("Bengals gear in three days");
		}
} else {
	console.log("Nothing coming in the mail, sorry");
}