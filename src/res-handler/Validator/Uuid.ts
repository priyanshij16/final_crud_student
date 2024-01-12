// A regular expression is a pattern of characters.

// Remember to include ^ and $ in your regular expression, 
// otherwise the overall length of the pattern is infinite.

// (?i)^(?=.*[a-z])[a-z0-9]{8,20}$

// (?i) makes it case-insensitive
// ^ asserts that we are at the beginning of the string
// the lookahead (?=.*[a-z]) checks that we have at least one letter
// [a-z0-9]{8,20} matches 8 to 20 letters or digits (letters can be uppercase too)
// $ asserts that we have reached the end of the string

// A global search for numbers that are NOT from 5 to 8:
// let text = "123456789";
// let pattern = /[^5-8]/g;

// .	Find a single character, except newline or line terminator
// \w	Find a word character
// \W	Find a non-word character
// \d	Find a digit
// \D	Find a non-digit character
// \s	Find a whitespace character
// \S	Find a non-whitespace character
// \b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
// \B	Find a match, but not at the beginning/end of a word
// \0	Find a NULL character
// \n	Find a new line character

function isUuid(id:string){
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    if(id.match(regexExp)==null){
        return false
    }
    return true
}
module.exports = isUuid
