// OBJECTS LITERAILS WITH METHODS
// function  inside of an object  


var player = {
	// properties 
	name 	: "",
	life 	: 100,
	damage 	: 0,
	hit1 	: 50,
	hit2	: 10,
	hasSword: true,

	//METHODS
	challenge : function () {
		console.log(this.name +" says, would anyone care to fight!!!!");
	},
	response  : function() {
		console.log(this.name + " Yes, I would like to fight!");
	},
	fight : function () {
		console.log(this.name + " throws the fist at " + target.name + "and does " + this.hit1 + " damage");
	}
}

// creat a new object 
var melkor = Object.create(player);
melkor.name = "Melkor";

var miley = Object.create(player);
miley.name = "Miley";

//Acces methods
// console.log(melkor.name);
// console.log(melkor.life)
// console.log(miley.name);
// console.log(miley.life);

melkor.challenge();
miley.response();
melkor.fight(miley.name);

