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

Microtext.simpleFormat("Sef Sermak", { className: "character" }); // returns "<p class='character'>Sef Sermak</p>"

Microtext.excerpt("Who is John Galt?", "John"); // returns "...John Galt?..."

Microtext.hideEmail("rodrigo@example.com"); // "rod...@example.com"
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

## Author

  * Rodrigo Alves Vieira - rodrigovieira1994 [at] gmail [dot] com - http://www.rodrigoalvesvieira.com

## Contributions

You can contribute to Microtext.js by adding new text processing/helper functions or by improving the existing ones as well as fixing eventual bugs. In any case, your contribution is totally welcome.

Refer to [this blog post] if you don't know how to proceed before sending a Pull Request.

## Pay it forward

If this project is so useful to you that you're considering making a donation to it, instead of paying me a beer (which would also be lovely), please
consider donating to the [Khan Academy].

## Licence

Copyright (c) 2012-2013 Rodrigo Alves Vieira. http://www.rodrigoalvesvieira.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to use, copy and modify copies of the Software, subject
to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[this blog post]: http://www.rodrigoalvesvieira.com/how-to-contribute-open-source/
[Contributions]: #contributions
[Khan Academy]: https://www.khanacademy.org/
