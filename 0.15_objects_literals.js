// Basic Object literal

//An object literal can appear anywhere an expression can appear:
// An expression is any valid unit of code that resolves to a value. (definitions from developer.mozilla.org)
// right handed expression example = this. // left handed expression example = .toUpperCase
// note location of the dot (.) in the above expressions

var empty_object = {};
var stooge = {
    "first-name": "Cameron",  
    "last-name": "Houser"
};

//prototype linkage feature that allows one object to inherit the
//properties of another. Great for adding new properties to an object


// nesting object
var flight = {
    airline: "United",
    number: 405,
    departure: {
        IATA: "IND",
        time: "2017-01-12 10:35",
        city: "Indianapolis",
    },
    arrival: {
        IATA: "SAT",
        time: "2017-01-12 10:35",
        city: "San-Antonio"
    }
};
console.log(flight.arrival.city); 


