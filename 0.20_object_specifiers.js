// instead of - 
var myObject = maker(f, l, m, c, s);
// we can write: 
var myObject = maker({
first: f,
last: l,
state: s,
city: c
});
// This is easyer to read and lets us make objects inside of an object
// better for data pulling