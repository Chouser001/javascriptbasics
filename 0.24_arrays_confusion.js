var is_array = function (value) {
return value &&
typeof value === 'object' &&
value.constructor === Array;
};

var is_array = function (value) {
return value &&
typeof value === 'object' &&
typeof value.length === 'number' &&
typeof value.splice === 'function' &&
!(value.propertyIsEnumerable('length'));
};

// it is possible to write functions that do one thing when passed a
// single value and lots of things when passed an array of values.

// if the length property is enumerable (will length be produced by a for in loop?).
// That will be false for all arrays.