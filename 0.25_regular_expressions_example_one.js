// Example 1

var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";
var result = parse_url.exec(url);
// parse_url’s exec = http://parse_url.nerdyjs.com/search/parse_url suggests only 1,400 sites use this code. 
// this uses the array below to break down the url into its parts. 

var names = ['url', 'scheme', 'slash', 'host', 'port',
'path', 'query', 'hash'];
var blanks = ' ';
var i;
for (i = 0; i < names.length; i += 1) {
console.log(names[i] + ':' +
blanks.substring(names[i].length), result[i]);
}

// breaking down the  parse_url.exec
// var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
//how it works: ^ = this character indicates the beginning of the string. the / before the ^ indicates the //

// capturing group 1
// how it works (?:([A-Za-z]+):)? = matches scheme name but only after the :,
// the (?:...) indicates a noncapturing group. the ? indicates that the group is optional. It means repeat zero or one time. 
// the (...) above indicates a capturing group . A capturing
// group copies the text it matches and places it in the result array. Each capturing
// group is given a number. This first capturing group is 1, so a copy of the text
// matched by this capturing group will appear in result[1].
// The [...] indicates a character class
// This character class, A-Za-z, contains 26 uppercase letters and 26 lowercase letters. The hyphens indicate ranges, from A to Z. The suffix + indicates that the
// character class will be matched one or more times. 
// the group is followed by the : character, which will be matched literally:

// capturing group 2
//The (\/{0,3})
// \/ indicates that a / (slash) character should be
// matched. It is escaped with \ (backslash) so that it is not misinterpreted as the end of
// the regular expression literal. 

// The suffix {0,3} indicates that the / will be matched 0
// or 1 or 2 or 3 times

// capturing group 3
// The ([0-9.\-A-Za-z]+) It will match a host name , which is made up of
// one or more digits, letters, or . or –. The – was escaped as \- to prevent it from being
// confused with a range hyphen

// capturing group 4
// The (?::(\d+))?
// optionally matches a port number, which is a sequence of one or
// more digits preceded by a ":""
//  The \d represents a digit character. The series of one or more digits will be capturing group 4

// capturing group 5
// The (?:\/([^?#]*))?
// We have another optional group. This one begins with a /. The character class [^?#]
// begins with a ^, which indicates that the class includes all characters except ? and #.
// The * indicates that the character class is matched zero or more times
// the class of all characters except ? and # includes
// line-ending characters, control characters, and lots of other characters that really
// shouldn’t be matched here

// capturing group 6
//Then (?:\?([^#]*))?
// Next, we have an optional group that begins with a ?. It contains capturing group 6,
// which contains zero or more characters that are not #

// capturing group 7
// (?:#(.*))?
// We have a final optional group that begins with #. The . will match any character
// except a line-ending character

//$ represents the end of the string. It assures us that there was no extra material
// after the end of the URL

