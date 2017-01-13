// This create method creates a new object that uses an old object as its prototype.
// examples from : javascript_the_good_parts
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
another_stooge.profession    // 'actor'

console.log(stooge);
console.log(another_stooge);