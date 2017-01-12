function setLine () {
	// body...
	console.log("----------------------") 
}


setLine();

// Scopes --------- Global scope - then Local scope
// Global can enter local, local must be called to get out


var name = "kenn";
// var random -- hoist things means hang or raise?
function greetings () {
	name = "ralph"
	random = "bread"
	return "Hello " + name;
}

// what is called first, names what is not protected
console.log(greetings());
console.log(name);
console.log(random);
