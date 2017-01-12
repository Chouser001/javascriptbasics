var footballTeam = "Packers";
// for (i = 0; i < footballTeam.lenght; i++)
for (var letter in footballTeam){
	console.log(footballTeam[letter]); // letter is the loop control variable in this case
}

console.log("---------------")

var tvShow = "Star Wars";
for (var char in tvShow){
	console.log(tvShow[char]);
}

console.log("---------------")

// use conditional to check if the letter at an index is a vowel
// == "a" || ...

//TODO - play around with this to fix the logic of the conditional
var vowelcount = 0;
var favFood = "pizza";
console.log(favFood.length);
for (letter in favFood) {
	if (favFood[letter].toLowerCase() == "a" || ) { // repeat through vowels
		vowelcount++
	}
}	
console.log("There are " + vowelcount + " vowels in " + favFood);
