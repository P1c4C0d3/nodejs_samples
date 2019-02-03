var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Context-Type": "text/html"});
    response.write("Hi!");
    response.end();
}).listen(7777);
