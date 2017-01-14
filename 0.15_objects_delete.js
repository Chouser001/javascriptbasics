var stooge = {
    "first-name": "Cameron",  
    "last-name": "Houser"
};

if (typeof Object.create !== 'function') {
     Object.create = function (o) {
         var C = function () {};
         C.prototype = o;
         return new C();
   		};
   	}

   	
var another_stooge = Object.create(stooge);

// The prototype link has no effect on updating.
another_stooge['first-name'] = 'Kenn';
another_stooge['middle-name'] = 'James';
another_stooge.nickname = 'Java';

stooge.profession = 'actor';
another_stooge.profession    // 


console.log(another_stooge);

another_stooge.nickname // 
// Remove nickname from another_stooge, revealing
// the nickname of the prototype.

delete another_stooge.nickname;
another_stooge.nickname // 

// Works! - removes the requested property in the object. Note the (.) Dot method
console.log("-----------------------")
console.log(another_stooge);