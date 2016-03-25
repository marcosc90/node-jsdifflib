# node-jsdifflib

> A diff library to compare text differences between two texts. 

This is a fork of <a href="https://github.com/cemerick/jsdifflib">cemerick/jsdifflib</a> which has been adapted to render the HTML on the server.

## Installation
  
```shell
npm install node-jsdifflib
```
    
## Overview

jsdifflib is a Javascript library that provides:

1. A partial reimplementation of Python’s difflib module (specifically, the SequenceMatcher class)
2. A visual diff view generator, that offers side-by-side as well as inline formatting of file data

## API
```js
diff(baseText, newText[, options])
```

**options**

- **baseTextName:** the title to be displayed above the base text listing in the diff view; [default="Base Text"]
- **newTextName:** the title to be displayed above the new text listing in the diff view; [default="New Text"]
- **contextSize:** the number of lines of context to show around differences; by default, all lines are shown
- **viewType:** if 0, a side-by-side diff view is generated (default); if 1, an inline diff view is generated

## Style

jsdifflib comes with a ready to use CSS file (assets/jsdifflib.css) or you can use a custom one.

## Example

```js
const http = require("http");
const diff = require('node-jsdifflib');

const baseFile = "console.log(5);"
const newFile = "\"use strict\";\nconsole.log(5);";

http.createServer(function(req, res){ 
  var output = diff(baseFile, newFile);

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end(`<html>
    <head>
      <link rel="stylesheet" href="https://cdn.rawgit.com/marcosc90/node-jsdifflib/master/assets/jsdifflib.css" />
    </head>
    <body>
      ${output}
    </body>
  </html>`);

}).listen(8081, function(){
  console.log("Server started at: http://localhost:8081");
});
```

## License

  BSD