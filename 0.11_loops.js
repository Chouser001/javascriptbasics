// indexing 0 1 2 3 4 .....
// DRY - Don't Repeat Yourself = good
// WET -- Write Everthing = bad
 var name = "Cameron";
// console.log(name.length);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);

var lcv = 0; // loop control variable 

while(lcv < 5) { 
	console.log(name.toUpperCase());
	lcv +=1; // THIS IS CRITICAL!!! NO VAR LEADS TO INFINITY 
}

// create a while loop that starts at 0 and ends at 10
// this while loop should print each number of the lcv 
// make your lcv var count = 0

var count = 0;
while(count <= 10){
	console.log(count);
	count++; // ++ is the same as +=1
}

// var name2 = "Tim";
// for (i = 0; i < name2.length; i++) {
// 	console.log(i);
// }
console.log("----------------------------")

var num = 10;     // the inside the { } is a block of code
while (num > 0) {
	console.log(num);
	num -= 2;
}
console.log("----------------------------")

var evenCount = 0;
while (evenCount < 20) {
	if (evenCount % 2 === 0){
		console.log(evenCount + " is even");
	} else {
		console.log(evenCount + " is odd");
	}
	evenCount++;
}
console.log("----------------------------")

var countFive = 0;
while (countFive <= 50) {
	if (countFive % 5 === 0){
		console.log(countFive + " is party time");
	} 
	countFive+=5;
}

console.log("----------------------------")
