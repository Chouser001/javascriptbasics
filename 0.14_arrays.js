
// this is how to create a JS array
// arrays start at 0 like strings. 
// arrays can have stirngs, numbers, booliens 
var names = ["paul", "gavin", "verne", "lisa", "kenn"];
var nums = [1, 2, 3, 4, 5, 6, 4501];
var mixed = ["dog", false, 6, "squirrel", 2];
console.log(names[2]);
console.log(nums[6]);
console.log(mixed[3]);
// can we use a for in loop to iterate and console log each name in names?
console.log("------------------");
// for (i = 0; i < footballTeam.lenght; i++) in the for in loop
for (name in names){
	console.log(names[name]);
}

console.log("------------------");
var favCandy = ["snicker's", "twix", "payday", "take 5"];
// console.log(favCandy);
console.log(favCandy);
console.log("------------------");
//.push adds item at the end
favCandy.push("peanut butter cups");
console.log(favCandy);
//.pop removes the end
favCandy.pop(); 
console.log("------------------");
console.log(favCandy);
console.log("------------------");
// .slice takes a snap shot of the array - no realy changes - returns the values up to the last number
console.log(favCandy.slice(0,3));
console.log(favCandy);

console.log("------------------");
// how to remove a specific element of an array 
//.indexOf will return the index of where a value is located in the array
console.log(favCandy.indexOf("snicker's"));
//.splice will allow us to remove the item from the array permenantly 
favCandy.splice(0,1); 
console.log(favCandy);