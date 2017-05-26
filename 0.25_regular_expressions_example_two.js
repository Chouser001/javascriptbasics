// Example 2

var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
var test = function (num) {
console.log(parse_number.test(num));
};
test('1'); // true
test('number'); // false
test('98.6'); // true
test('132.21.86.100'); // false
test('123.45E-67'); // true
test('123.45D-67'); // false

// breaking down parse_number

// start=/^  end=$/i

// We again use ^ and $ to anchor the regular expression. This causes all of the charac
// ters in the text to be matched against the regular expression. If we had omitted the
// anchors, the regular expression would tell us if a string contains a number. With the
// anchors, it tells us if the string contains only a number. If we included just the ^, it
// would match strings starting with a number. If we included just the $, it would
// match strings ending with a number.

//The i flag causes case to be ignored when matching letters.

// The ? suffix on the minus sign indicates that the minus sign is optional:

// \d means the same as [0-9]. It matches a digit. The + suffix causes it to match one or
// more digits

// (?:\.\d*)?
// The (?:...)? indicates an optional noncapturing group. It is usually better to use noncapturing groups
 // instead of the less ugly capturing groups because capturing has a
// performance penalty. The group will match a decimal point followed by zero or
// more digits

// (?:e[+\-]?\d+)?
// This is another optional noncapturing group. It matches e (or E), an optional sign,
// and one or more digits.


var b = "too"
var c = "talk"

var bc = b + c

console.log(bc)