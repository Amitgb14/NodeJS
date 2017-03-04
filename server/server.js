var http = require('http');
var server = http.createServer(engine);
var port = 1337;

server.listen(port);

function engine(request, response) {
		
		//console.log(response);
		response.writeHead(200, {'Cotent-Type':'text/plain'});
		response.end('Hey there, from NodeJS server! :D.');
}

