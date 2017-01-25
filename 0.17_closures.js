// Closures

// 1. a Closure gives you acces to the variables set in a FUNCTION
// 	after a function has completed and returned. 
// 2. Help keep variables from getting pushed into the global scope. 
// 3. Degree of protection. Variable cant't be overwritten unless
// we deliberatly do so. 

var james = {};
var setAge = function(myAge) {
	var birthday = "4/19/1979";

	return {
		getAge : function() {
			return myAge;
		},

		getBirthday : function() {
			return birthday;
		}
	}
}

james.age=setAge(36);
console.log(james.age);
console.log(james.age.getAge());
console.log(james.age.getAge.birthday);
console.log(james.age.getBirthday());