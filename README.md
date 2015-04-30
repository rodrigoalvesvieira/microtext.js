# microtext.js

A micro JavaScript utility for processing text.

NOTE: the purpose of this project is to provide simple and useful text processing functions to the web developer's toolset. Please read the [Contributions] section for more information about this.

[![Build Status](https://secure.travis-ci.org/rodrigoalvesvieira/microtext.js.png)](http://travis-ci.org/rodrigoalvesvieira/microtext.js)

## Usage


### Microtext object functions:

```javascript

Microtext.breakSentence("Gaal Dornick"); // ["Gaal", "Dornick"]

Microtext.truncate("Lewis Pirenne", 10) // "Lewis Pire..."

Microtext.abbrevName("Hari Seldon"); // "Hari S."

Microtext.firstName("Lors Avakim"); // "Lors"

Microtext.lastName("Salvor Hardin"); // "Hardin"

Microtext.getInitials("Bor Alurin"); // "B. A"

Microtext.capitalize("foundation"); // "Foundation"

Microtext.simpleFormat("Sef Sermak"); // returns "<p>Sef Sermak</p>"

Microtext.simpleFormat("Sef Sermak", { className: "character" });
// returns "<p class='character'>Sef Sermak</p>"

Microtext.excerpt("Who is John Galt?", "John"); // returns "...John Galt?..."

Microtext.hideEmail("rodrigo@example.com"); // "rod...@example.com"

Microtext.parameterize("It was childish to feel disappointed");
// "it-was-childish-to-feel-disappointed"

Microtext.hideBadWord("Bitch!"); // "B!#&&"
```

Refer to the [Wiki](https://github.com/rodrigoalvesvieira/microtext.js/wiki) for more information.

### String instance methods

```javascript

"Anselm haut Rodric".nameAt(2) // "Rodric"

"Anselm haut Rodric".nameAt(3) // undefined
```

### Handlebars.js

Microtext.js functions can also be used as plain Handlebars.js helpers:

```ruby

{{ getInitials "Isaac Newton" }}

{{ abbrevName "Albert Einstein" }}
```

## Checking for code quality

Microtext.js was written to be 100% passed by [JSLint]() with no flags. So you can try:

```javascript
$ jslint microtext.js
```

Also, you can run [JSHint]() on the project via [Grunt]():

```javascript
$ cd microtext.js

$ grunt
```

## Build

Generate the minified version of Microtext, a.k.a `microtext.min.js`

```shell
$ uglifyjs src/microtext.js --screw-ie8 > dist/microtext.min.js
```

## Author

  * Rodrigo Alves - rodrigovieira1994 [at] gmail [dot] com

## Contributions

You can contribute to Microtext.js by adding new text processing/helper functions or by improving the existing ones as well as fixing eventual bugs. In any case, your contribution is totally welcome.

Refer to [this blog post] if you don't know how to proceed before sending a Pull Request.

## Licence

Released under the MIT License. See LICENSE.txt for details.

Copyright (c) 2012-2014 Rodrigo Alves

[this blog post]: http://www.rodrigoalvesvieira.com/how-to-contribute-open-source/
[Contributions]: #contributions
