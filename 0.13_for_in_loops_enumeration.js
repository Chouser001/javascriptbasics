// this doc looks at best method depending on need

// this - for in - statement loops over all the property names in an Object
// may give unwanted results, possibly out of order, not well defined 

// for in loop
var name;
for (name in cameron_houser) {
    if (typeof cameron_houser[name] !== 'function') {
        document.writeln(name + ': ' + cameron_houser[name]);
    }
}

var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];

// this creates an Array in the correct order. 
// if order is inportant use instead of for in loop
// for loop
for (i = 0; i < properties.length; i += 1) {
    document.writeln(properties[i] + ': ' +
            cameron_houser[properties[i]]);
}