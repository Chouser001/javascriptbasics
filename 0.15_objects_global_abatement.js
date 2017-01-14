// Global var is easy to define but can weaken your code, ovoid if possible. 

var MYAPP = {};

MYAPP.kenn = {
"first-name": "Kenn",
"last-name": "Mack"
};
MYAPP.flight = {
airline: "Oceanic",
number: 105,
departure: {
IATA: "SAN",
time: "2017-01-22 14:55",
city: "ONT"
},
arrival: {
IATA: "LAX",
time: "2017-01-22 14:55",
city: "Los Angeles"
}
};



console.log(MYAPP.flight);