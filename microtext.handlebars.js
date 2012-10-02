/**
 * Microtext.js
 *
 * Copyright 2012, Rodrigo Alves Vieira
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