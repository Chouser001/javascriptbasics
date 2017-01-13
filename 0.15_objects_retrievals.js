// Retrievals -- using [] use dot (.) for none reserved words in retrievals 
// (definitions from developer.mozilla.org)


// Ok
stooge["first-name"]     // "Cameron"
// Best
flight.departure.IATA    // "IND"


stooge["middle-name"]    // undefined
flight.status            // undefined
stooge["FIRST-NAME"]     // undefined
 
 //use something like this to fill in default values
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";


// use && to guard against the "TypeError"
flight.equipment                              // undefined
//flight.equipment.model                        // throw "TypeError"
flight.equipment && flight.equipment.model    // undefined

