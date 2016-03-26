const http = require("http");
const diff = require("./../index.js");

const baseFile = "console.log(5);"
const newFile = "\"use strict\";\nconsole.log(5);";

http.createServer(function(req, res){ 

	 if (req.url === '/favicon.ico') {
      res.writeHead(200, {'Content-Type': 'image/x-icon'} );
      return res.end();
    }

	var output = diff(baseFile, newFile, { colgroup: true, inline: false });

 	res.writeHead(200, {'Content-Type': 'text/html'});

	res.end("<html>" +
		"<head>" +
			'<link rel="stylesheet" href="https://cdn.rawgit.com/marcosc90/node-jsdifflib/master/assets/jsdifflib.css" />'+
		"</head>" +
		"<body>" +
			output +
		"</body>"+
	"</html>");


}).listen(8081, function(){
	console.log("Server started at: http://localhost:8081");
});
