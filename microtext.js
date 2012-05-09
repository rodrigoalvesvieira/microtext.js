/*!
 * Microtext.js
 *
 * Copyright 2012, Rodrigo Alves Vieira
 * Licensed under MIT
*/


var Microtext = {
  // Breaks text sentence into an array of words
  breakSentence: function(sentence) {
    return sentence.trim().split(" ");  
  }
  
  // Takes a sentence (i.e a full person name) as argument 
  // and return that string in
  // abbreviated form. Usage example:
  // 
  // Microtext.abbrevName("Hari Seldon");
  // returns "Hari S."
  abbrevName: function(expr) {
    var brokenNames = Microtext.breakSentence(expr);
    if (brokenNames.length > 1) { 
      return(brokenNames[0] + " " + brokenNames[1].charAt(0) + ".");
    }
    else {
      return(brokenNames[0]);
    }
  }
  
  // Takes a sentence (i.e a full person name) as argument and returns
  // its first part a.k.a the first name
  lastName: function(expr) {
    var brokenNames = Microtext.breakSentence(expr);
    if (brokenNames.length > 1) {
      return(brokenNames[brokenNames.length -1]);
    }
    else {
      return("");
    }
  }

  // Takes a sentence as argument and returns the initials of
  // the terms of the given sentence
  getInitials: function(expr) {
    var brokenNames = Microtext.breakSentence(expr);    
    var nameList = [];
    
    brokenNames.forEach(function(name) {
      nameList.push(name.charAt(0));
    });
    
    if (nameList.length > 1) {
      var abbrevName = nameList.toString().toUpperCase();
      return abbrevName.replace(/\,/g, ". ");  
    }
    else {
      return "";
    }
  }
}
