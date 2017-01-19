// JSON is an acronym for JavaScript Object Notation
// Nested arrays
var names = [["james,", "man", 56], ["tim", true, 67]];
// console.log(names[1][2])

// key value paring -  key : value
var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price":12.50,
		"tags": ["home", "green", "vinyl"]
	},

		{
		"id": 2,
		"name": "Green Door",
		"price":12.50,
		"tags": ["home", "green", "cheap wood"]
	},

	{
		"id": 3,
		"name": "Black Door",
		"price":12.50,
		"tags": ["home", "green", "cheap wood"],
		"value": true
	}
];

for (var i = 0; i < items.length; i++) {
	console.log(items[i].tags[2]);
}



// console.log(items); // gets the whole array 
// console.log(items[0].id); // gets the inner object // 1
// console.log(items[0].name);
// console.log(items[0].tags);
// console.log(items[0].tags[1]);
// console.log(items[2].value);