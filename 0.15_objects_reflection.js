// (definitions from developer.mozilla.org)

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

// has data but not protected from finding non data results
typeof flight.number      // 'number'
typeof flight.status      // 'string'
typeof flight.arrival     // 'object'
typeof flight.manifest    // 'undefined'

// has a property, but not data
typeof flight.toString    // 'function'
typeof flight.constructor // 'function'


// reduce the search to true / false.   use to avoid "function" return 
flight.hasOwnProperty('number')         // true
flight.hasOwnProperty('constructor')    // false
