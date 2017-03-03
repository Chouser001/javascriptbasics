// \f is the formfeed character, \n is the newline character, 
// \r is the carriage return character, \t is the tab character, and \u allows for specifying a Unicode
// character as a 16-bit hex constant. In regexp factors, \b is not the backspace character

// \d is the same as [0-9]. It matches a digit. \D is the opposite: [^0-9]

// \s is the same as [\f\n\r\t\u000B\u0020\u00A0\u2028\u2029]. 
// This is a partial set of Unicode whitespace characters. \S is the opposite: [^\f\n\r\t\u000B\u0020\u00A0\u2028\
// u2029].

// \w is the same as [0-9A-Z_a-z]. \W is the opposite: [^0-9A-Z_a-z]
// - not suggested, you need to mathc a class of letters yourself. 

// simple letter class is [A-Za-z\u00C0-\u1FFF\u2800-\uFFFD]

// \b was intended to be a word-boundary anchor

// \w to find word boundaries

// \1 is a reference to the text that was captured by group 1 so that it can be matched
// again
var doubled_words =
/[A-Za-z\u00C0-\u1FFF\u2800-\uFFFD'\-]+\s+\1/gi;
// doubled_words looks for occurrences of words (strings containing 1 or more letters)
// followed by whitespace followed by the same word

// \2 is a reference to group 2, \3 is a reference to group 3, and so on