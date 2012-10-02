/**
 * Microtext.js
 *
 * Copyright 2012, Rodrigo Alves Vieira
 * Licensed under MIT
 *
 * @module microtext
*/

var Microtext = {};

/**
 * A function that breaks the String instance into an array
 * returns one of its words that match a given
 * position.
 * @method nameAt
 * @param {String} a text sentence
 * @return {String} a slice of that string
 */
String.prototype.nameAt = function (pos) {
    "use strict";
    var brokenNames = Microtext.breakSentence(this);
    return brokenNames[pos];
};

/**
 * A function for breaking a text sentence
 * into an array of words
 * @module microtext
 * @method breakSentence
 * @param {String} a text sentence
 * @return {Array} an array of words
 */
Microtext.breakSentence = function (sentence) {
    "use strict";
    return sentence.trim().split(" ");
};

/**
 * A function for truncating a text sentence
 * in a given length
 * @module microtext
 * @method truncate
 * @param {String} a text sentence
 * @param {Number} a sentnce length
 * @return {String} the truncated string
 */
Microtext.truncate = function (sentence, length) {
    "use strict";
    if (sentence.constructor === String && length.constructor === Number) {
        return sentence.slice(0, length) + "...";
    }
};

/**
 * A function that takes a sentence as argument
 * and return its first word
 * @module microtext
 * @method firstName
 * @param {String} a text sentence
 * @return {String} the first word of the sentence
 */
Microtext.firstName = function (names) {
    "use strict";
    var brokenNames = Microtext.breakSentence(names);
    return brokenNames[0];
};

/**
 * A function that takes a sentence (i.e a full person name) as argument
 * and return its last part, a.k.a the last name
 * @module microtext
 * @method lastName
 * @param {String} a text sentence
 * @return {String} the last word of the sentence
 */
Microtext.lastName = function (sentence) {
    "use strict";
    var brokenNames = Microtext.breakSentence(sentence);
    if (brokenNames.length > 1) {
        return brokenNames[brokenNames.length - 1];
    }
    if (brokenNames.length === 1) {
        return Microtext.firstName(sentence);
    }
};

/**
 * A function that takes a sentence as argument and returns the initials
 * of the terms of the given sentence
 * @module microtext
 * @method getInitials
 * @param {String} a text sentence
 * @return {String} the initials of that string's words
 */
Microtext.getInitials = function (expr) {
    "use strict";
    var brokenNames = Microtext.breakSentence(expr),
        abbrevName,
        nameList = [];

    brokenNames.forEach(function (name) {
        nameList.push(name.charAt(0));
    });

    if (nameList.length > 1) {
        abbrevName = nameList.toString().toUpperCase();
        return abbrevName.replace(/\,/g, ". ");
    }
};

/**
 * A function that takes a sentence (i.e a full person name) as argument
 * and return that string in abbreviated form. Example:
 *
 * Microtext.abbrevName("Hari Seldon"); // returns "Hari S."
 * @module microtext
 * @method abbrevName
 * @param {String} a text sentence
 * @return {String} the abbreviated form of that string
 */
Microtext.abbrevName = function (expr) {
    "use strict";
    var brokenNames = Microtext.breakSentence(expr);

    if (brokenNames.length > 1) {
        return (brokenNames[0] + " " + brokenNames[1].charAt(0) + ".");
    }

    return brokenNames[0];
};

/**
 * A function that takes an expression and returns the capitalized
 * version of it. Example:
 *
 * Microtext.capitalize("foundation"); // returns "Foundation"
 * @module microtext
 * @method capitalize
 * @param {String} a text expression
 * @return {String} the capitalized form of that string
 */
Microtext.capitalize = function (expr) {
    "use strict";
    var capitalizedExpr = expr.charAt(0).toUpperCase() + expr.slice(1);
    return capitalizedExpr;
};