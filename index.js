/*
* primary file for the API
*
*/

// Dependencies
var http = require('http');
var url = require('url');
// the server should respond to all request with a strin
var server = http.createServer(function(req, res){
    // Get the URL and parse it
    var parsedUrl = url.parse(req.url,true);

    // Get the path from url
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Get the query string as an object
    var queryStringObject = parsedUrl.query;

    // Get the http Method
    var method = req.method.toLowerCase();

    // Send the response
    
    res.end('Hello World\n');

    // Log the request path
    console.log('Request received on path: '+trimmedPath+ ' with method: ' + method+' and with this query string parameter ', queryStringObject);
});

//
server.listen(3000,function(){
    console.log("The server is listening on port 3000 now");
});