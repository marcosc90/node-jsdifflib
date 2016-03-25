# jsdifflib

A diff library to compare text differences between two texts. This is a fork of [cemerick/jsdifflib](https://github.com/cemerick/jsdifflib) which has been adapted to render the HTML on the server.

## Installation

    npm install node-jsdifflib

## Overview

jsdifflib is a Javascript library that provides:

1. A partial reimplementation of Python’s difflib module (specifically, the SequenceMatcher class)
2. A visual diff view generator, that offers side-by-side as well as inline formatting of file data

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
      <link rel="stylesheet" href="https://gitcdn.link/repo/marcosc90/node-jsdifflib/master/assets/diffview.css" />
    </head>
    <body>
      ${output}
    </body>
  </html>`);

}).listen(8082, function(){
  console.log("Server started at: http://localhost:8082");
});
```

## License

  BSD