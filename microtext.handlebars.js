Handlebars.registerHelper('breakSentence', function(sentence) {
  return sentence.trim().split(" ");
});

Handlebars.registerHelper('truncate', function(sentence) {
  if (sentence.constructor === String) {
    return new Handlebars.SafeString(sentence.slice(0, 10) + "...");
  }
});

Handlebars.registerHelper('firstName', function(names) {
  var brokenNames = Handlebars.helpers.breakSentence(names);
  return brokenNames[0];
});

Handlebars.registerHelper('lastName', function(names) {
  var brokenNames = Handlebars.helpers.breakSentence(names);
    if (brokenNames.length > 1) {
      return brokenNames[brokenNames.length -1];
    }
    else if (brokenNames.length === 1) {
      return Handlebars.helpers.firstName(names);
    }
});

Handlebars.registerHelper('getInitials', function(expr) {
  var brokenNames = Handlebars.helpers.breakSentence(expr),
      nameList = [];

  brokenNames.forEach(function(name) {
      nameList.push(name.charAt(0));
  });

  if (nameList.length > 1) {
      var abbrevName = nameList.toString().toUpperCase();
      return abbrevName.replace(/\,/g, ". ");
  }
});
