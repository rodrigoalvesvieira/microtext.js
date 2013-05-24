/**
 * Microtext.js
 *
 * Copyright 2012-2013, Rodrigo Alves
 * Licensed under MIT
 *
*/

Handlebars.registerHelper('breakSentence', function (sentence) {
    "use strict";
    return sentence.trim().split(" ");
});

Handlebars.registerHelper('truncate', function (sentence) {
    "use strict";
    if (sentence.constructor === String) {
        return new Handlebars.SafeString(sentence.slice(0, 10) + "...");
    }
});

Handlebars.registerHelper('firstName', function (names) {
    "use strict";
    var brokenNames = Handlebars.helpers.breakSentence(names);
    return brokenNames[0];
});

Handlebars.registerHelper('lastName', function (names) {
    "use strict";
    var brokenNames = Handlebars.helpers.breakSentence(names);
    if (brokenNames.length > 1) {
        return brokenNames[brokenNames.length - 1];
    }

    if (brokenNames.length === 1) {
        return Handlebars.helpers.firstName(names);
    }
});

Handlebars.registerHelper('getInitials', function (expr) {
    "use strict";
    var brokenNames = Handlebars.helpers.breakSentence(expr),
        abbrevName,
        nameList = [];

    brokenNames.forEach(function (name) {
        nameList.push(name.charAt(0));
    });

    if (nameList.length > 1) {
        abbrevName = nameList.toString().toUpperCase();
        return abbrevName.replace(/\,/g, ". ");
    }
});

Handlebars.registerHelper('capitalize', function (expr) {
    "use strict";
    var capitalizedExpr = expr.charAt(0).toUpperCase() + expr.slice(1);
    return capitalizedExpr;
});

Handlebars.registerHelper('simpleFormat', function (expr, htmlOptions) {
    "use strict";
    var options = htmlOptions || {},
        className = options.className,
        outputString;

    if (className !== undefined) {
        outputString = "<p class='" + className + "'>" + expr + "</p>";
        return outputString;
    }

    return "<p>" + expr + "</p>";
});

Handlebars.registerHelper('excerpt', function (expr, phrase) {
    "use strict";
    var startPos = expr.indexOf(phrase),
        outputString;

    if (typeof startPos === "number") {
        console.log("yup");
        return "..." + expr.substr(startPos) + "...";
    }

    outputString = expr;
    return outputString;
});


Handlebars.registerHelper('hideEmail', function (email) {
    "use strict";

    var avg, splitted, firstPart, secondPart, finalStr;
    splitted = email.split("@");
    firstPart = splitted[0];
    avg = (firstPart.length / 2);
    firstPart = firstPart.substring(0, (firstPart.length - avg));
    secondPart = splitted[1];

    finalStr = firstPart + "...@" + secondPart;
    return finalStr;
});