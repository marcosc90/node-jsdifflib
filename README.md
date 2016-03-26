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

- **baseTextName:** [string] the title to be displayed above the base text listing in the diff view [default="Base Text"]
- **newTextName:** [string] the title to be displayed above the new text listing in the diff view [default="New Text"]
- **contextSize:** [int] the number of lines of context to show around differences; by default, all lines are shown
- **inline:** [boolean] if false, a side-by-side diff view is generated (default); if true, an inline diff view is generated
- **colgroup:** [object/boolean] whether to add colgroup tag to table [default = false]
  - **th:** [int] The width (%) of th elements (lines) [default=5]
  - **td:** [int] The width (%) of td elements (content) [default=45]

## Style

jsdifflib comes with a ready to use CSS file (assets/jsdifflib.css) or you can use a custom one.

## Example

```js
const http = require("http");
const diff = require('node-jsdifflib');

const baseFile = "console.log(5);"
const newFile = "\"use strict\";\nconsole.log(5);";

http.createServer(function(req, res){ 
  
    if (req.url === '/favicon.ico') {
      res.writeHead(200, {'Content-Type': 'image/x-icon'} );
      return res.end();
    }

    var output = diff(baseFile, newFile);

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(`<html>
      <head>
        <link rel="stylesheet" href="https://cdn.rawgit.com/marcosc90/node-jsdifflib/8838a6401c6933ca3faa1085bc1ec9b8174a6db8/assets/jsdifflib.css" />
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