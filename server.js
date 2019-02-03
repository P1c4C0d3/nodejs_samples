var http = require("http");
function serverStart() {
    http.createServer(function(request, response) {
        response.writeHead(200, {"Context-Type": "text/html"});
        response.write("Hi!");
        response.end();
    }).listen(7777);
    console.log("Server started...");
}
exports.start = serverStart;

