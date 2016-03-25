var http = require("http");
var diff = require("./../index.js");

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
