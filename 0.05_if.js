
var isOn = false;
var isHot = false;



if(isOn === true) {
	console.log("This light is on, its too bright, dude.");
}

if (isOn){
	console.log("Dude, turn that music off!");
}

// && = and 
if(isOn && isHot){
	console.log("Dude, that music on, and it is so hot.");
}

// { || = or }
if(isOn || isHot){
	console.log("Dude, that music is on, it's loud, and it is NOT hot.");
}

// {! = not}
if(!isHot){
	console.log("It is not hot.");
}