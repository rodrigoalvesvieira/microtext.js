describe("Microtext.js", function() {

  describe("#breakSentence", function() {
    it("Should break a given text sentence into an array of words", function () {
      var text = "to light the sacrifictual";

      expect(Microtext.breakSentence(text)).toBeDefined();
      expect(Microtext.breakSentence(text)).toEqual(["to", "light", "the", "sacrifictual"]);
    });
  });

  describe("#truncate", function() {
    it("should truncate the given string after the given point", function() {
      var string = "Lewis Pirenne";

      expect(Microtext.truncate(string, 10)).toBeDefined();
      expect(Microtext.truncate(string, 10)).toEqual("Lewis Pire...");
    });
  });

  describe("#abbrevName", function() {
    it("should abbreviate the given name", function() {
      var name = "João Gilberto";

      expect(Microtext.abbrevName(name)).toBeDefined();
      expect(Microtext.abbrevName(name)).toEqual("João G.");
    });
  });

  describe("#firstName", function() {
    it("should return the first name within the given expression", function() {
      var composedName = "Rodrigo Alves Vieira";

      expect(Microtext.firstName(composedName)).toBeDefined();
      expect(Microtext.firstName(composedName)).toEqual("Rodrigo");
    });
  });

  describe("#lastName", function() {
    it("should return the last name within the given expression", function() {
      var composedName = "Mark Ronson";

      expect(Microtext.lastName(composedName)).toBeDefined();
      expect(Microtext.lastName(composedName)).toEqual("Ronson");
    });
  });

  describe("#getInitials", function() {
    it("should take a given name and return it in initials", function() {
      var name = "Robert Allen Zimmerman";

      expect(Microtext.getInitials(name)).toEqual("R. A. Z");
    });
  });

  describe("#capitalize", function() {
    it("should turn the given string into capital format", function() {
      var string = "nice place";

      expect(Microtext.capitalize(string)).toBeDefined();
      expect(Microtext.capitalize(string)).toEqual("Nice place");
    });
  });

  describe("#simpleFormat", function() {
    var string = "fire is the devil's only friend";

    it("should take an expression and turn it into a HTML <p> tag", function() {
      expect(Microtext.simpleFormat(string)).toBeDefined();
      expect(Microtext.simpleFormat(string)).toEqual("<p>fire is the devil's only friend</p>");
    });

    it("should take an expression and turn it into a HTML <p> tag with the given class", function() {
      expect(Microtext.simpleFormat(string, { className: "lyrics" })).toBeDefined();
      expect(Microtext.simpleFormat(string, { className: "lyrics" })).toEqual("<p class='lyrics'>fire is the devil's only friend</p>");
    });
  });

  describe("#excerpt", function() {
    it("should throw an exception if song is already playing", function() {
      var phrase = "Who is John Galt?";

      expect(Microtext.excerpt(phrase, "John")).toBeDefined();
      expect(Microtext.excerpt(phrase, "John")).toEqual("...John Galt?...");
    });
  });

  describe("#hideEmail", function() {
    it("should hide part of a given email address to prevent it from being fetched by bots", function() {
      var email = "rodrigo@ubee.in";

      expect(Microtext.hideEmail(email)).toBeDefined();
      expect(Microtext.hideEmail(email)).not.toEqual(email);
      expect(Microtext.hideEmail(email)).toEqual("rod...@ubee.in");
    });
  });

  describe("#hideBadWord", function() {
    it("should turn a given word into an meaningless string to indicate that it has bad content", function() {
      var badWord = "hakuna matata!";

      expect(Microtext.hideBadWord(badWord)).toBeDefined();
      expect(Microtext.hideBadWord(badWord)).not.toEqual(badWord);
    });
  });

  describe("#parameterize", function() {
    it("should replace special characters in a string so that it is transformed into a nicer string", function() {
      var sentence = "jack be nimble, jack be kick";

      expect(Microtext.parameterize(sentence)).toBeDefined();
      expect(Microtext.parameterize(sentence)).toEqual("jack-be-nimble-jack-be-kick");
    });
  });
});