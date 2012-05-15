/**
 * Microtext.js
 *
 * Copyright 2012, Rodrigo Alves Vieira
 * Licensed under MIT
 *
 * @module microtext
*/

/** 
 * A function that breaks the String instance into an array
 * returns one of its words that match a given 
 * position.
 * @method nameAt
 * @param {String} a text sentence
 * @return {String} a slice of that string
 */
String.prototype.nameAt = function(pos) {
    var brokenNames = Microtext.breakSentence(this);
    return brokenNames[pos];
}

var Microtext = {};

/**
 * A function for breaking a text sentence
 * into an array of words
 * @module microtext
 * @method breakSentence
 * @param {String} a text sentence
 * @return {Array} an array of words
 */
Microtext.breakSentence = function(sentence) {
    return sentence.trim().split(" ");  
}

/**
 * A function for truncating a text sentence
 * in a given length
 * @module microtext
 * @method truncate
 * @param {String} a text sentence
 * @param {Number} a sentnce length
 * @return {String} the truncated string
 */
Microtext.truncate = function(sentence, length) {
    if (sentence.constructor === String && length.constructor === Number) {
        return sentence.slice(0, length) + "...";
    }
}

/**
 * A function that takes a sentence as argument
 * and return its first word
 * @module microtext
 * @method firstName
 * @param {String} a text sentence
 * @return {String} the first word of the sentence
 */
Microtext.firstName = function(names) {
    var brokenNames = Microtext.breakSentence(names);
    return brokenNames[0];
}

/**
 * A function that takes a sentence (i.e a full person name) as argument
 * and return its last part, a.k.a the last name
 * @module microtext
 * @method lastName
 * @param {String} a text sentence
 * @return {String} the last word of the sentence
 */
Microtext.lastName = function(sentence) {
    var brokenNames = Microtext.breakSentence(sentence);
    if (brokenNames.length > 1) {
        return brokenNames[brokenNames.length -1];
    }
    else if (brokenNames.length === 1) {
        return Microtext.firstName(sentence);
    }
}

/**
 * A function that takes a sentence as argument and returns the initials
 * of the terms of the given sentence
 * @module microtext
 * @method getInitials
 * @param {String} a text sentence
 * @return {String} the initials of that string's words
 */
Microtext.getInitials = function(expr) {
    var brokenNames = Microtext.breakSentence(expr),
        nameList = [];
  
    brokenNames.forEach(function(name) {
        nameList.push(name.charAt(0));
    });
  
    if (nameList.length > 1) {
        var abbrevName = nameList.toString().toUpperCase();
        return abbrevName.replace(/\,/g, ". ");  
    }
}

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
Microtext.abbrevName = function(expr) {
  var brokenNames = Microtext.breakSentence(expr);
  if (brokenNames.length > 1) { 
    return(brokenNames[0] + " " + brokenNames[1].charAt(0) + ".");
  }
  else {
    return brokenNames[0];
  }
}
