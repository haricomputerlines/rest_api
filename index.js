/*
* primary file for the API
*
*/

// Dependencies
var http = require('http');
// the server should respond to all request with a strin
var server = http.createServer(function(req, res){
    res.end('Hello World\n');
});

//
server.listen(3000,function(){
    console.log("The server is listening on port 3000 now");
});