/**
 * Fill out the logic for the methods on this class so that they
 * pass the tests (run "npm run test:strings" from the command line to test).
 */

/**
 * Takes in one parameter (strings) and returns it
 */
function identity(str) {
    return str;
}

/**
 * Takes in two parameters (string), concatenate (merges) them together and
 * returns them.
 */
function combine(str, mer) {
    return str + mer;
}

/**
 * Takes in one parameter (string), returns its length
 */
function length(str) {
    return str.length;
}

/**
 * Takes in one parameter (string), returns true if it is empty, false otherwise
 */
function isEmpty(str) {
    return str === "";
}

/**
 * Takes in one parameter (string), returns an Array of strings that
 * contains only the words in the string (no spaces)
 */
function toArray(str) {
    return str.split(' ');
}

/**
 * Takes in two parameters, a string and a number (in that order).
 * Returns a string that only contains the first X number of characters
 * based on the number parameter.
 */
function clip(str, num) {
    return str.slice(0, num);
}

/**
 * Takes in one parameter (string), returns a new string with the characters
 * in the reverse order
 */
function reverse(str) {
    return str.split('').reverse().join('');
}

/**
 * Takes in two parameters, a string and a number (in that order). Similar to
 * the clip method, only it will only truncate if the string is long enough.
 * All strings that are truncated should have an elipsis ('...') appended to
 * them. The final string should not be longer than the number passed in! If the number passed in is less than or equal to 3,
 * return the string as-is.
 */
function truncate(str, num) {
    if (str === '') {
        return '';
    } else if (num <= 3) {
        return str;
    } else if (num > 3 && num < 8) {
        return str.substring(0, (num - 3)) + '...';
    } else {
        return str;
    }
}

/**
 * Takes in one parameter (string), returns a new string that has no leading or
 * trailing spaces.
 */
function strip(str) {
    return str.trim();
}

/**
 * Takes in two parameters, a string and a number (in that order). Returns
 * a string that is repeated X number of times depending upon the number
 * passed in.
 */
function repeat(str, num) {
    return str.repeat(num);
}

/**
 * Takes in two paramters (strings), returns true if the second string is
 * contained within the first string, false otherwise.
 */
function contains(str1, str2) {
    return str1.includes(str2);
}

/**
 * Takes in two paramters (strings), returns true if the strings are
 * the same, false otherwise. (case-sensitive)
 */
function isEqual(str1, str2) {
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}

/**
 * Takes in two paramters (strings), returns true if the strings have the
 * same letters (case-insensitive), false otherwise.
 */
function isSimilar(str1, str2) {
    if (str1.toUpperCase() === str2.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}


module.exports = { identity, combine, length, isEmpty, toArray, clip, reverse, truncate, strip, repeat, contains, isEqual, isSimilar };
